/*
if the condition is falsey then
it will not execute the code in /{}/ 

Any questions -> examples
*/

/* senario 1:
  1.declare a variable of your choice, assign a truthy value
    create an if statement and put the variable
    inside the if statement condition(<variable>).
    inside the if console.log("Senario 1 it run")
*/
let myName = "Lucky";
if (myName) {
  console.log("Senario 1 it run");
}

/* senario 2:
  1.declare a variable of your choice, assign a falsey value
    create an if statement and put the variable
    inside the if statement. inside the if
    console.log("Senario 2 it run")
*/
let myAge = 0;
if (myAge) {
  console.log("Senario 2 it run");
}

/* senario 3:
  1.create an if statement inside the if statement condition
    part. have true.
    inside the block({}) console.log("Senario 3 it run")
*/
if (true) {
  console.log("Senario 3 it run");
}

/* senario 4:
  1.create an if statement inside the if statement condition
    part. have false.
    inside the block({}) console.log("Senario 4 it run")
*/
if (false) {
  console.log("Senario 4 it run");
}

/* senario 5:
  1.create an if statement inside the if statement condition
    part. 10>20
    inside the block({}) console.log("Senario 5 it run")
*/
if (10 > 20) {
  console.log("Senario 5 it run");
}

/* senario 6:
  1.create an if statement inside the if statement condition
    part. have 20>10.
    inside the block({}) console.log("Senario 6 it run")
*/
if (20 > 10) {
  console.log("Senario 6 it run");
}