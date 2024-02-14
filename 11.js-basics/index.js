

// // Logical NOT
// const fName = prompt("Enter your first name");
// if (!fName) prompt('try again');


// // Logical OR
const age = "df";

if (age > 0 && age <= 5) {
  console.log("SISU");
} else if (age > 5 && age < 65 || age > 100 ) {
  console.log("JISU");
} else if (age >= 65 && age < 100) {
  console.log("DADU");
} else {
  console.log("Provide a vaild age");
}

// // Logical AND
// const password = prompt("Please Enter a password");

// if (password.length > 6 && password.indexOf(" ") === -1) {
//   console.log("valid Password")
// } else {
//   console.log('Password must be more than 6 characters and should not contain any space')
// }

// // Truthy and Falsy
// if (-1) {
//   console.log("Truthy");
// } else {
//   console.log("Falsy");
// }

// //Nested Conditionals

// const password = prompt("Please Enter a password");

// if (password.length > 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("Valid password");
//   } else {
//     console.error("Can't contain spaces");
//   }
// } else {
//   console.error("Must contain 7 characters");
// }

// IF Statements
// let random = Math.random();

// if (random < 0.5) {
//   console.log("Your number is less than 0.5");
// }

// Ticket Price

// const age = 65;

// if (age <= 5) {
//   console.log("Ticket price: FREE!");
// } else if ( age <= 10) {
//   console.log("Ticket price: $10");
// } else if ( age < 65) {
//   console.log("Ticket price: $30");
// } else if (age >= 65) {
//   console.log("Ticket price: $25");
// }

//variables
// let hens = 3;
// let roosters = 5;

// let totalChickens = hens + roosters;
// console.log("totalChickens= " + totalChickens); //What will be the answer? Explain

// hens = hens + 2;
// console.log("Hens= " + hens); //What will be the answer? Explain

// console.log("totalChickens= " + totalChickens); //What will be the answer? Explain

// totalChickens = hens + roosters;
// console.log("totalChickens= " + totalChickens); //What will be the answer? Explain

// Generating Random numbers between 5 to 10
// let randomNumber = Math.random();
// let int = Math.floor(randomNumber);
// let randomInt = int + 5;

// console.log(randomInt);
