function makeFun() {
    var name = "Mozilla";
    function displayName() {
      console.log(name);
    }
  
    return displayName;
  }
  
  // makeFun()()
  
  var e = 10;
  function sum(a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return a + b + c + d + e;
        };
      };
    };
  }
  
  // console.log(sum(1)(2)(3)(4));
  
  let count = 0;
  (function printCount() {
    if (count === 0) {
      let count = 1;
      // console.log(count);
    }
    // console.log(count);
  })();
  
  var addSix = createBase(6);
  