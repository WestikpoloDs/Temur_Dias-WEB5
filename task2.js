const text = document.getElementById("text");
const changeTextBtn = document.getElementById("changeTextBtn");

changeTextBtn.addEventListener("click", function () {
  text.textContent = "The text has been changed!";
});
