const inputFontSizeControlRef = document.querySelector("#font-size-control");

const textRef = document.querySelector("#text");

inputFontSizeControlRef.addEventListener("input", chengeFont);

function chengeFont() {
  return textRef.setAttribute(
    "style",
    `font-size:${inputFontSizeControlRef.value}px`
  );
}
