let firstNumber = 10;
let secondNumber = 3;
let operator = "**";
let result;

switch (operator) {
  case "+":
    result = firstNumber + secondNumber;
    break;
  case "-":
    result = firstNumber - secondNumber;
    break;
  case "*":
    result = firstNumber * secondNumber;
    break;
  case "/":
    if (secondNumber === 0) {
      console.log("Cannot divide by zero");
    } else {
      result = firstNumber / secondNumber;
    }
    break;
  case "%":
    if (secondNumber === 0) {
      console.log("Cannot calculate remainder with zero");
    } else {
      result = firstNumber % secondNumber;
    }
    break;
  case "**":
    result = firstNumber ** secondNumber;
    break;
  default:
    console.log("Invalid operator");
}

if (result !== undefined) {
  console.log("Result:", result);
}