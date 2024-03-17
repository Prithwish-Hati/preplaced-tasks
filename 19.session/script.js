const obj = {
  numb: 1,
  getNumb1() {
    numb = 7;
    console.log(this.numb);
  },
  getNumb2: () => {
    numb = 7;
    console.log(this.numb);
  },
};

obj.getNumb1(); // 1
obj.getNumb2(); // undefined

const name = { fName: "John" };

function myFunc(a, b) {
  return this.fName + (a + b);
}

const bindFunc = myFunc.bind(name);

console.log(bindFunc());

myFunc.call(name, 1, 2);
myFunc.apply(name, [1, 2]);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

arr1.push(arr2); // [1, 2, 3, [4, 5, 6]]
arr1.push.apply(arr2); // [1, 2, 3, 4, 5, 6]

const a = { fName: "John" };
const c = { fName: "John" };

const b = a;

difference([1, 2, 3], [2, 3]); // => [1]
difference([1, 2, 3, 4], [2, 3, 1]); // => [4]
difference([1, 2, 3], [2, 3, 1, 4]); // => []
difference([1, , 3], [1]); // => [3]

// set()
function difference(...args) {
  console.log(args);

  let newArr1 = args;
}
