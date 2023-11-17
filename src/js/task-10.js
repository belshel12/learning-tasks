function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector("#controls input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", onCreate);
destroyBtn.addEventListener("click", onDestroy);

function onCreate() {
  const number = Number(inputNumber.value);
  createBoxes(number);
}

function onDestroy() {
  boxes.innerHTML = "";
}

function createBoxes(amount) {
  let markup = [];
  let boxSize = 30;

  for (let i = 0; i < amount; i += 1) {
    let div = `<div style="background-color: ${getRandomHexColor()}; width: ${boxSize}px; height: ${boxSize}px"></div>`;
    boxSize += 10;
    markup[i] = div;
  }

  return (boxes.innerHTML = markup.join(""));
}
