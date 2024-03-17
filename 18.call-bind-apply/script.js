var obj = { name: "Prithwish" };

function sayHello(age, prof) {
  return "Hello " + this.name + " is " + age + " - " + prof;
}

console.log(sayHello.call(obj, 22, "Coder"));
console.log(sayHello.apply(obj, [22, "Coder"]));

const bindFunc = sayHello.bind(obj);

console.log(bindFunc(24, "Coder"));
console.log(bindFunc(22, "Engineer"));
