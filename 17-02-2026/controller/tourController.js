const fs = require('fs')
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));

//middleware for checking for valid id or not
exports.checkId = (req,res,next,val)=>{
    if (val > tours.length) {
        return res.status(404).json({
            status: "failed",
            message: "Invalid Id"
        })
    }
    next();
}
//creating middleware for checking the body contain important fields
exports.checkBody=(req,res,next)=>{
    if(!req.body.name || !req.body.price){
        return res.status(404).json({
            status:"failed",
            message:"missing fields..."
        })
    }
    next()
}
exports.getAllTour = (req, res) => {
    res.status(200).send({
        status: "success",
        result: tours.length,
        data: {
            tours
        }
    })
}
exports.getTours = (req, res) => {
    const id = req.params.id * 1
    const tour = tours.find(item => item.id == id);
    res.status(200).json({
        status: "success",
        data: {
            tour
        }
    })
}
exports.createTour = (req, res) => {
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);
    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res.status(200).json({
            status: "success",
            data: {
                tour: newTour
            }
        })
    })
}
exports.updateTour = (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            tour: "<updated here...>"
        }
    })
}
exports.deleteTour = (req, res) => {
    res.status(204).json({
        status: "success",
        data: null
    })
}