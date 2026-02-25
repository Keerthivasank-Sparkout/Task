const mongoose = require('mongoose')

const tourSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,'The tour name nust required'],
        unique : true,
        trim:true
    },
    duration:{
        type:Number,
        required:[true,"The tour must be required duration"]
    },
    maxGroupSize:{
        type:Number,
        required:[true,"The tour must be required Group Size"]
    },
    difficulty:{
        type:String,
        required:[true,"The tour must be required difficulty."]
    },
    ratingAverage:{
        type:Number,
        default:4.5
    },
    ratingQuantity:{
        type:Number,
        default:0
    },
    price:{
        type:Number,
        required:[true,'The tour price must required']
    },
    priceDiscount:Number,
    summary:{
        type:String,
        trim:true,
        required:[true,"The tour must have description"]
    },
    description:{
        type:String,
        trim:true
    },
    imageCover:{
        type:String,
        required:[true,"the tour must have a cover image"]
    },
    images:[String],
    createdAt:{
        type:Date,
        default:Date.now()
    },
    startDates:[Date]
})

const Tour= mongoose.model('Tour',tourSchema);

module.exports=Tour;