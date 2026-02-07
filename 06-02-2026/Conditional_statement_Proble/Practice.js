//Array methods
let arr=[1,2,3,4,5,6];

//add element to array
let arr2=[9,8,7];
let size = arr.length
for(let i=0;i<arr2.length;i++){
    //arr.push(arr2[i]);
    arr[size]=arr2[i];
    size++;
}
let arr3=arr.slice(1,3)
console.log(arr3)

arr.push(7) // -push method is used to add element to array in last.
arr.pop() // -pop method is used to remove the elemnt in last element in tha array.
arr.unshift(0) // -unshift method is used to add element in front of the array.
arr.shift() //-shift method is usied to remove the first element of the array.
arr.slice() //-is used to copy the part of the array(arr.slice(start,end))
arr.splice()//-used to Add,remove,replace the element in array.
arr.map() //- used to retun new array one by one iterate and want to any operation to change it save
arr.filter()//Returns new array and Only keeps elements that match condition.
arr.reduce()//Returns single output and Used for sum, total, grouping.

//access the array using for..in loop
let person = {
    name: "Keerthi",
    age: 22,
    role: "Developer"
};

for (let key in person) {
    console.log(key +":"+ person[key]);
}

//callback functions
function cal(a, b, operation) {
    return operation(a, b);
}
function add(x, y) {
    return x + y;
}
function multi(x, y) {
    return x * y;
}
console.log(cal(5, 3, add));    
console.log(cal(5, 3, multi)); 

//speard operator is used to copy array and merge the two array.
let arr4 = [1, 2];
let arr5 = [3, 4];

let merged = [...arr4, ...arr5];
console.log(merged)

//promise
const promise = new Promise((resolve, reject) => {

    setTimeout(() => {//here i am using setTime intervel to wait for 2 sec and then give result for that reson.
        resolve("data loaded successfully");
    }, 2000);

});

promise
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });


