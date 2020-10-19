const inputFontSizeControlRef = document.querySelector("#font-size-control");

const textRef = document.querySelector("#text");

inputFontSizeControlRef.addEventListener("input", chengeFont);

function chengeFont(event) {
  const value = Number(event.target.value);
  textRef.style.fontSize = value + "px";
}
