const inputFontSizeControlRef = document.querySelector("#font-size-control");

const textRef = document.querySelector("#text");

inputFontSizeControlRef.addEventListener("input", chengeFont);

function chengeFont(event) {
  textRef.style.fontSize = Number(event.target.value) + "px";
}
