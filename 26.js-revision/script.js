// bubbling is default behavior
// document
//   .querySelector("#button")
//   .addEventListener("click", () => alert("Button is clicked"));
// document
//   .querySelector("#span")
//   .addEventListener("click", () => alert("span is clicked"));
// document
//   .querySelector("#div")
//   .addEventListener("click", () => alert("div is clicked"));
// -------------------------------------------------------------------------------------------------------------------------------

// Event Capturing

// document
//   .querySelector("#button")
//   .addEventListener("click", () => alert("Button is clicked"), true);
// document
//   .querySelector("#span")
//   .addEventListener("click", () => alert("span is clicked"), true);
// document
//   .querySelector("#div")
//   .addEventListener("click", () => alert("div is clicked"), true);
// -------------------------------------------------------------------------------------------------------------------------------

// event.target, event.currentTarget

// document.querySelector("#span").addEventListener("click", function (event) {
//   console.log(
//     event.target,
//     event.currentTarget,
//     this
//   );
// });
// -------------------------------------------------------------------------------------------------------------------------------

// How to stop bubbling and capturing?

// document.querySelector("#button").addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     alert("Button is clicked");
//   },
//   true
// );
// document
//   .querySelector("#span")
//   .addEventListener("click", () => alert("span is clicked"));
// document
//   .querySelector("#div")
//   .addEventListener("click", () => alert("div is clicked"));
// -------------------------------------------------------------------------------------------------------------------------------

//Promises
// Example of async code ->
// console.log("start");
// setTimeout(() => {
//   console.log("inside setTimeout");
// });
// console.log("finish");
// -------------------------------------------------------------------------------------------------------------------------------

// Q0
// console.log("start");

// function impAction(name) {
//   setTimeout(() => {
//     return `Hello, ${name}`;
//   }, 1000);
// }

// const message = impAction("Prithwish");

// console.log(message); // What will be the output?
// console.log("stop");
// -------------------------------------------------------------------------------------------------------------------------------

// Callbacks
// const dominos = (topping1, topping2, topping3, callback) => {
//   const result = topping1 + " " + topping2 + " " + topping3;
//   callback(result);
// };

// const hedol = (pizza) => {
//   console.log("Ei ne tor pizza: " + pizza);
// };

// dominos("Chicken", "Black Olive", "Corn", hedol);

// -------------------------------------------------------------------------------------------------------------------------------

// Callback hell
// const vegPizza = (callback) => {
//   const result = "paneer pizza";
//   callback(result);
// };

// const nonVegPizza = (callback) => {
//   const result = "chicken pizza";
//   callback(result);
// };

// const mixedPizza = (callback) => {
//   const result = "Corn Kabab pizza";
//   callback(result);
// };

// const smoothie = (callback) => {
//   const result = "Choco Milkshake";
//   callback(result);
// };

// const smoothie1 = (callback) => {
//   const result = "Straberry Milkshake";
//   callback(result);
// };

// const hedol = (pizza) => {
//   console.log("Ei ne tor pizza: " + pizza);
// };

// vegPizza((vPiz) => {
//   hedol(vPiz);
//   nonVegPizza((nvPiz) => {
//     hedol(nvPiz);
//     mixedPizza((mPiz) => {
//       hedol(mPiz);
//     });
//   });
// });

// -------------------------------------------------------------------------------------------------------------------------------

// Promise

// const myPromise = new Promise((resolve, reject) => {
//   const randomNumber = Math.random();

//   if (randomNumber < 0.5) {
//     resolve(`Your number is - ${randomNumber}`);
//   } else {
//     reject(new Error("Random number is less than or equal to 0.5"));
//   }
// });

// myPromise.then((res) => console.log(res));

// Promise.reject(console.log("Your promise is rejected"));

// -------------------------------------------------------------------------------------------------------------------------------

// Promise combinators
const p1 = Promise.reject("p1 rejected");
const p2 = Promise.reject("p2 rejected");
const p3 = Promise.reject("p3 rejected");
const p4 = Promise.reject("p4 rejected");
const p5 = Promise.reject("p5 rejected");
const p6 = Promise.reject("p6 rejected");

Promise.race([p1, p2, p3, p4, p5, p6])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// -------------------------------------------------------------------------------------------------------------------------------
// Q1

// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
// });

// promise1.then((res) => {
//   console.log(res);
// });

// console.log("end");
