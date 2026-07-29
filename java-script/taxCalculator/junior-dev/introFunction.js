//for creating time alert using functions
function timeAlert(){
  const date=new Date()
  alert(`time stamp: ${date.toLocaleString("en-KE",{
    timeZone: "africa/Nairobi",
  })}`)
}
timeAlert()

/* Scenario 1: no arguments
areaOfTriangle();

// Scenario 2: base of 20, no height
areaOfTriangle(20);

// Scenario 3: base 20, height 30
areaOfTriangle(20, 30);

// Scenario 4: variables base1=50, height1=60
const base1 = 50;
const height1 = 60;
areaOfTriangle(base1, height1);

// Scenario 5: base2="hello", height2=true (but passes base1, height1 — as written in the image)
const base2 = "hello";
const height2 = true;
areaOfTriangle(base1, height1);

areaOfTriangle(
*/

function areaOfTriangle(base, height) {
  console.log(`base, height is ${base} its type ${typeof base}`);
  console.log(`height is ${height} its type ${typeof height}`);
  const area = 0.5 * base * height;
  console.log(
    `For triangle with base ${base} and height ${height} area is ${area}`,
  );
}



areaOfTriangle();           // Scenario 1
areaOfTriangle(20);         // Scenario 2
areaOfTriangle(20, 30);     // Scenario 3

const base1 = 50;
const height1 = 60;
areaOfTriangle(base1, height1); // Scenario 4