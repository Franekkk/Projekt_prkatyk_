const addBtn = document.getElementById("subBtn");
const list = document.querySelector("myList");
const field = document.getElementById("input1");
const EditBtn = document.querySelector(".FIL");
const field2 = document.querySelector(".input2");

let arrayValue = [];
let enters = [];
let edited;
const olElement = document.getElementById("ListIdenti");

function entry() {
  if (field.value === "") {
    alert("pole musi byc wypelnione");
    field.value = "";
  } else {
    arrayValue.push(field.value);
    enters.push(field.value);
    li2 = document.createElement("li");
    li2.innerHTML = arrayValue;
    document.getElementById("ListIdenti").appendChild(li2);
    field.value = "";
    arrayValue.pop(field.value);
  }
}

function edit() {
  if (field2.value === "") {
    EditBtn.disabled = true;
  } else {
    EditBtn.disabled = false;
    let edited = enters.filter((enter) => enter === field2.value);
    console.log(edited);
    while (arrayValue.length !== 0) {
      arrayValue.pop();
    }
    console.log(arrayValue);
    if (arrayValue.length === 0) {
      while (olElement.firstChild) {
        olElement.removeChild(olElement.firstChild);
      }
      for (let i = 0; i < edited.length; i++) {
        li2 = document.createElement("li");
        li2.innerHTML = edited[i];
        document.getElementById("ListIdenti").appendChild(li2);
      }
    }
  }
}

addBtn.addEventListener("click", entry);
field.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    entry();
  }
});
EditBtn.addEventListener("click", edit);
