const box = document.getElementById("styleBox");
const colorBtn = document.getElementById("colorBtn");
const fontBtn = document.getElementById("fontBtn");

colorBtn.addEventListener("click", function () {
  box.style.backgroundColor = "lightgreen";
});

fontBtn.addEventListener("click", function () {
  box.style.fontSize = "30px";
});
