let mark1 = 78;
let mark2 = 92;
let mark3 = 85;
let highest;

if (mark1 >= mark2 && mark1 >= mark3) {
  highest = mark1;
} else if (mark2 >= mark1 && mark2 >= mark3) {
  highest = mark2;
} else {
  highest = mark3;
}

console.log("Highest mark: " + highest);