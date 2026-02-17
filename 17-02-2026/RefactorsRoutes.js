const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json())
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))

const getAllTour = (req, res) => {
    res.status(200).send({
        status: "success",
        result: tours.length,
        data: {
            tours
        }
    })
}
const getTours = (req, res) => {
    const id = req.params.id * 1
    // console.log(typeof(id));
    const tour = tours.find(item => item.id == id);
    if (!tour) {
        return res.status(404).json({
            status: "falied",
            message: "Invalid ID"
        })
    }
    res.status(200).json({
        status: "success",
        data: {
            tour
        }
    })
}
const createTour = (req, res) => {
    // console.log(req.body);
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
const updateTour = (req, res) => {
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: "failed",
            message: "Invalid Id"
        })
    }

    res.status(200).json({
        status: "success",
        data: {
            tour: "<updated here...>"
        }
    })
}
const deleteTour = (req, res) => {
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: "failed",
            message: "Invalid Id"
        })
    }
    res.status(204).json({
        status: "success",
        data: null
    })
}
const getAllUsers = (req, res) => {
    res.status(500).json({
        status: "failed",
        message:"This route is not yet defind!"
    })
}
const getUsers = (req, res) => {
    res.status(500).json({
        status: "failed",
        message:"This route is not yet defind!"
    })
}
const createUsers = (req, res) => {
    res.status(500).json({
        status: "failed",
        message:"This route is not yet defind!"
    })
}
const updateUsers = (req, res) => {
    res.status(500).json({
        status: "failed",
        message:"This route is not yet defind!"
    })
}
const deleteUsers = (req, res) => {
    res.status(500).json({
        status: "failed",
        message:"This route is not yet defind!"
    })
}

// app.get('/api/v1/tours', getAllTour);
// app.get('/api/v1/tours/:id', getTours);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour)
// app.delete('/api/v1/tours/:id', deleteTour)

app.route('/api/v1/tours').get(getAllTour).post(createTour);
app.route('api/v1/tours/:id').get(getTours).patch(updateTour).delete(deleteTour);
app.route('/api/v1/users').get(getAllUsers).post(createUsers);
app.route('api/v1/users/:id').get(getUsers).patch(updateUsers).delete(deleteUsers);


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})