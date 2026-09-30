let income = 500000;
let tax;

if (income < 300000) {
  tax = 0;
} else if (income <= 700000) {
  tax = income * 0.05;
} else if (income <= 1000000) {
  tax = income * 0.10;
} else {
  tax = income * 0.15;
}

console.log("Tax amount: ₹" + tax);