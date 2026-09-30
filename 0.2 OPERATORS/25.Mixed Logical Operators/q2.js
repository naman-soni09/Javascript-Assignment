let isStudent = true;
let isSenior = false;
let isBanned = true;

let discount = (isStudent || isSenior) && !isBanned;

console.log(discount);