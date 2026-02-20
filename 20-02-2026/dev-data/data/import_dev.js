const mongoose = require('mongoose')
const dotenv = require('dotenv')
const fs = require('fs')
const Tour = require('./../../model/tourModel')
dotenv.config({ path: '../../config.env' });


const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DB_PASSWORD);
// console.log(DB)
mongoose.connect(DB)
.then(() => console.log("DB connected Successfully"))
.catch(err => console.error(err));

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`,'utf-8'))

const import_data = async ()=>{
    try{
        await Tour.create(tours)
        console.log("data Successfully loaded...")
        process.exit();
    }catch(err){
        console.log(err)
    }
}

const delete_data = async ()=>{
    try{
        await Tour.deleteMany()
        console.log("data Successfully deleted...")
        process.exit();
    }catch(err){
        console.log(err)
    }
}
if(process.argv[2] === '--import'){
    import_data();
}
else if(process.argv[2] === '--delete'){
    delete_data();
}
console.log(process.argv)