const Tour = require('../model/tourModel');
const catchAsync =require('./../utilities/catchAsync')
const APIFeature = require('./../utilities/apiFeatures');
const AppError = require('../utilities/appError');

exports.alishTour = (req,res,next)=>{
    console.log("middelware....")
    req.tourOptions = {
        limit:5,
        sort:'-ratingAverage,-price',
        fields:'name,price'
    };
    next()
}

exports.getAllTour = catchAsync(async (req,res,next)=>{
        const queryParams = {
            ...req.query,
            ...(req.tourOptions || {})
        };
        const feature = new APIFeature(Tour.find(),queryParams)
            .filter()
            .sort()
            .limiting()
            .pagination();
        const tours = await feature.query;
        res.status(200).json({
            status: "success",
            results: tours.length,
            data: tours
        })
})

exports.getTour =catchAsync(async(req,res,next)=>{
        const tourById = await Tour.findById(req.params.id)
        if(!tourById){
            return next(new AppError('No tour found in this ID',404))
        }
        res.status(200).json({
            status:"success",
            data:tourById
        })
})

exports.creatTour = catchAsync(async (req,res,next)=>{
        const create = await Tour.create(req.body)
        res.status(200).json({
            status:"success",
            data:create
        })
})

exports.updateTour = catchAsync(async (req,res,next)=>{
        const update = await Tour.findByIdAndUpdate(req.params.id,req.body,{
            returnDocument:'after',
            runValidators:true
        })
        res.status(200).json({
            status:"success",
            data:update
        })
})
exports.deleteTour = catchAsync(async (req,res,next)=>{
        const deleteById = await Tour.findByIdAndDelete(req.params.id)
        if(!deleteById){
            return next(new AppError('No tour found in this ID',404))
        }
        res.status(200).json({
            status:"success",
            data:deleteById
        })
})