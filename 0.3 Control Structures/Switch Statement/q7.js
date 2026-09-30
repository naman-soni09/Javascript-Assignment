let value = "0";

switch (value) {
  case 0:
    console.log("Number zero");
    break;
  case "0":
    console.log("String zero");
    break;
  case false:
    console.log("Boolean false");
    break;
  case null:
    console.log("Null");
    break;
  case undefined:
    console.log("Undefined");
    break;
  default:
    console.log("Other value");
}