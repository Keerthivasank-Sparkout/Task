function calculator(num1, operator, num2) {
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Can not divided by zero";
            }
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}
console.log(calculator(10, '+', 5));
console.log(calculator(10, '/', 2));
console.log(calculator(10, '%', 3));  
