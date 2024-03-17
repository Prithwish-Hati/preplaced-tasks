// console.log("start");

// function impAction(name) {
//   setTimeout(() => {
//     return `Hello, ${name}`;
//   }, 1000);
// }

// const message = impAction("Prithwish");

// console.log(message); // What will be the output?
// console.log("stop");

// // Callback hell
// function greet(name, callback) {
//   setTimeout(() => {
//     callback(`Hello, ${name}`);
//   }, 1000);
// }

// function greet1(name, callback) {
//   setTimeout(() => {
//     callback(`Hola, ${name}`);
//   }, 1000);
// }

// function greet2(name, callback) {
//   setTimeout(() => {
//     callback(`Hello, ${name}`);
//   }, 1000);
// }

// function greet3(name, callback) {
//   setTimeout(() => {
//     callback(`Namaste, ${name}`);
//   }, 1000);
// }

// // greet("Prithwish", (message) => {
// //   console.log(message);
// //   greet1("Sonu", (message1) => {
// //     console.log(message1);
// //     greet2("Hedol", (message2) => {
// //       console.log(message2);
// //       greet3("Sweety", (message3) => {
// //         console.log(message3);
// //       });
// //     });
// //   });
// // });

// // Promise
// const sub = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = true;
//     if (result) resolve("successfully resolved");
//     else reject(new Error("failed to resolve"));
//   }, 2000);
// });

// sub
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // console.log(sub);

// //Directly resolve a promise
// // Promise.resolve("Hello Prithwish, your message is resolved");

// //Promise instead of callback hell
function greet4(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hello, ${name}`);
    }, 1000);
  });
}

function greet5(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hola, ${name}`);
    }, 1000);
  });
}

function greet6(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hello, ${name}`);
    }, 1000);
  });
}

function greet7(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Namaste, ${name}`);
    }, 1000);
  });
}

// // greet4("Prithwish")
// //   .then((res) => {
// //     console.log(message);
// //     return greet5("Sonu");
// //   })
// //   .then((message1) => {
// //     console.log(message1);
// //     return greet6("Hedol");
// //   })
// //   .then((message2) => {
// //     console.log(message2);
// //     return greet7("Sweety");
// //   })
// //   .then((message3) => {
// //     console.log(message3);
// //   })
// //   .catch((error) => {
// //     console.error(error);
// //   });

// Promise combinators

Promise.all([greet4("P"), greet5("Q"), greet6("R"), greet7("S")])
  .then((res) => {
    // console.log(res);
  })
  .catch((err) => console.log(err));

// Promise.race
const greet1 = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hello, ${name}`);
    }, 1000);
  });
};

const greet2 = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hola, ${name}`);
    }, 100);
  });
};

const greet3 = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Hello, ${name}`);
    }, 10);
  });
};

// Promise.race([greet1("A"), greet2("B"), greet3("C")])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Promise.allSettled([greet1("1"), greet2("2"), greet3("3")])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Promise.any([greet1("any1"), greet2("any2"), greet3("any3")])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

const result = async () => {
  try {
    const message1 = await greet1("await1");
    console.log(message1);
    const message2 = await greet2("await2");
    console.log(message2);
    const message3 = await greet3("await3");
    console.log(message3);
  } catch (error) {
    console.error("Promise failed:", error);
  }
};

result();
