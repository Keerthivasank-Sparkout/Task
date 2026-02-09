let arr1 = ["Keerthi","Varun","Hari","Kavin","Sai"];
let arr2 = ["Dhivin","Guru","Jaga","Rogath","Dharineesh"]
// Array indexOf()
//used to find the index of the element in the array.
let a = arr1.indexOf("Varun");
console.log(a)
// Array lastIndexOf()
//it is used to find the index of element which is last occurance.
let arr3 = ["Keerthi","Varun","Hari","Kavin","Sai","Keerthi"];
let b = arr3.lastIndexOf("Keerthi");
console.log(b)
// Array includes()
//it is used to find the element present in array or not.
let c = arr3.includes("Varun")
console.log(c)
// Array find()
//used to find the element in array
let d = arr1.find(num=>num==="Varun")
console.log((d?d:"Not found"))
// Array findIndex()
//used to find the index of the Array
let e = arr1.findIndex((item)=>item==="Hari");
console.log(e ? e :"Not Found")
// Array findLast()
//used to find the element in last occurance 
let f = arr3.findLast((item)=>item==="Keerthi")
console.log(f ? f:"Not Found")
// Array findLastIndex()
//used to find the element index in last occurance 
let g = arr3.findLastIndex((item)=>item==="Keerthi")
console.log(g ? g:"Not Found")