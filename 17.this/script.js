let user = {
  name: "Prithwish",
  age: 24,
  getDetails() {
    const nesedArrow = () => console.log(this.name);
    nesedArrow();
  },
};

// user.getDetails();

class Person {
  constructor(n) {
    this.name = n;
  }

  getName() {
    console.log(this.name);
  }
}

const person1 = new Person("Prithwish");

// Person.getName();

const user1 = {
  name: "Prithwish",
  greet() {
    return `Hello, ${this.name}`;
  },
  farewell: () => {
    return `Goodbye, ${this.name}`;
  },
};

console.log(user1.greet());
console.log(user1.farewell());

// Create an object calculator

// let num1 = prompt("Write a number");
// let num2 = prompt("Write another number");

// let calculator = {
//   read() {
//     this.a = +prompt("a =", 0);
//     this.b = +prompt("b =", 0);
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

var length = 4;
function callback() {
  console.log(this.length); // ?
}
const object = {
  length: 5,
  method() {
    arguments[0]();
  },
};
object.method(callback, 2, 3);

const calc = {
  total: 0,
  add(x) {
    this.total += x;
    return this;
  },
  multiply(y) {
    this.total *= y;
    return this;
  },
  substract(z) {
    this.total -= z;
    return this;
  },
};

const result = calc.add(10).multiply(5).substract(30).add(3);
console.log(result.total);
