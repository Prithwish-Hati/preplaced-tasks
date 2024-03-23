// Styling Rainbow
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const rainbow = document.querySelectorAll("h1 > span");

for (let i = 0; i < colors.length; i++) {
  rainbow[i].style.color = colors[i];
}

// Adding 100 buttons
const container = document.querySelector(".container");

for (let i = 0; i < 100; i++) {
  const btn = document.createElement("button");
  btn.innerText = "click Sonu";
  container.appendChild(btn);
}

// Adding Pokemon images dynamically
const pokemonContainer = document.querySelector("#pokemonContainer");

for (i = 1; i < 100; i++) {
  const img = document.createElement("img");
  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png`;
  pokemonContainer.appendChild(img);
}
