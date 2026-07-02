function timeAlert() {
  const date = new Date();
  alert(
    `time stamp: ${date.toLocaleString("en-KE", {
      timeZone: "africa/Nairobi",
    })}`,
  );
}
timeAlert();

function greet(name) {
  //named function
  return "hello" + name;
}

let greet = function (name) {
  // the anonymus function
  return "hello" + name;
};
let greet = (name) => {
  return "hello" + name;
};
let sayHello = greet;

console.log(`sayHello"lucky"`);

setInterval(greet, 5000);
