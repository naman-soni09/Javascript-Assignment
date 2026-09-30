let isAdmin = true;
let hasToken = false;
let isSuspended = false;

let accessAllowed = (isAdmin || hasToken) && !isSuspended;

console.log(accessAllowed);