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
    box.style.backgroundColor = get_rand_color();
    size += 10;
    box.style.width = size + "px";
    box.style.height = size + "px";
  }
}

function destroyBoxes() {
  while (boxesRef.firstChild) {
    boxesRef.firstChild.remove();
    //   boxesRef.removeChild(boxesRef.firstChild);
  }
}

function get_rand_color() {
  var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
  while (color.length < 6) {
    color = "0" + color;
  }
  return "#" + color;
}
