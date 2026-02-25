const express = require('express')
const app = express()
//for work with .env file
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
//for work with json
app.use(express.json())
app.set('query parser', 'extended');
//error handle
const AppError =require('./utilities/appError')
const GlobalErrorHandler = require('./Controller/errorController')
//router middleware
const tourRoutes = require('./routes/tourRoutes')
const userRoutes = require('./routes/userRoutes')
//security
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const hpp = require('hpp')

const limit = rateLimit({
    max:100,
    windowMs:60*60*1000,
    message:"Too many request from this IP, please try again in an hour"
})
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())
app.use('/api',limit)

app.use('/api/v1/tours', tourRoutes);
app.use('/api/v1/users',userRoutes);
//Error Handle for unhandle urls
app.use((req, res,next) => {
    next(new AppError(`Can't reach ${req.originalUrl} on the server`,404))
});
app.use(GlobalErrorHandler)

module.exports=app;
