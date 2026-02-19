const Tour = require('./../model/tourModel')

exports.getAllTour = async (req, res) => {
    try {
        const tours = await Tour.find()
        res.status(200).send({
            status: "success",
            data: [
                tours
            ]
        })
    }
    catch (err) {
        res.status(400).json({
            status: "Failed",
            message: err
        })
    }
}
exports.getTours = async (req, res) => {
    try {
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