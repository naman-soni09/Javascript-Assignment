// Assignment 4: Understanding undefined vs null

let x;
let y = null;

console.log("x =", x);
console.log("y =", y);

console.log("typeof x:", typeof x);
console.log("typeof y:", typeof y);

console.log("x == y:", x == y);
console.log("x === y:", x === y);

/*
undefined:
A variable is undefined when it has been declared
but has not been assigned a value.

null:
null is intentionally assigned when we want to represent
an empty or missing value.

Note:
typeof null returns "object". This is a historical behavior
of JavaScript.
*/