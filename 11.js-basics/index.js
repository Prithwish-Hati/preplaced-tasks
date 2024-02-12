// IF Statements
// let random = Math.random();

// if (random < 0.5) {
//   console.log("Your number is less than 0.5");
// }

// Ticket Price

const age = 65;

if (age <= 5) {
  console.log("Ticket price: FREE!");
} else if ( age <= 10) {
  console.log("Ticket price: $10");
} else if ( age < 65) {
  console.log("Ticket price: $30");
} else if (age >= 65) {
  console.log("Ticket price: $25");
}

//variables
let hens = 3;
let roosters = 5;

let totalChickens = hens + roosters;
console.log("totalChickens= " + totalChickens); //What will be the answer? Explain

hens = hens + 2;
console.log("Hens= " + hens); //What will be the answer? Explain

console.log("totalChickens= " + totalChickens); //What will be the answer? Explain

totalChickens = hens + roosters;
console.log("totalChickens= " + totalChickens); //What will be the answer? Explain

// Generating Random numbers between 5 to 10
let randomNumber = Math.random();
let int = Math.floor(randomNumber);
let randomInt = int + 5;

console.log(randomInt);
