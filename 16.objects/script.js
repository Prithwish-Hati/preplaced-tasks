// let person = {
//   name: "John",
//   age: 30,
//   isStudent: false,
// };

// // console.log(person.age);
// // console.log(person["isStudent"]);

// const func = (function (a) {
//   delete a;
//   return a;
// })(5);

// // console.log(5);

// const obj1 = {
//   channel: "Mr. Beast",
//   "like the video": true,
// };

// // console.log(obj1["like the video"]);

// const property = "firstName";
// const name = "John";

// const user = {
//   [property]: name,
// };

// let person1 = {
//   name: "Jumanji",
//   age: 30,
//   isStudent: false,
// };

// for (key in person1) {
//   //   console.log(key); // Prints properties
//   //   console.log(person1[key]); // Prints values
// }

// const obj = {
//   a: "one",
//   b: "two",
//   a: "three",
// };

// console.log(obj);

// // Create a function that multiplies all numeric property values by 2.
// let nums = {
//   a: 100,
//   b: 200,
//   title: "Hello",
// };

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123; // ->
// a[c] = 456;

// console.log(a[b]);

// let person2 = {
//   name: "Jumanji",
//   age: 30,
//   isStudent: false,
// };

// const strObj = JSON.stringify(person2);
// localStorage.setItem("test", strObj); // If you don't convert it to string it will be [object Object]

// JSON.parse(localStorage.getItem("test")); // Returns the object from localStorage

// console.log([..."Lydia"]);

// const user1 = {
//   name: "Lydia",
//   age: 21,
// };

// const admin = {
//   admin: true,
//   ...user1,
// };

// console.log(admin);

// const settings = {
//   username: "Lydia",
//   level: 21,
//   health: 90,
// };

// const data = JSON.stringify(settings, ["level", "health"]);
// console.log(data);

// const shape = {
//     radius: 10,
//     diameter() {
//         return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius
// }

// console.log(shape.diameter())
// console.log(shape.perimeter())

// let user = {
//   name: "Prithwish",
//   age: 22,
//   her: {
//     first: "Sneha",
//     last: "Mukherjee",
//   },
// };

// const name = "Sneha";

// const {
//   her: { first },
// } = user;

// console.log(first);

// function getItems(fruitList, favFruit, ...args) {
//   return [...fruitList, ...args, favFruit];
// }

// console.log(getItems(["Banana", "Apple"], "Pear", "Orange"));

// // [Banana, Apple, Pear, Orange]

// let c = { greeting: "hey!" };
// let d;

// d = c;

// c.greeting = "hello";
// console.log(d.greeting);

// console.log({ a: 1 } == { a: 1 });
// console.log({ a: 1  } === { a: 1 });

// let person = { name: "Lydia" };
// const members = [person];
// person.name = null;

// console.log(members);

// const value = { number: 10 };

// const multiply = (x = { ...value }) => {
//   console.log((x.number *= 2));
// };

// multiply();
// multiply();
// multiply(value);
// multiply(value);

// Q15
// function changeAgeAndReference(person) {
//   person.age = 25;
//   person = {
//     name: "John",
//     age: 50,
//   }

//   return person
// }

// const personObj1 = {
//   name: "Alex",
//   age: 30,
// }

// const personObj2 = changeAgeAndReference(personObj1)

// console.log(personObj1) // ? 
// console.log(personObj2) // ? 


// Q16
let user = {
  name: "Prithwish Hati",
  age: 22,
}

const objClone = Object.assign({}, user); // This does not clone nested objects
const objClone1 = JSON.parse(JSON.stringify(user))
const objClone2 = {...user}

objClone.name = "Sneha Mukherjee"
objClone1.name = "Sneha Mukherjee"
objClone2.name = "Sneha Mukherjee"

console.log(user, objClone, objClone1, objClone2)