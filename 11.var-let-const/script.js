// Scope
function hello() {
  var h = "hello";
}
// console.log(h);

{
  let num1 = 1;
  const num2 = 2;
}
// console.log(num1)
// console.log(num2)

// Variable Shadowing
function test() {
  let a = "Hello";
  if (true) {
    let a = "Hi";
    console.log(a);
  }
  console.log(a);
}
// test();

// ILLEGAL SHADOWING
// function test1() {
//   var a = "Hello";
//   let b = "Hello1";

//   if (true) {
//     const a = "Hi";
//     var b = "Hi1";

//     console.log(a);
//     console.log(b);
//   }
//   console.log(a);
//   console.log(b);
// }
// test1();

// const d = 1
// const d;

// RE-INITIALIZE
// var a = 1;
// a = 2;

// let b = 5;
// b = 10;

// const c = 7;
// c = 9;

// Hoisting
foo();
foo1(); 

function foo() {
  if (true) {
    function foo1() {
      console.log("Hello");
    }
  }
  return foo1;
}
