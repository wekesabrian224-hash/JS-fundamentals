/*
 1. exist code
 2. return any required data.
*/

function sayMyName() {
  let first_name = "Samson"; //statement 1
  console.log(`First Name ${first_name}`); // statement 2
  return
  let second_name = "Johnna"; //stement 3
  console.log(`Second Name ${second_name}`); //statement 4
  return
  let full_name = `${first_name} ${second_name}`; //statement 5
  console.log(`Names are ${full_name}`); //statement 6
}

let sayMyNameValue = sayMyName();

console.log(`Function returned ${sayMyNameValue}`);

/*
senario 1:
  Leave it as it is and look at the results.
   -what happens
senario 2:after the second statement inside the function
  put a return.
   -what happens(exists the function exactly where the return statement is)
senario 3:after the fourth statement inside the function
  put a return.
   -what happens(exists the function exctly where the return statement is)
senario 4:put a return stament anywhere inside your funciton and return
  a string of your choice
senario 5:put a return stament anywhere inside your funciton and return
  a number of your choice
senario 6:put a return stament anywhere inside your funciton and return
  a boolean of your choice
*/