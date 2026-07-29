/*
our own callback function
doing shape stuff
---->shapes
rectangle
circle
triangle
  1. for each of the shapes create a function to calculate the area ..ensure the function takes the required paarameters
   2. create a super function called shape. its going to take the function params
   @param1 function<correct shape>required
   @param2 shape name<string>
   param3 
  */


  const areaCircle = (r) => 3.142 * r * r;
const areaRectangle = (l, w) => l * w;
const areaTriangle = (b, h) => 0.5 * b * h;

console.log(areaCircle(10));
console.log(areaRectangle(10, 5));
console.log(areaTriangle(10, 5));

//the super functions
shape(areaCircle,"circle",10)// for areaCircle
shape(areaRectangle,"rectangle",10,5) // for rectangle
shape(areaTriangle,"triangle",12,15) // for triangle


const areaCircle = (r) => 3.142 * r * r;
const areaRectangle = (l, w) => l * w;
const areaTriangle = (b, h) => 0.5 * b * h;

console.log(areaCircle(10));
console.log(areaRectangle(10, 5));
console.log(areaTriangle(10, 5));

function shape(shapeFunction, shapeName, side1, side2, side3) {
  console.log(`shapeFunction ${shapeFunction} its a${typeof shapeFunction}`);
  console.log(`shapeName ${shapeName} its a${typeof shapeName}`);
  console.log(`side1 ${side1} its a${typeof side1}`);
  console.log(`side2 ${side2} its a${typeof side2}`);
  console.log(`side3 ${side3} its a${typeof side3}`);
}
