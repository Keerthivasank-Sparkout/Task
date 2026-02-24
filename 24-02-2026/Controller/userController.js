const User = require('./../model/userModel')
const catchAsync = require('./../utilities/catchAsync')
const jwt = require('jsonwebtoken')

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

exports.getAllUser = catchAsync( async (req,res,next)=>{
    const user =await User.find();
    res.status(200).json({
        status:"success",
        data:{
            user
        }
    })
})