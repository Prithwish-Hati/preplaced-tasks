// IIFE
(function (x) {
  return (function (y) {
    // console.log(x + y);
  })(2);
})(5);

// Function Scope

var num1 = 20,
  num2 = 10,
  name = "John";
(function add() {
  //   console.log(num1 + num2); //Takes values from global scope
})();
(function getScore() {
  var num1 = 30,
    num2 = 50;
  function add() {
    // console.log(name + " scored " + (num1 + num2)); // Takes name's value from global and num1, num2 values from outer function
  }
  return add();
})();

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    // console.log(i);
  }, i * 1000);
}

var x = 21;
var fun = function () {
  //   console.log(x);
  var x = 20;
};
fun();

const spreadOp = (a) => {
  //   console.log(a);
};
const arr = [1, 2, 3];
spreadOp(...arr);

const restPara = (...para) => {
  //   console.log(para);
};
restPara(1, 2, 3);

// const fn = (a, ...numbers, x, y) => {
//     console.log(x, y)
// }
// fn(5, 6, 7, 3, 2)