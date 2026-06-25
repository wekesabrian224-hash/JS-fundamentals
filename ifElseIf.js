/*
  Using if/else if statements to ensure only ONE alert fires for age.
*/

if (age <= 10) {
  alert("You are a baby.");
} else if (age <= 13) {
  alert("You are a teen");
} else if (age <= 18) {
  alert("You can legally drink and smoke");
} else if (age <= 27) {
  alert("Best age for marriage");
} else if (age <= 45) {
  alert("Best age for retirement");
} else {
  alert("You are an ancestor");
}