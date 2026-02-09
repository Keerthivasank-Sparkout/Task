function isLeapYear(year) {

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("Leap Year");
    } 
    else {
        console.log("Not a leap year");
    }

}
isLeapYear(2024); // true
isLeapYear(1900); // false
isLeapYear(2000); // true