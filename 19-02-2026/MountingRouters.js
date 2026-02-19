const app =require('./server')
const tourRoutes =require('./routes/tourRoutes')
const userRoutes =require('./routes/userRoutes')

app.use('/api/v1/tours',tourRoutes)
app.use('/api/v1/users',userRoutes)
