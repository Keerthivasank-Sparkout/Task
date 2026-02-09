let arr1 = ["Keerthi","Varun","Hari","Kavin","Sai"];
let arr2 = ["Dhivin","Guru","Jaga","Rogath","Dharineesh"]

//Array Methods
// Array length
//used to find the length of the array
let length = arr1.length
console.log(length)
// Array toString()
//used to convert the array to string
let str = arr1.toString()
console.log(str)
// Array at()
//at() method is used to get element from array(like index access)
let third_element = arr1.at(2)
console.log(third_element)
// Array join()
//used to chnage array to string format additionally add separator
let str1 = arr1.join("*")
console.log(str1)
// Array pop()
//used to remove the last element of the array.
arr1.pop()
console.log(arr1)
// Array push()
//used to add one element in last of the array.
arr1.push("Helan");
console.log(arr1);
// Array shift()
//used to remove the first element of the array.
arr1.shift();
console.log(arr1)
// Array unshift()
//used to add one element to starting of the array.
arr1.unshift("Raja");
console.log(arr1)
// Array isArray()
//used to find the datatype of the variable if it is array return true orElse return false.
let str2="string"
console.log(Array.isArray(str));//false
// Array concat()
//used to combain the two array together.
let arr3=arr1.concat(arr2);
console.log(arr3)
// Array flat()
//used to concat the sub array in inside the array.
let exArr = [["keerthi","varun"],["mohan","yash"],"dhivin"]
let ex=exArr.flat();
console.log(ex)
// Array slice()
//it return new array with copy of original array
let arr5 = arr1.slice(3)
console.log(arr5)
// Array splice()
//used to replace and remove in the array elements.
arr1.splice(0,3)
console.log(arr1)
// Array toSpliced()
//uset to replace or remove the elements in the array. splice() is old method it change the original array but toSpliced() method is not the change the original aarray.
let newArray = arr1.toSpliced(0,1)
console.log(newArray)
