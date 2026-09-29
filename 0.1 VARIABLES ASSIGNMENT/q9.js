// Assignment 9: Best Practices Refactoring


// Original bad code:
// let x;
// let a = 1, b = 2, c = 3;
// let pi = 3.14159;
// let username = "John";
// let itemcount = 0;


// Improved code

// Changed "x" to "count" and gave it a meaningful default value.
let count = 0;

// Separated variables and gave them meaningful names.
let firstNumber = 1;
let secondNumber = 2;
let thirdNumber = 3;

// Changed "pi" to const because its value should not change.
// PI is written in uppercase because it represents a constant.
const PI = 3.14159;

// Changed "username" to "userName" using camelCase.
let userName = "John";

// Changed "itemcount" to "itemCount" using camelCase.
let itemCount = 0;


// Print the variables

console.log("Count:", count);
console.log("First Number:", firstNumber);
console.log("Second Number:", secondNumber);
console.log("Third Number:", thirdNumber);
console.log("PI:", PI);
console.log("User Name:", userName);
console.log("Item Count:", itemCount);