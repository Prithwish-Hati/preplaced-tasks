const btn = document.querySelector(".increment_btn");
const pressed = document.querySelector(".pressed");
const triggered = document.querySelector(".triggered");
const throttled = document.querySelector(".throttled");

let pressedCount = 0;
let triggeredCount = 0;
let throttledCount = 0;

const debounceFunc = _.debounce(() => {
  triggered.innerHTML = ++triggeredCount;
}, 800);

const throttleFunc = _.throttle(() => {
  throttled.innerHTML = ++throttledCount;
}, 800);

btn.addEventListener("click", () => {
  pressed.innerHTML = ++pressedCount;
  console.log(pressedCount);
  debounceFunc();
  throttleFunc();
});
