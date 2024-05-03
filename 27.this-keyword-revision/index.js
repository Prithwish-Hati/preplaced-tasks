// //  global
// console.log(this);

// // normal function
// const obj = {
//   name: "Prithwish",
//   greet: function () {
//     console.log(`Hello ${this.name}`);
//   },
// };

// obj.greet();

// //  arrow function
// const obj1 = {
//   name: "Prithwish",
//   greet: () => {
//     console.log(this.name);
//   },
//   nestedGreet: function () {
//     const nestedArrow = () => console.log(this.name); // takes this value from NORMAL parent function
//     nestedArrow();
//   },
// };

// obj1.greet();
// obj1.nestedGreet();

// // event handlers
// document.querySelector("#parent").addEventListener("click", function () {
//   console.log(this); // prints the parent element even if you click child
// });

// // class or constructor
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const person1 = new Person("Alice", 30);
// const person2 = new Person("Bob", 25);

// console.log(person1.name); // Output: Alice
// console.log(person2.age); // Output: 25
//---------------------------------------------------------------------

//Q1
// const user = {
//   fName: "Prithwish",
//   getName() {
//     const fName = "Sonu";
//     return this.fName;
//   },
// };

// console.log(user.getName());
//---------------------------------------------------------------------

// Q2
// function makeUser() {
//   return {
//     name: "John",
//     ref: this,
//   };
// }

// let user = makeUser();

// console.log(user);
//---------------------------------------------------------------------

// Q3
// const user = {
//   name: "Prithwish Hati",
//   logMessage() {
//     console.log(this.name);
//   },
// };

// setTimeout(user.logMessage, 1000);
//---------------------------------------------------------------------

//Q4
// const user1 = {
//   name: "Prithwish",
//   greet() {
//     return `Hello, ${this.name}`;
//   },
//   farewell: () => {
//     return `Goodbye, ${this.name}`;
//   },
// };

// console.log(user1.greet());
// console.log(user1.farewell());
//---------------------------------------------------------------------

//Q5
// Create an object calculator
// let calculator = {
//   read() {
//     this.a = Number(prompt(`choose a number`));
//     this.b = Number(prompt(`choose another number`));
//   },
//   sum() {
//     return this.a + this.b;
//     2;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };

// calculator.read(); // take input from user
// console.log(calculator.sum());
// console.log(calculator.mul());
//---------------------------------------------------------------------

//q6
// var length = 4;
// function callback() {
//   console.log(this.length); // ?
// }
// const object = {
//   length: 5,
//   method(fn) {
//     fn();
//   },
// };
// object.method(callback);
//---------------------------------------------------------------------

// const obj = {
//   name: "Prithwish",
//   greet() {
//     function greet1() {
//       console.log(this);
//     }

//     greet1();
//   },
// };

// obj.greet();
//---------------------------------------------------------------------

// var length = 4;
// function callback() {
//   console.log(this.length); // ?
// }
// const object = {
//   length: 5,
//   method() {
//     arguments[0]();
//   },
// };
// object.method(callback, 2, 4);

//---------------------------------------------------------------------

const calc = {
  total: 0,
  add(num) {
    this.total += num;
    return this;
  },
  substract(num) {
    this.total -= num;
    return this;
  },
  multiply(num) {
    this.total *= num;
    return this;
  },
};

const result = calc.add(2).multiply(5).substract(30).add(3);
console.log(result.total);
