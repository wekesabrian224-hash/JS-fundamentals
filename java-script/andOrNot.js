let mercy_age = 15;
let mercy_balance = 50000;

// if mercy's age is greater than 18 and has more than 20k in her account
let is_greater_than_18 = mercy_age > 18; // true or false
console.log(`Is mercy age greater than 18 ${is_greater_than_18}`);

let has_more_than_20k = mercy_balance > 20000;
console.log(`Mercy has more than 20k ${has_more_than_20k}`);

console.log(`mercy is age is greter than 18
    and has more than 20k in her account
    ${is_greater_than_18 && has_more_than_20k}
`);

// mercy_age>18&&mercy_balance>20000
let simplified = mercy_age > 18 && mercy_balance > 20000;
console.log(`simplified ${simplified}`);


let mercy_age = 15;
let mercy_balance = 50000;

// if mercy's age is greater than 18 and has more than 20k in her account
let is_greater_than_18 = mercy_age > 18; // true or false
console.log(`Is mercy age greater than 18 ${is_greater_than_18}`);

let has_more_than_20k = mercy_balance > 20000;
console.log(`Mercy has more than 20k ${has_more_than_20k}`);

// AND operator — BOTH must be true
console.log(`mercy is age is greter than 18
    and has more than 20k in her account
    ${is_greater_than_18 && has_more_than_20k}
`);

// mercy_age>18&&mercy_balance>20000
let simplified = mercy_age > 18 && mercy_balance > 20000;
console.log(`simplified ${simplified}`);
console.log(`further simplification is ${mercy_age > 18 && mercy_balance > 20000}`);

// OR operator — AT LEAST ONE must be