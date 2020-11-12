const inputNameRef = document.querySelector("#name-input");
const nameInSpan = document.querySelector("#name-output");
const stranger = "незнакомец";

inputNameRef.addEventListener("input", changeNameInSpan);

function changeNameInSpan() {
  let name = inputNameRef.value.trim();
  nameInSpan.textContent = name.length > 0 ? name : stranger;
}
