function areaCircle(r) {
  return 3.142 * r * r;
} // named function

// anonymous functions
let age = 23;
let samsAge = age; //age=23
let ac = areaCircle;

console.log(`the value of ac, ${ac} and its type of is ${typeof ac}`);
// create a function of your choice
// asign the fucntion a variable
//directly equate the variable to the function defination
//remove the original function
//try calling the variable and try calling the original and make the observation
//remove the name of the function since its useless
// you are left with ananonymous function <function without a name>

// function userName(lucky, brian) {
//   return lucky + " " + brian;
// }

let full_name = userName;  

console.log(full_name("Lucky", "Brian"));  




