const fs = require('fs')

//create a directory

// fs.mkdir('./docs',(err)=>{
//     if(err){
//         console.log(err.message);
//     }
//     else{
//         console.log("file created successfully");
//     }
// })

//check already folder exited then create

if (!fs.existsSync('./docs')) {
    fs.mkdir('./docs', (err) => {
        if (err) {
            console.log(err.message);
        }
        else {
            console.log("file created successfully");
        }
    })
}

//write file

fs.writeFile('./docs/text.txt', "Now i am practice a node file system", (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("file writed")
    }
})

//readFile
if (fs.existsSync('./docs/text.txt')) {
    fs.readFile('./docs/text.txt', (err, data) => {
        if (err) {
            console.log(err.message);
        }
        else {
            console.log(data.toString());
        }
    })
}

//delete file
if(fs.existsSync('./docs/delete/text.txt')){
    fs.unlink('./docs/delete/text.txt',(err)=>{
        if(err){
            console.log(err.message)
        }
        else{
            console.log("file Deleted")
        }
    })
}
//remove folder
if(fs.existsSync('./docs/delete')){
    fs.rmdir('./docs/delete',(err)=>{
        if(err){
            console.log(err.message)
        }
        else{
            console.log("folder Deleted")
        }
    })
}
//create read stream
const readStream = fs.createReadStream('./docs/HugeFile.txt');
readStream.on('data',(buffer)=>{
    console.log("\nnew line\n");
    console.log(buffer.toString());
})
//create write 

const writeStream = fs.createWriteStream('./docs/HugeCopy.txt');

readStream.on('data',(buffer)=>{
    writeStream.write('\nnew buffer\n')
    writeStream.write(buffer);
})


//simple way to read one to write one file

readStream.pipe(writeStream)