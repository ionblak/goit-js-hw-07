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
    size += 10;
    boxesRef.appendChild(box);
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = randColor();
  }
}

function destroyBoxes() {
  while (boxesRef.firstChild) {
    boxesRef.firstChild.remove();
    //   boxesRef.removeChild(boxesRef.firstChild);
  }
}

function randColor() {
  var r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}
