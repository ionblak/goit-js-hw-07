const inputNameRef = document.querySelector("#name-input");
const nameInSpan = document.querySelector("#name-output");
const stranger = "незнакомец";

inputNameRef.addEventListener("input", changeNameInSpan);

function changeNameInSpan(event) {
  if (event.target.value !== "") {
    nameInSpan.textContent = event.target.value;
  } else {
    nameInSpan.textContent = stranger;
  }
}
