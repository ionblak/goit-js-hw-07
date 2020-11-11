const inputNameRef = document.querySelector("#name-input");
const nameInSpan = document.querySelector("#name-output");
const stranger = "незнакомец";

inputNameRef.addEventListener("input", changeNameInSpan);

function changeNameInSpan(event) {
  if (event.target.value !== "") {
    nameInSpan.textContent = event.target.value
      .replace(/^\s*/, "")
      .replace(/\s*$/, "");
    // Убрал пробелы только так если знаете лучше способ можете подсказать!!!!
  } else {
    nameInSpan.textContent = stranger;
  }
}
