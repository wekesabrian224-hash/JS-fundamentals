// Create an array
const ar = [20, 5];

// Create an object that behaves like an array
const arObj = {
  0: 20,
  1: 5,
  length: 2,
};

// Display both
console.table(ar);
console.table(arObj);