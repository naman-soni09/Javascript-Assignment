let role = "admin";
let action = "edit";

switch (role) {
  case "admin":
    switch (action) {
      case "create":
        console.log("Admin created an item");
        break;
      case "edit":
        console.log("Admin edited an item");
        break;
      case "delete":
        console.log("Admin deleted an item");
        break;
      default:
        console.log("Unknown action");
    }
    break;
  case "user":
    console.log("Limited Access");
    break;
  default:
    console.log("Unknown role");
}