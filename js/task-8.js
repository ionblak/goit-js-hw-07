const buttonRenderRef = document.querySelector('button[data-action="render"]');
const buttonDestroyRef = document.querySelector(
  'button[data-action="destroy"]'
);
const inputRef = document.querySelector('input[type="number"]');
const boxesRef = document.querySelector("#boxes");

buttonRenderRef.addEventListener("click", createBoxes);
buttonDestroyRef.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = Number(inputRef.value);
  let size = 20;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    boxesRef.appendChild(box);
    box.style.backgroundColor = getRandColor();
    size += 10;
    box.style.width = size + "px";
    box.style.height = size + "px";
  }
}

function destroyBoxes() {
  inputRef.value = "";
  while (boxesRef.firstChild) {
    boxesRef.firstChild.remove();
  }
}

function getRandColor() {
  var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
  while (color.length < 6) {
    color = "0" + color;
  }
  return "#" + color;
}
