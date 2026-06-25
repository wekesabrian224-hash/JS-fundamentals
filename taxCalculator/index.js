/*
  promt("")
  checking if is a number
  1. IsNaN
  2. Number->
  3. +<>
*/

// stay here until the user has entered the correct gross sa

let theSalary;

while (true) {
  let gross = prompt("Enter your gross salary");

  if (!isNaN(gross)) {
    gross = Number(gross);

    if (gross > 0) {
      theSalary = gross;
      break;
    }
  }

  alert(`Invalid amount entered.
    Ensure you enter a number greater than 0
  `);
}

console.log(`Gross salary is ${theSalary} its type ${typeof theSalary}`);
if (theSalary < 24000) {
  paye = theSalary * 0.1;
} else if (theSalary > 24000 && theSalary <= 32333) {
  paye = theSalary * 0.25;
} else if (theSalary > 32333 && theSalary <= 500000) {
  paye = theSalary * 0.3;
} else if (theSalary > 500000 && theSalary <= 800000) {
  paye = theSalary * 0.325;
} else if (theSalary >= 800000 && theSalary) {
  paye = theSalary * 0.35;
}
