const name = require('./data') //user to import the data from another file
//How Event loop work
console.log("start")
let count =0;
let set = setInterval(function(){
  count++;
  console.log("hi")
  if(count === 5 ){
  clearInterval(set)
}
},0)
let promise = new Promise((resolve,reject)=>{
  resolve("data recived")
})
promise
.then((data)=>{
  console.log(data)
}).catch((e)=>{
  console.error(e.message);
})
console.log("end")

// //node

const hello = (name)=>{
  console.log(`Hello ${name}`);
}
hello("keerthi");
//global object
console.log(global);

//find directory name
console.log("direcory name: "+ __dirname)
 
//find file name
console.log("file name "+ __filename);

// console.log(name.name)

console.log(name.sayHello("Keerthivasan"))

