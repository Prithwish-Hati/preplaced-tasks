const colorPickerBtn = document.querySelector("#color-picker");
const heading = document.querySelector("h1");

colorPickerBtn.addEventListener("click", () => {
  const ranNum1 = Math.floor(Math.random() * 255);
  const ranNum2 = Math.floor(Math.random() * 255);
  const ranNum3 = Math.floor(Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${ranNum1}, ${ranNum2}, ${ranNum3} )`;
  heading.innerText = `rgb(${ranNum1}, ${ranNum2}, ${ranNum3} )`;
});

const lobBtns = document.querySelectorAll(".lob");
// console.log(lobBtns)

for (i = 0; i < lobBtns.length; i++) {
    lobBtns[i].addEventListener("click", function () {
    const ranNum1 = Math.floor(Math.random() * 255);
    const ranNum2 = Math.floor(Math.random() * 255);
    const ranNum3 = Math.floor(Math.random() * 255);
    this.style.backgroundColor = `rgb(${ranNum1}, ${ranNum2}, ${ranNum3} )`;
  }, {once: true});
}
