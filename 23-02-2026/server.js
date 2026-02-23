const app = require('./app')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config({path:'./config.env'})
const PORT=3000

const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DB_PASSWORD);

mongoose.connect(DB)
    .then(()=>console.log("DB connected Successfully..."))
    .catch((err)=>console.log(err))

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}....`)
})