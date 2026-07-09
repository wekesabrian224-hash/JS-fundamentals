/**
 * complex data types
 * its a datatype that houses other datatypes
 * 
 * {
 * key:value
 * key:value
 * }
 * key=>number or string
 * value=> any other datatype<boolean,string,null,object
 if a value is a function <method>.
 */

/*
 create an object called car
 properties:name,model,top-speed
 engine-information
 manufacture:object<>
 number as property<key>>:any number
 alert-info:function that when called prints information of the car
 fun fact:<key>
 */

// Create an object called car
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
        "Name: " +
        this.name +
        "\n" +
        "Model: " +
        this.model +
        "\n" +
        "Top Speed: " +
        this.topSpeed +
        "\n" +
        "Manufacturer: " +
        this.engineInformation.manufacturer +
        "\n" +
        "Engine Type: " +
        this.engineInformation.engineType +
        "\n" +
        "Horsepower: " +
        this.engineInformation.horsepower +
        "\n" +
        "Fun Fact: " +
        this.funFact,
    );
  },
};
car.alertInfo();
