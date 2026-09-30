let category = "veg";
let item = "paneer";
let size = "full";
let price;

switch (category) {
  case "veg":
    switch (item) {
      case "paneer":
        switch (size) {
          case "half":
            price = 150;
            break;
          case "full":
            price = 280;
            break;
          default:
            console.log("Invalid size");
        }
        break;
      case "rice":
        switch (size) {
          case "half":
            price = 80;
            break;
          case "full":
            price = 150;
            break;
          default:
            console.log("Invalid size");
        }
        break;
      default:
        console.log("Invalid vegetarian item");
    }
    break;

  case "nonveg":
    switch (item) {
      case "chicken":
        switch (size) {
          case "half":
            price = 200;
            break;
          case "full":
            price = 380;
            break;
          default:
            console.log("Invalid size");
        }
        break;
      case "fish":
        switch (size) {
          case "half":
            price = 220;
            break;
          case "full":
            price = 400;
            break;
          default:
            console.log("Invalid size");
        }
        break;
      default:
        console.log("Invalid non-vegetarian item");
    }
    break;

  default:
    console.log("Invalid category");
}

if (price !== undefined) {
  console.log(`Order: ${size} ${category} ${item}`);
  console.log(`Price: ₹${price}`);
}