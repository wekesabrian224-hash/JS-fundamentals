const car = {
  name: "Porsche",
  model: "911 GT3",
  topSpeed: "318 km/h",
  engineInformation: {
    manufacturer: "Porsche AG",
    engineType: "4.0L Flat-6",
    horsepower: 502,
  },
  2026: "Latest Model",
  funFact: "The Porsche 911 has been in production since 1964.",
  alertInfo: function () {
    alert(
      
    );
  },
};

console.table(car);
console.log(`cartype ${typeof car}`);

const car = {
  name: "Porsche",
  model: "911 GT3",
  topSpeed: "318 km/h",
  engineInformation: {
    manufacturer: "Porsche AG",
    engineType: "4.0L Flat-6",
    horsepower: 502,
  },
  2026: "Latest Model",
  funFact: "The Porsche 911 has been in production since 1964.",
};

// Dot notation
console.log(car.name);
console.log(typeof car.name);

console.log(car.model);
console.log(typeof car.model);

console.log(car.topSpeed);
console.log(typeof car.topSpeed);

console.log(car.engineInformation);
console.log(typeof car.engineInformation);

console.log(car.engineInformation.manufacturer);
console.log(typeof car.engineInformation.manufacturer);

console.log(car.engineInformation.engineType);
console.log(typeof car.engineInformation.engineType);

console.log(car.engineInformation.horsepower);
console.log(typeof car.engineInformation.horsepower);

// Bracket notation
console.log(car["name"]);
console.log(typeof car["name"]);

console.log(car["model"]);
console.log(typeof car["model"]);

console.log(car["topSpeed"]);
console.log(typeof car["topSpeed"]);

console.log(car["engineInformation"]);
console.log(typeof car["engineInformation"]);

console.log(car["engineInformation"]["manufacturer"]);
console.log(typeof car["engineInformation"]["manufacturer"]);

console.log(car["engineInformation"]["engineType"]);
console.log(typeof car["engineInformation"]["engineType"]);

console.log(car["engineInformation"]["horsepower"]);
console.log(typeof car["engineInformation"]["horsepower"]);

console.log(car["2026"]);
console.log(typeof car["2026"]);

console.log(car["funFact"]);
console.log(typeof car["funFact"]);