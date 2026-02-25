const User = require("../model/userModel");
const AppError = require("../utilities/appError");
const catchAsync = require("../utilities/catchAsync");
const jwt = require('jsonwebtoken')
const { promisify } = require('util')
//create the token for the user
const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE_IN });
}
exports.signup = catchAsync(async (req, res, next) => {
    const user = await User.create(req.body)
    console.log("signup...")
    const token = signToken(user.id);

    res.status(200).json({
        status: "success",
        token,
        data: user
    })
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
    const token = signToken(user._id)
    res.status(200).json({
        status: "success",
        token

    })
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
    const resetTokeno = user.createPasswordResetToken()
    user.save({ validateBeforeSave: false });

})
exports.resetPassword = (req, res, next) => {

}