const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

// Event Bubbling

div.addEventListener("click", () => {
  alert("div is clicked");
}, {capture: true});

form.addEventListener("click", () => {
  alert("form is clicked");
}, {capture: true});

button.addEventListener("click", () => {
  alert("button is clicked");
}, {capture: true});

// currentTarget, target, this

// function myFunc(event) {
//   alert(
//     "currentTarget = " +
//       event.currentTarget.tagName +
//       ", target = " +
//       event.target.tagName +
//       ", this =" +
//       this.tagName
//   );
// }

// form.addEventListener("click", myFunc);
// div.addEventListener("click", myFunc);
// button.addEventListener("click", myFunc);

// Event capturing

// div.addEventListener(
//   "click",
//   () => {
//     alert("div is clicked");
//   },
//   {
//     capture: true,
//   }
// );

// form.addEventListener(
//   "click",
//   () => {
//     alert("form is clicked");
//   },
//   {
//     capture: true,
//   }
// );

// button.addEventListener(
//   "click",
//   () => {
//     alert("button is clicked");
//   },
//   {
//     capture: true,
//   }
// );

// STOP BUBBLING AND CAPTURING
// div.addEventListener("click", (e) => {
//   alert("Div is clicked");
//   e.stopPropagation();
// });

// form.addEventListener("click", (e) => {
//   alert("form is clicked");
//   e.stopPropagation();
// });

// button.addEventListener("click", (e) => {
//   alert("button is clicked");
//   e.stopPropagation();
// });

// Event delegation
document.querySelector(".products").addEventListener("click", (event) => {
  console.log(event.target.closest("SPAN").tagName);

  if (event.target.tagName === "SPAN") {
    window.location.href += event.target.className;
  }
});

// when we click on the button Form event should be executed first, then button then div
// div.addEventListener("click", () => {
//   alert("Div is clicked");
// });
// form.addEventListener(
//   "click",
//   () => {
//     alert("form is clicked");
//   },
//   {
//     capture: true,
//   }
// );
// button.addEventListener("click", () => {
//   alert("button is clicked");
// });

// Create a modal which closes by clicking on the negative space

