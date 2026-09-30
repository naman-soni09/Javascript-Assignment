let val1 = false;
let val2 = true;
let val3 = false;

let result = !(val1 || val2) && val3 || true;

console.log(result);