const Tour = require('./../model/tourModel')
const APIFeature = require('./../utilities/apiFeatures')

exports.alishTour = (req, res, next) => {
    console.log('MIDDLEWARE HIT');

    req.tourOptions = {
        limit: 5,
        sort: '-ratingAverage,-price',
        fields: 'name,price'
    };
    next();
};
 
exports.getAllTour = async (req, res) => {
    try {
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
    }
    catch (err) {
        res.status(400).json({
            status: "Failed",
            message: err.message
        })
    }
}
exports.getTours = async (req, res) => {
    try {
        console.log('id hit....')
        const tourByID = await Tour.findById(req.params.id)

        res.status(200).json({
            status: "success",
            data: {
                tourByID
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "Failed",
            message: err
        })
    }
}
exports.createTour = async (req, res) => {
    try {
        const newTour = await Tour.create(req.body);
        res.status(200).json({
            status: "success",
            data: {
                tour: newTour
            }
        })

    }
    catch (err) {
        res.status(400).json({
            status: "Failed",
            message: err
        })
    }
}
exports.updateTour = async (req, res) => {
    try {
        const newTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            returnDocument: 'after',
            runValidators: true
        });
        res.status(200).json({
            status: "success",
            data: {
                tour: newTour
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "Failed",
            message: err
        })
    }
}
exports.deleteTour = async (req, res) => {
    try {
        const newTour = await Tour.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: "success",
            data: {
                tour: newTour
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "Failed",
            message: err
        })
    }

}
exports.getTourStats = async (req,res)=>{
    try{
        const stats = await Tour.aggregate([
            {
                $match:{ratingAverage:{$gte:4.5}}
            },
            {
                $group:{
                    _id:'$difficulty',
                    numTour:{$sum:1},
                    avgRating:{$avg:'$ratingAverage'},
                    avgPrice:{$avg:'$price'},
                    minPrice:{$min:'$price'},
                    maxPrice:{$max:'$price'}
                }
            },
            {
                $sort:{avgPrice:1}
            },  
        ])
        res.status(200).json({
            status: "success",
            data: {
                stats
            }
        })

    }catch (err) {
        res.status(400).json({
            status: "Failed",
            message: err
        })
    }
}