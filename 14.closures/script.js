// function makeFun() {
//   var name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }

//   return displayName;
// }

// makeFun()()

// var e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4));

// let count = 0;
// (function printCount() {
//   if (count === 0) {
//     let count = 1;
//     // console.log(count);
//   }
//   // console.log(count);
// })();

// var addSix = createBase(6);

// function createBase(x) {
//   function sum(y) {
//     return x + y;
//   }

//   return sum;
// }

// console.log(addSix(10)); // Should return 16
// console.log(addSix(21)); // Should return 27

// Optimize the time
// function find(index) {
//   let a = [];
//   for (let i = 0; i < 100000; i++) {
//     a[i] = i * i;
//   }

//   console.log(a[index]);
// }

// console.time("16");
// find(16);
// console.timeEnd("16");
// console.time("12");
// find(12);
// console.timeEnd("12");

// for (var i = 0; i < 3; i++) {
//   function inner(i) {
//     setTimeout(function log() {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// inner(i);

// function counter() {
//   let _counter = 0;

//   function add(increment) {
//     _counter += increment;
//   }

//    // Output -> 0

//   function retrieve() {
//     return "Counter = " + _counter; // Output -> 15
//   }

//   console.log(_counter)
//   return { add, retrieve };
// }

// const c = counter();
// const d = counter()

// c.add(5);
// // d.add(10)
// console.log(d.retrieve())
// c.add(10);

var Module = (function () {
  function privateMethod() {
    console.log("Private");
  }

  return {
    publicMethod: function () {
      console.log("public");
    },
  };
})();

// Module.publicMethod(); // output -> Public
// Module.privateMethod(); // TypeError -> Module.privateMethod is not a function

let view;
function likeTheVideo() {
  let count = 0;

  return function () {
    if (count > 0) {
      console.log("already subscribed");
    } else {
      view = "Roadside Coder";
      console.log("Subscribe to", view);
      count++;
    }
  };
}

let isSubscribed = likeTheVideo();

isSubscribed()
isSubscribed()
isSubscribed()
isSubscribed()
isSubscribed()
