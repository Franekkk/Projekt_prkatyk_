const addBtn = document.getElementById("subBtn");
const list = document.querySelector("myList");
const field = document.getElementById("input1");

let arrayValue = [];

function entry() {
  if (field.value === "") {
    alert("pole musi byc wypelnione");
    field.value = "";
  } else {
    arrayValue.push(field.value);
    li2 = document.createElement("li");
    li2.innerHTML = arrayValue;
    document.getElementById("ListIdenti").appendChild(li2);
    field.value = "";
    arrayValue.pop(field.value);
  }
}

addBtn.addEventListener("click", entry);
field.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    entry();
  }
});
