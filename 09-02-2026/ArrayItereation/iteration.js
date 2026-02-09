let arr1 = ["Keerthi","Varun","Hari","Kavin","Sai"];
let arr2 = ["Dhivin","Guru","Jaga","Rogath","Dharineesh"]
let arr4=[1,3,2,4,5,3,5,4,6,7,4,2];
// Array forEach
//it is not return anything do some operation in original array.
arr1.forEach((item)=>console.log(item))
// Array map()
//it create a new array not change in original array.
let arr3 = arr1.map((item)=>item+"Dat")
console.log(arr3)
// Array filter()
//used to filter the data
let a = arr1.filter((item)=>item != "Keerthi")
console.log(a)
// Array reduce()
//reduce is used to return single value
let b = arr4.reduce((total,value)=>{
    return total+value;
})
console.log(b);