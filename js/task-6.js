const inputRef = document.querySelector("#validation-input");
const inputMinLength = inputRef.dataset.length;

function checksLengthValue(event) {
  if (event.target.value.length >= inputMinLength) {
    inputRef.classList.remove("invalid");
    inputRef.classList.toggle("valid");
  } else {
    inputRef.classList.add("invalid");
  }
}

function clearInput() {
  inputRef.value = "";
  inputRef.classList.remove("valid", "invalid");
}

inputRef.addEventListener("blur", checksLengthValue);
inputRef.addEventListener("click", clearInput);
