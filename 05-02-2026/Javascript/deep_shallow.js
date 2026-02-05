let user_1 = {
    name:"Keerthivasan",
    qualification:"Btech"
}
let user_2 = user_1;
/*here Im only copy the reference not actual copy of object, so if
i change in user_2 definitely change the user_1 because of same
reference memory address.*/
user_2.name = "Hariharan";
console.log(user_1);
console.log(user_2);

//shallow copy

let user_3 = {
    name:"Keerthivasan",
    qualification:"Btech"
}
let user_4 = {...user_3} 
/*using sperad operator to copy exact copy of object now try to
change user_4 name only change made in user_4 because of we copy
object not an reference.*/
user_4.name = "Hariharan";
console.log(user_3);
console.log(user_4);

//deep copy

let user_5 = {
    name:"Keerthivasan",
    qualification:"Btech",
    address:{
        door_no:5,
        street:"7th"
    }
}
let user_6 = {...user_5} 
/* 
Using spread operator creates only a shallow copy.
The top-level object is copied,
but nested objects still share the same reference.
So changing user_6.address affects user_5.address.
*/

user_6.address.street = "ram street";
console.log(user_5);
console.log(user_6);

//deep copy executed

let user_7 = {
    name:"Keerthivasan",
    qualification:"Btech",
    address:{
        door_no:5,
        street:"7th"
    }
}

let user_8 = JSON.parse(JSON.stringify(user_7))

/* 
Using JSON.parse(JSON.stringify()) to create a deep copy.
It creates a new object including nested objects.
Changes in user_8 will NOT affect user_7.
*/

user_8.address.street = "ram street";

console.log(user_7);  // original unchanged
console.log(user_8);  // modified copy

