var rangeInput = document.getElementById("font-size-control");
var textElement = document.getElementById("text");

rangeInput.addEventListener("input", function() {
  var fontSize = rangeInput.value + "px";
  textElement.style.fontSize = fontSize;
});