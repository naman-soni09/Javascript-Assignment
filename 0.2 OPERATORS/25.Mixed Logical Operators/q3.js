let nameGiven = true;
let emailGiven = false;
let phoneGiven = true;

let formValid = nameGiven && (emailGiven || phoneGiven);

console.log(formValid);