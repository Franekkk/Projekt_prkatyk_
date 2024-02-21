const addBtn = document.getElementById("subBtn");
const list = document.querySelector("myList");
const field = document.getElementById("input1");
const editBtn = document.querySelector(".filter-btn");
const filter_input = document.querySelector(".input2");

let arrayValue = [];
let enterValues = [];
let edited;
const olElement = document.getElementById("ListIdenti");

function entry() {
  if (field.value === "") {
    alert("pole musi byc wypelnione");
    field.value = "";
  } else {
    arrayValue.push(field.value);
    enterValues.push(field.value);
    li2 = document.createElement("li");
    li2.innerHTML = arrayValue;
    olElement.appendChild(li2);
    field.value = "";
    arrayValue.pop(field.value);
  }
}

function edit() {
  if (filter_input.value === "") {
    editBtn.disabled = true;
  } else {
    editBtn.disabled = false;
    const filtered = enterValues.filter(
      (enterValue) => enterValue === filter_input.value
    );

    console.log(filtered);
    while (arrayValue.length !== 0) {
      arrayValue.pop();
    }
    console.log(arrayValue);

    const createArr = filtered.map((item) => {
      const newLi = document.createElement("li");
      newLi.innerHTML = item;
      return newLi.outerHTML;
    });

    olElement.innerHTML = createArr.join("");

    console.log(createArr);
  }
}

addBtn.addEventListener("click", entry);
field.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    entry();
  }
});
editBtn.addEventListener("click", edit);
