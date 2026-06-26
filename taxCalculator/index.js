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
  let input = prompt("Enter your gross monthly salary (KES)");

  if (!isNaN(input)) {
    input = Number(input);
    if (input > 0) {
      theSalary = input;
      break;
    }
  }
  alert(`Invalid amount. Enter a number greater than 0.`);
}
 // Payee
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

// nssf
let nssf=null
if(theSalary>=9000){
  nssf=theSalary*0.06
}
else if(theSalary>9000 && <= 108000){
  nssf=9000*0.06+(theSalary-9000)*0.06
}
else if (theSalary > 108000){
  nssf=6480
}
