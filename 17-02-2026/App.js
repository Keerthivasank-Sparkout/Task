const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json())
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))
app.get('/api/v1/tours',(req,res)=>{
    res.status(200).send({
        status:"success",
        result : tours.length,
        data:{
            tours
        }
    })
})
app.get('/api/v1/tours/:id',(req,res)=>{
    const id = req.params.id * 1
    // console.log(typeof(id));
    const tour = tours.find(item=>item.id == id);
    if(!tour){
        return res.status(404).json({
            status:"falied",
            message:"Invalid ID"
        })
    }
    res.status(200).json({
        status:"success",
        data:{
            tour
        }
    })
})

app.post('/api/v1/tours',(req,res)=>{
    // console.log(req.body);
    const newId = tours[tours.length-1].id +1;
    const newTour = Object.assign({id:newId},req.body);
    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),err=>{
        res.status(200).json({
            status:"success",
            data:{
                tour:newTour
            }
        })
    })
})
app.patch('/api/v1/tours/:id',(req,res)=>{
    if(req.params.id * 1 > tours.length){
        return res.status(404).json({
            status:"failed",
            message:"Invalid Id"
        })
    }

    res.status(200).json({
        status:"success",
        data:{
            tour:"<updated here...>"
        }
    })
})
app.delete('/api/v1/tours/:id',(req,res)=>{
    if(req.params.id *1 > tours.length){
        return res.status(404).json({
            status:"failed",
            message:"Invalid Id"
        })
    }
    res.status(204).json({
        status:"success",
        data:null
    })
})




app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})