let age = 25;
let hasGraduationDegree = true;
let yearsOfExperience = 3;

if (age >= 21 && age <= 30) {
  if (hasGraduationDegree) {
    if (yearsOfExperience >= 2) {
      console.log("Eligible for Interview");
    } else {
      console.log("At least 2 years of experience required");
    }
  } else {
    console.log("Graduation degree required");
  }
} else {
  console.log("Age must be between 21 and 30");
}