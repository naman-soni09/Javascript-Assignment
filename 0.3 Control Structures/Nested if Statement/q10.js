let isPresent = true;
let internalMarks = 32;
let externalMarks = 40;

if (isPresent) {
  if (internalMarks >= 30) {
    if (externalMarks >= 35) {
      console.log("Eligible for Final Exam");
    } else {
      console.log("External marks must be at least 35");
    }
  } else {
    console.log("Internal marks must be at least 30");
  }
} else {
  console.log("Student must be present");
}