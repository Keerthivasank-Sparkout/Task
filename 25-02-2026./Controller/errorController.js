const AppError = require("../utilities/appError");

const handleCaseError = err=>{
    console.log("handlecast error")
    const message = `Invalid ${err.path}: ${err.value}`
    return new AppError(message,400);
}

const handleDuplicateField = err=>{
    const value = err.errmsg.match(/(["'])(\\?.)*?\1/);
    const message = `Duplicate field value:${value}. Please use another value`;
    return new AppError(message,400);
}
const handleValidationError=err=>{
    const error =Object.values(err.errors).map(el=>el.message)
    const message =`invalid input data. ${error.join('. ')}`;
    return new AppError(message,400)
}
const handlejwtError = ()=>new AppError("Invalid token. please login again...",401)
const handleTokenExpireError= ()=>new AppError("Your Token Expirer please login again",401)
const sendErrorDev = (err,res)=>{
    res.status(err.statuscode).json({
        status:err.status,
        error : err,
        message:err.message,
        stack:err.stack
    });
}
const sendErrorProd = (err,res)=>{
    if(err.isOperational){
        res.status(err.statuscode).json({
            status:err.status,
            name:err.name,
            message:err.message
        });
    }else{
        res.status(500).json({
            status:'error',
            message:'something went worng...'

        }); 
    }
}
module.exports=(err,req,res,next)=>{
    err.status = err.status || 'error';
    err.statuscode = err.statuscode || 500;

    if(process.env.NODE_ENV === "development"){
        sendErrorDev(err,res); 
    }else if(process.env.NODE_ENV === "production"){
        if(err.name === 'CastError')err= handleCaseError(err);
        if(err.code === 11000)err=handleDuplicateField(err);
        if(err.name === 'validationError')err=handleValidationError(err);
        if(err.name === 'JsonWebTokenError') err=handlejwtError();
        // console.log(err.name)
        if(err.name === 'TokenExpiredError') err=handleTokenExpireError()
        sendErrorProd(err,res);
    }
}