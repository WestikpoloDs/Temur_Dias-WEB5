const list = document.getElementById("list");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

addBtn.addEventListener("click", function () {
  const li = document.createElement("li");
  li.textContent = "Item " + (list.children.length + 1);
  list.appendChild(li);
});

removeBtn.addEventListener("click", function () {
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
});
