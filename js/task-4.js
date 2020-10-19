const valueRef = document.querySelector("#value");

const decrementButtonRef = document.querySelector(
  'button[data-action="decrement"]'
);

const incrementButtonRef = document.querySelector(
  'button[data-action ="increment"]'
);

let value = 0;

function decrement() {
  value -= 1;
  valueRef.textContent = value;
}
function increment() {
  value += 1;
  valueRef.textContent = value;
}

decrementButtonRef.addEventListener("click", decrement);
incrementButtonRef.addEventListener("click", increment);
