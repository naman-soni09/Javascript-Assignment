let age = 20;
let hasVoterID = true;

if (age >= 18) {
  if (hasVoterID) {
    console.log("Can Vote");
  } else {
    console.log("Voter ID required");
  }
} else {
  console.log("Not old enough to vote");
}