/*
template or string intepolation
is a way to combine data for stronger for output
 */

let firstName ="samiel"
let secondName="wekesa"
let age=900
let address="msa county"

let userDetails=firstName+" "+
secondName+" is"+age+"years old"+
"he stays at "+address
console.log(userDetails)

//template string use back ticks
let userDetails2=
`${firstName} ${secondName} is ${age} and comes from ${address}`;

console.log(userDetails2)
