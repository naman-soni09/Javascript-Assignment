let enteredPIN = "1234";
let correctPIN = "1234";
let balance = 5000;
let withdrawal = 2000;

if (enteredPIN === correctPIN) {
  if (balance >= withdrawal) {
    console.log("Withdrawal successful");
  } else {
    console.log("Insufficient balance");
  }
} else {
  console.log("Incorrect PIN");
}