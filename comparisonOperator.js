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


let numb3 = 20;
let numb4 = 10;

let str1 = "a";
let str2 = "b";

console.log(`num3=${numb3} and numb4=${numb4}`);
console.log(`str1=${str1} and str2=${str2}`);

// Greater than
console.log(`numb3>numb4 ${numb3 > numb4}`);
console.log(`str2>str1 ${str1 > str2}`);

// Greater than or equal to
console.log(`numb3>=numb4 ${numb3 >= numb4}`);
console.log(`str2>=str1 ${str1 >= str2}`);

// Less than
console.log(`numb3<numb4 ${numb4 > numb3}`);
console.log(`str2<str1 ${str1 < str2}`);

// Less than or equal to
console.log(`numb3<=numb4 ${numb3 <= numb4}`);
console.log(`str2<=str1 ${str1 <= str2}`);