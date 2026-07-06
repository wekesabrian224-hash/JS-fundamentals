/*
loops: runa ablock of code over and over agin ,you should nit loop to infinity
syntax
while(condition) {
block of code}
condition it truthy=>continue*/


let condition = true;
let n = 0;

while (condition) {
  console.log("n is", n);
  n = n + 1;

  if (n > 100) {
    condition = false;
  }
}