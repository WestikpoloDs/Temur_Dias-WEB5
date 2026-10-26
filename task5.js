const mouseBox = document.getElementById("mouseBox");
const originalColor = "lightblue";

mouseBox.addEventListener("mouseover", function () {
  mouseBox.style.backgroundColor = "orange";
});

mouseBox.addEventListener("mouseout", function () {
  mouseBox.style.backgroundColor = originalColor;
});
