// sum(2)(6)(1)

function sum(x) {
  return function (y) {
    return function (z) {
      //   console.log(x + y + z);
    };
  };
}

// sum(2)(6)(1);

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

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(5)(2)(4)(8)());
console.log(add(5)(2)(4)(8)(10)(2)());

function sum(a) {
  return function (b, c) {
    return a + b + c;
  };
}

const x = sum(10);
console.log(x(5, 6));

// or
console.log(sum(20)(1, 4));

function sum1(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const y = sum1(2);
// console.log(y, 2(5));
//or
console.log(sum1(2)(5)(1));

function updateElementText(id) {
  return function (content) {
    document.querySelector('#' + id).textContent = content;
  }
}

const updateHeader = updateElementText('heading')
updateHeader("Hello World")

