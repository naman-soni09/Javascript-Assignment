let email = "student@example.com";

if (email.includes("@")) {
  if (email.endsWith(".com")) {
    if (email.length > 10) {
      console.log("Valid Email");
    } else {
      console.log("Email must be longer than 10 characters");
    }
  } else {
    console.log("Email must end with .com");
  }
} else {
  console.log("Email must contain @");
}