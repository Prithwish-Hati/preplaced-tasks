// Example Array
const numbers = [1, 2, 3, 4, 5];

// Using map()
const doubledNumbers = numbers.map((num) => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
console.log(numbers); // Output: [1, 2, 3, 4, 5] (Original array remains unchanged)

// Using forEach()
const squaredNumbers = [];
numbers.forEach((num) => {
  squaredNumbers.push(num * num);
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
console.log(numbers); // Output: [1, 2, 3, 4, 5] (Original array remains unchanged)

// Another example
const arr = [1, 2, 3, 4, 5];

const mapResult = arr.map((el) => el * 2);
const forEachResult = arr.forEach((el, i) => {
  arr[i] = el + 1;
});

console.log(mapResult, forEachResult, arr);

const students = [
  { name: "Alice", rollNumber: 31, marks: 80,},
  { name: "Charlie", rollNumber: 15, marks: 69,},
  { name: "David", rollNumber: 16, marks: 35,},
  { name: "Bob", rollNumber: 16, marks: 55,},
];

console.log(students);
