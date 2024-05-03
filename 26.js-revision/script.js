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
// const p1 = Promise.reject("p1 rejected");
// const p2 = Promise.reject("p2 rejected");
// const p3 = Promise.reject("p3 rejected");
// const p4 = Promise.reject("p4 rejected");
// const p5 = Promise.reject("p5 rejected");
// const p6 = Promise.reject("p6 rejected");

// Promise.race([p1, p2, p3, p4, p5, p6])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// -------------------------------------------------------------------------------------------------------------------------------

// async/await

// const fetchUserData = () => {
//   return [
//     { name: "Prithwish", age: 22 },
//     { name: "Sonu", age: 21 },
//   ];
// };

// const fetchPosts = () => {
//   return [
//     { title: "Graduated", text: "Finally finished college, yay" },
//     { title: "On vacation", text: "Darjeeling, I'm coming" },
//   ];
// };

// async function fetchData() {
//   try {
//     const result1 = await fetchUserData(); // Wait for fetchUserData() to complete
//     console.log("User data:", result1);

//     const result2 = await fetchPosts(); // Wait for fetchPosts() to complete
//     console.log("Posts:", result2);

//     return "Data fetched successfully";
//   } catch (error) {
//     console.error("An error occurred:", error);
//     throw error; // Rethrow the error
//   }
// }

// fetchData();

// -------------------------------------------------------------------------------------------------------------------------------
// Q1

// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
//   console.log(3);
// });

// promise1.then((res) => {
//   console.log(res);
// });

// console.log("end");
// -------------------------------------------------------------------------------------------------------------------------------

// Q2
// console.log("start");

// const fn = () =>
//   new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("success");
//   });

// console.log("middle");

// fn().then((res) => {
//   console.log(res);
// });

// console.log("end");
// -------------------------------------------------------------------------------------------------------------------------------

// Q3

// function job() {
//   return new Promise(function (resolve, reject) {
//     reject();
//   });
// }

// let promise = job();

// promise
//   .then(function () {
//     console.log("Success 1");
//   })
//   .then(function () {
//     console.log("Success 2");
//   })
//   .then(function () {
//     console.log("Success 3");
//   })
//   .catch(function () {
//     console.log("Error 1");
//   })
//   .then(function () {
//     console.log("Success 4");
//   });
// -------------------------------------------------------------------------------------------------------------------------------

//Q4
// function job(state) {
//   return new Promise(function (resolve, reject) {
//     if (state) {
//       resolve("success");
//     } else {
//       reject("error");
//     }
//   });
// }

// let promise = job(true);

// promise
//   .then(function (data) {
//     console.log(data);

//     return job(false);
//   })
//   .catch(function (error) {
//     console.log(error);

//     return "Error caught";
//   })
//   .then(function (data) {
//     console.log(data);

//     return job(true);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// -------------------------------------------------------------------------------------------------------------------------------

//Q5
// function job(state) {
//   return new Promise(function (resolve, reject) {
//     if (state) {
//       resolve("success");
//     } else {
//       reject("error");
//     }
//   });
// }

// let promise = job(true);

// promise
//   .then(function (data) {
//     console.log(data);

//     return job(true);
//   })
//   .then(function (data) {
//     if (data !== "victory") {
//       throw "Defeat";
//     }
//     return job(true);
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(error);
//     return job(false);
//   })
//   .then(function (data) {
//     console.log(data);
//     return job(true);
//   })
//   .catch(function (error) {
//     console.log(error);
//     return "Error Caught";
//   })
//   .then(function (data) {
//     console.log(data);
//     return new Error("test"); // not returning a promise
//   })
//   .then(function (data) {
//     console.log("Sucess:", data.message);
//   })
//   .catch(function (data) {
//     console.log("Error:", data.message);
//   });

// -------------------------------------------------------------------------------------------------------------------------------

// Q6
// Create two promises: firstPromise and secondPromise. firstPromise should resolve with the value 'first', and secondPromise should resolve with the result of firstPromise. Now log the value of firstPromise with promise chaining.

// const firstPromise = new Promise((resolve, reject) => {
//   resolve("first!");
// });

// const secondPromise = new Promise((resolve, reject) => {
//   resolve(firstPromise);
// });

// secondPromise
//   .then((res) => {
//     return res;
//   })
//   .then((res) => console.log(res));

// -------------------------------------------------------------------------------------------------------------------------------

// Q7

// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }

// loadJson("https://fakeurl.com/no-such-user.json").catch((err) =>
//   console.log(err)
// );

// // with async await
// const loadJSON = async (url) => {
//   const response = await fetch(url);

//   if (response.status == 200) {
//     let json = await response.json();
//     return json;
//   }

//   throw new Error(response.status);
// };

// loadJSON("https://fakeurl.com/no-such-user.json").catch((err) =>
//   console.log(err)
// );
