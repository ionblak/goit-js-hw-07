const inputRef = document.querySelector("#validation-input");
const inputMinLength = Number(inputRef.dataset.length);

function checksLengthValue(event) {
  if (event.target.value.length >= inputMinLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}

inputRef.addEventListener("blur", checksLengthValue);
