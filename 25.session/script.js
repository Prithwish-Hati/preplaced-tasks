// setTimeout(() => console.log(1));

// (async () => {
//   console.log(2);
//   await Promise.resolve();
//   console.log(3);
// })()

// Promise.resolve(() => Promise.resolve()).then(() => console.log(4));

// 2 3 1 4

const func1 = () => {
    return new Promise ((resolve, reject) => {reject('func1')})
}

const func2 = () => {
    return new Promise ((resolve, reject) => {reject('func2')})
}

const func3 = () => {
    return new Promise ((resolve, reject) => {reject('func3')})
}

Promise.any([func1(), func2(), func3()]).then((res) => console.log(res)).catch((err) => console.log(err))