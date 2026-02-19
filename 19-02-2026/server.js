const express = require('express')
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})

const PORT = 3000;
app.use(express.json())

const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DB_PASSWORD);
// console.log(DB)
mongoose.connect(DB)
.then(() => console.log("DB connected Successfully"))
.catch(err => console.error(err));





app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}....`);
})
module.exports = app;