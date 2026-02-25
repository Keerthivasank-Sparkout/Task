const AppError = require('../utilities/appError');
const User = require('./../model/userModel')
const catchAsync = require('./../utilities/catchAsync')
const jwt = require('jsonwebtoken')
const filterObj = (obj, ...allowedField)=>{
    const newObj={};
    Object.keys(obj).forEach(el=>{
        if(allowedField.includes(el)) newObj[el] = obj[el]
    })
    return newObj;
}
exports.createUser = catchAsync(async (req,res)=>{
    const user =await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        passwordChangedAt:req.body.passwordChangedAt,
        passwordConfirm:req.body.passwordConfirm
    });
    res.status(200).json({
        status:'success',
        data:user
    })
})
exports.updateMe = catchAsync(async (req,res,next)=>{
    //1.generate error try to update password
    if(req.body.password || req.body.passwordConfirm){
        return next(new AppError("This route is not change the password. use updateMypassword route to update the password",400));
    }
    //2.filter the update field
    const filterBody = filterObj(req.body,'name','email');

    //3.update user
    const updatedUser = await User.findByIdAndUpdate(req.user.id,filterBody,{
        new:true,
        runValidators:true
    })


    res.status(200).json({
        status:'success',
        data: updatedUser
    })
})
exports.deleteMe = catchAsync(async (req,res,next)=>{
    await User.findByIdAndUpdate(req.user.id,{active:false});
    res.status(204).json({
        status:'success',
        data:null
    })
})
exports.getAllUser = catchAsync( async (req,res,next)=>{
    const user =await User.find();
    res.status(200).json({
        status:"success",
        data:{
            user
        }
    })
})