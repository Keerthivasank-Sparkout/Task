const User = require("../model/userModel");
const AppError = require("../utilities/appError");
const sendEmail = require("../utilities/email");
const catchAsync = require("../utilities/catchAsync");
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const { promisify } = require('util')
//create the token for the user
const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE_IN });
}
const cookieOption = {
    expires: new Date(Date.now() + Number(process.env.JWT_COOKIE_EXPIRE_IN) * 24 * 60 * 60 * 1000),
    httpOnly: true
};
const createSendToken = (user, statusCode, res) => {
    const token = signToken(user.id);
    if (process.env.NODE_ENV === 'production') cookieOption.secure = true
    res.cookie('jwt', token, cookieOption);
    //this is restirc to print password in output.
    user.password = undefined;
    
    res.status(statusCode).json({
        status: "success",
        token,
        data: user
    })
}
exports.signup = catchAsync(async (req, res, next) => {
    const user = await User.create(req.body)
    createSendToken(user, 201, res);

})

exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body

    if (!email || !password) {
        return next(new AppError("Please provide the email and password...", 400));
    }
    const user = await User.findOne({ email }, '+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError("Invalid email and Password...", 401));
    }
    createSendToken(user, 200, res);

})

exports.protect = catchAsync(async (req, res, next) => {
    let token;
    //1.get Token form the user
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
        return next(new AppError("Your not login..do login to get access...", 401))
    }
    //2.verify the token
    const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    //3.check the user belong to the token is still exit
    // console.log(typeof(decode.id))
    // console.log(decode.id)
    const freshUser = await User.findById(decode.id);
    // console.log(freshUser)
    if (!freshUser) {
        return next(new AppError("The user belong the Token is not exits. please login again...", 401))
    }

    //4.check password changed after login
    if (freshUser.changePasswordAfter(decode.iat)) {
        return next(new AppError("user recently changed password! please login again..", 401))
    }
    req.user = freshUser;
    next()
})

exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new AppError("You don't have permission to delete tour contact admin...", 403))
        }
        next();
    }
}

exports.forgotPassword = catchAsync(async (req, res, next) => {
    //1.Get user on the POSTed mail
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return next(new AppError("There is no user with this email...", 403));
    }

    //2.Generate the resettoken
    const resetToken = user.createPasswordResetToken()
    user.save({ validateBeforeSave: false });

    //3.sen email to the user
    const resetUrl = `${req.protocal}://${req.get('host')}/api/v1/users/resetPassword/${resetToken}:`
    const message = `Forgot your Password? submit a PATCH request with your New password and passwordConfirm to:${resetUrl}.\nIf you did'n forgot the password ignore this email!.`
    try {
        await sendEmail({
            email: user.email,
            subject: 'You password reset token(valid for 10 min)',
            message
        });
        res.status(200).json({
            status: 'success',
            message: "The email is sent.."
        })
    } catch (err) {
        user.passwordResetToken = undefined;
        user.passwordResetExpire = undefined;
        user.save({ validateBeforeSave: false });
        return next(new AppError('There was an error sending the email. Try again later.', 500));
    }

})
exports.resetPassword = catchAsync(async (req, res, next) => {
    //1.Get user based on the token
    const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

    const user = await User.findOne({ passwordResetToken: hashedToken, passwordResetExpire: { $gt: Date.now() } })

    //2.if token has not expired ,there is user, set new password
    if (!user) {
        return next(new AppError('Token is invalid or has expired', 400));
    }
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    user.passwordResetToken = undefined;
    user.passwordResetExpire = undefined;
    await user.save();
    //3.update changedPasswordAt property for the user 
    //4.Log the user in,send JWT
    createSendToken(user, 200, res);

})

exports.updatePassword = catchAsync(async (req, res, next) => {
    //1.Get user from the collection
    const user = await User.findById(req.user.id).select('+password')

    //2.check if posted currecnted password is correct 
    if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
        return next(new AppError("Your current password is worng", 401));
    }
    //3.if yes, update the password 
    user.password = req.body.password
    user.passwordConfirm = req.body.passwordConfirm
    await user.save();
    //4.log in user sent jwt
    createSendToken(user, 200, res);
})