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

// 
function getNumbers() {
  let number1 = Number(prompt("Enter the first number greater than 1:"));

  while (number1 <= 1 || isNaN(number1)) {
    number1 = Number(prompt("Invalid! Enter a number greater than 1:"));
  }

  let number2 = Number(prompt("Enter the second number greater than 1:"));

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

  let i = param1;  //  created an outer loop

  while (i >= 1) {
    let j = param2; // came up with thee inner loop

    while (j >= 1) {
      console.log(`${i} * ${j} = ${i * j}`);
      j--;
    }

    
    i--;
  }
}

// Start the program
getNumbers();


// create a function @checkPassword<give it any name>.
//     it does not take any parameters.
//     this function
//     1. prompts the user to enter a password (a string).
//     2. use a loop to keep prompting until the password meets ALL these rules:
//        - at least 8 characters long
//        - contains at least one number (0-9)
//        - contains at least one uppercase letter
//     3. once valid, call @analyzePassword(password)

// create a function @analyzePassword<give it any name>.
//     this function takes in the following parameter
//     @param1 a valid password string (already passed the checks above)
//
//     it should console.log the following, calculated from the string itself
//     (not hardcoded numbers):
//     1. total length of the password
//     2. how many digits it contains
//     3. how many uppercase letters it contains
//     4. how many lowercase letters it contains
//     5. the password reversed
//
//     example -> analyzePassword("Passw0rd123")
//     should log something like:
//     Length: 11
//     Digits: 4
//     Uppercase: 1
//     Lowercase: 6
//     

// Function 1: Prompts the user for a valid password
function checkPassword() {
  let password = prompt("Enter a password:"); // prompts the user to key in the password

  while (
    password.length < 8 ||
    !/[0-9]/.test(password) ||
    !/[A-Z]/.test(password)
  ) {
    password = prompt(
      "Invalid! Password must:\n" +
      "- Be at least 8 characters\n" +
      "- Contain at least one number\n" +
      "- Contain at least one uppercase letter"
    );
  }

  analyzePassword(password);
}

// Function 2: Analyzes the password
function analyzePassword(password) {
  let digits = 0;
  let uppercase = 0;
  let lowercase = 0;
  let reversed = "";

  let i = 0;

  while (i < password.length) {
    let character = password[i];

    if (character >= "0" && character <= "9") {
      digits++;
    }

    if (character >= "A" && character <= "Z") {
      uppercase++;
    }

    if (character >= "a" && character <= "z") {
      lowercase++;
    }

    reversed = character + reversed;

    i++;
  }

  console.log("Length:", password.length);
  console.log("Digits:", digits);
  console.log("Uppercase:", uppercase);
  console.log("Lowercase:", lowercase);
  console.log("Reversed:", reversed);
}

// Start the program
checkPassword();