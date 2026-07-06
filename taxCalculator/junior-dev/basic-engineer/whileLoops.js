/*
loops: runa ablock of code over and over agin ,you should nit loop to infinity
syntax
while(condition) {
block of code}
condition it truthy=>continue*/


// let condition = true;
// let n = 0;

// while (condition) {
//   console.log("n is", n);
//   n = n + 1;

//   if (n > 100) {
//     condition = false;
//   }
// }

function countDown(n) {
  while (n > 0) {
    console.log("n:", n);
    n--;
  }
}


countDown(10);

// create a function @function1<give it any name>.
//     it does not take any parameters.
//     this function
//     1.prompts a user for the first number
//       check if number is a valid number greater than 1.
//     2.prompts for the second number
//       check if number is a valid number greater than 1.
//     use recursion or a while loop to ensure
//     user enters a correct number for number1 and number 2
//     after the number is entered call @function2()
//     which takes the numbers as parameters.
//     example-> @function2(number1,number2)

// create a function @function2<give it any name>.
//     this function takes in the following parameter
//     @param1 number greater than 1.
//     @param2 number greater than 1.
//     check if @param1 is a number greater than 1.
//     check if @param2 is a number greater than 1.
//     example if @function2(3,5)
//     create a maths table for it. upto
//     ie console logs

//     -------
//     3*5=
//     3*4=
//     3*3=
//     3*2=
//     3*1=

//     -------
//     2*5=
//     2*4=
//     2*3=
//     2*2=
//     2*1=

//     -------
//     1*5=
//     1*4=
//     1*3=
//     1*2=

// Function 1: Gets valid numbers from the user
function getNumbers() {
  let number1 = Number(prompt("Enter the first number (greater than 1):"));

  while (number1 <= 1 || isNaN(number1)) {
    number1 = Number(prompt("Invalid! Enter a number greater than 1:"));
  }

  let number2 = Number(prompt("Enter the second number (greater than 1):"));

  while (number2 <= 1 || isNaN(number2)) {
    number2 = Number(prompt("Invalid! Enter a number greater than 1:"));
  }

  multiplicationTable(number1, number2);
}

// Function 2: Creates the multiplication table
function multiplicationTable(param1, param2) {
  if (param1 <= 1 || isNaN(param1)) {
    console.log("Parameter 1 must be greater than 1.");
    return;
  }

  if (param2 <= 1 || isNaN(param2)) {
    console.log("Parameter 2 must be greater than 1.");
    return;
  }

  let i = param1;  // i created an outer loop

  while (i >= 1) {
    let j = param2; // cma up with thee inner loop

    while (j >= 1) {
      console.log(`${i} * ${j} = ${i * j}`);
      j--;
    }

    
    i--;
  }
}

// Start the program
getNumbers();