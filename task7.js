const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function calculate(operation) {
  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);
  let res;

  if (operation === "+") res = a + b;
  if (operation === "-") res = a - b;
  if (operation === "*") res = a * b;
  if (operation === "/") res = a / b;

  result.textContent = res;
}

document.getElementById("addOp").addEventListener("click", function () { calculate("+"); });
document.getElementById("subOp").addEventListener("click", function () { calculate("-"); });
document.getElementById("mulOp").addEventListener("click", function () { calculate("*"); });
document.getElementById("divOp").addEventListener("click", function () { calculate("/"); });
