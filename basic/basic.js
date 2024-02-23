const addBtn = document.getElementById("subBtn");
const list = document.querySelector("myList");
const field = document.getElementById("input1");
const field2 = document.getElementById("input2");
const field3 = document.getElementById("input3");
const divList = document.getElementById("divList");
const editBtn = document.querySelector(".filter-btn");
const filter_input = document.querySelector(".input2");

const inputArr = [];

let enterValues = [];
let edited;
const fields = [field, field2, field3];

function entry() {
  if (field.value === "" || field2.value === "" || field3.value === "") {
    if (field.value === "") {
      field.className = "changeColor";
    }
    if (field2.value === "") {
      field2.className = "changeColor";
    }
    if (field3.value === "") {
      field3.className = "changeColor";
    }
  } else {
    const combinedObj = {
      verb: field.value,
      sp: field2.value,
      pp: field3.value,
    };
    fields.forEach(resetField);

    enterValues.push(field.value);
    li2 = document.createElement("li");
    divList.appendChild(li2);
    inputArr.push(combinedObj);

    const mappedInputs = inputArr.map(mapDivs);
    divList.innerHTML = mappedInputs.join("");
  }
}

function mapDivs(inputObj) {
  const { verb, sp, pp } = inputObj;
  return [verb, sp, pp].map(prepairDiv).join("");
}

function resetField(field) {
  field.value = "";
  field.classList.remove("changeColor");
}

function prepairDiv(inputValue) {
  const newDiv = document.createElement("div");
  newDiv.textContent = inputValue;
  newDiv.classList.add("gridBtn");
  return newDiv.outerHTML;
}

function edit() {
  if (filter_input.value === "") {
    editBtn.disabled = true;
  } else {
    editBtn.disabled = false;
    const filtered = enterValues.filter(
      (enterValue) => enterValue === filter_input.value
    );
    const createArr = filtered.map((item) => {
      const newLi = document.createElement("li");
      newLi.innerHTML = item;
      return newLi.outerHTML;
    });

    divList.innerHTML = createArr.join("");
  }
}

addBtn.addEventListener("click", entry);
field.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    entry();
  }
});
editBtn.addEventListener("click", edit);
