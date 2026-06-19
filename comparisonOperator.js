/*
Comparison operators evaluate to only true or false.
  1.Equality ==
  2.Strict Equality ===
  3.Inequality !=
  4.Strict Inequality !==
  -- JS --
*/

let numb1 = "23";
let numb2 = 23;

//string===number -> false
//numb1==numb2 -> type conversion

let strictEqual = numb1 === numb2; //Boolean
console.log(`numb1=${numb1}===numb2=${numb2}
    Ans ${strictEqual} its type is ${typeof strictEqual}`);

let nonStrictEquality = numb1 == numb2;
