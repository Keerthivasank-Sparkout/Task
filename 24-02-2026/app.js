const express = require('express')
const app = express()
app.use(express.json())
app.set('query parser', 'extended');
const AppError =require('./utilities/appError')
const GlobalErrorHandler = require('./Controller/errorController')
const tourRoutes = require('./routes/tourRoutes')
const userRoutes = require('./routes/userRoutes')
app.use('/api/v1/tours', tourRoutes);
app.use('/api/v1/users',userRoutes);
//Error Handle for unhandle urls
app.use((req, res,next) => {
    // res.status(404).json({
    //     status: "failed",
    //     message: `Can't reach ${req.originalUrl} on the server`
    // });
    // const err = new Error(`Can't reach ${req.originalUrl} on the server`);
    // err.status = 'failed',
    // err.statuscode = 404
    next(new AppError(`Can't reach ${req.originalUrl} on the server`,404))
});

app.use(GlobalErrorHandler)

module.exports=app;
