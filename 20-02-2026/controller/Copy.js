// const Tour = require('./../model/tourModel')

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
        //filtering
        const queryObj = {...queryParams }
        const excludedField = ['sort', 'limit', 'page', 'fields']
        excludedField.forEach(el => delete queryObj[el]);
        // console.log(queryObj)

        //Advance Filter
        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)
        // console.log(JSON.parse(queryStr))
        let query = Tour.find(JSON.parse(queryStr))

        //sorting
        if (queryParams.sort) {
            // console.log('sort...')
            const sortBy = queryParams.sort.split(',').join(' ')
            query = query.sort(sortBy)
        } else {
            query = query.sort('-createdAt')
        }

        //filed limiting
        if (queryParams.fields) {
            const fields = queryParams.fields.split(',').join(' ')
            query = query.select(fields)
        }
        else {
            query = query.select('-__v')
        }

        //Pagination
        const page = queryParams.page * 1 || 1;
        const limit = queryParams.limit * 1 || 100;
        const skip = (page - 1) * limit;
        query = query.skip(skip).limit(limit);
        if (queryParams.page) {
            const totalDocument = await Tour.countDocuments();
            if (skip >= totalDocument) throw new Error('Page Does not valid...')
        }

        const tours = await query;
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