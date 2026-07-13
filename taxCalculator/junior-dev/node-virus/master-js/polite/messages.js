const data = require("./data.json");
const fs = require("fs");
console.log(data);
const output = [];
for (i = 0; i < data.length; data++) {
  const { first_name, last_name, email, gender, phone } = data;
  let title;
  if (people[i].gender === "male") {
    title = "Mr.";
  } else {
    title = "Ms.";
  }
  console.log(
    `Dear ${title} ${people[i].name},Izah mehn hupati kazii this time`,
  );
  output.push({ first_name, last_name, email, gender, phone });
}
const outputText = JSON.stringify(output);
fs.writeFile("output.json", outputText, (error) => {});
