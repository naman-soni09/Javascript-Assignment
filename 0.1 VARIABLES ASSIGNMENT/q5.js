// Assignment 5: Objects, Arrays, and Functions


// Part A - Object

let student = {
    name: "Naman",
    age: 18,
    isEnrolled: true
};

console.log("Student:", student);
console.log("Student Name:", student.name);
console.log("Student Age:", student.age);


// Part B - Array

let numbers = [1, 2, 3, 4, 5];

let mixed = [1, "hello", true, null];

console.log("First number:", numbers[0]);
console.log("Last number:", numbers[numbers.length - 1]);
console.log("Mixed array:", mixed);

/*
It is better to keep arrays with a single data type
because it makes the data easier to understand,
process, and maintain.
*/


// Part C - Function

function greet(name) {
    return "Hello, " + name + "!";
}

let message1 = greet("Naman");
let message2 = greet("Rahul");

console.log("Message 1:", message1);
console.log("Message 2:", message2);