// sum(2)(6)(1)

function sum(x) {
  return function (y) {
    return function (z) {
      //   console.log(x + y + z);
    };
  };
}

sum(2)(6)(1);

function evaluate(method) {
  return function (x) {
    return function (y) {
      if (method === "sum") {
        return x + y;
      } else if (method === "multiply") {
        return x * y;
      } else if (method === "divide") {
        return x / y;
      } else if (method === "substract") {
        return x - y;
      } else {
        return "Provide valid method";
      }
    };
  };
}

console.log(evaluate("sum")(4)(2)); // => 6
console.log(evaluate("multiply")(3)(2)); // => 6
console.log(evaluate("divide")(40)(4)); // => 10
console.log(evaluate("substract")(4)(4)); // => 0
console.log(evaluate("substracts")(4)(4)); // => Provide valid method
