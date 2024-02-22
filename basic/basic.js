const addBtn = document.getElementById("subBtn");
const list = document.querySelector("myList");
const field = document.getElementById("input1");
const field2 = document.getElementById("input2");
const field3 = document.getElementById("input3");
const divList = document.getElementById("divList");
const editBtn = document.querySelector(".filter-btn");
const filter_input = document.querySelector(".input2");

const inputArr = [];
let arrayValue = [];
let enterValues = [];
let edited;
const olElement = document.getElementById("ListIdenti");

function entry() {
  if (field.value === "" || field2.value === "" || field3.value === "") {
    // alert("pole musi byc wypelnione");

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
    resetField(field2);
    resetField(field3);
    resetField(field);
    arrayValue.push(field.value);
    enterValues.push(field.value);
    li2 = document.createElement("li");
    li2.innerHTML = arrayValue;
    olElement.appendChild(li2);
    inputArr.push(combinedObj);
    console.log(combinedObj);
    const mappedInputs = inputArr.map((inputObj) => {
      const newDiv = document.createElement("div");
      newDiv.textContent = inputObj.verb;
      console.log("newDiv", newDiv);
      newDiv.classList.add("gridBtn");
      const newDiv2 = document.createElement("div");
      newDiv2.textContent = inputObj.sp;
      newDiv2.classList.add("gridBtn");
      const newDiv3 = document.createElement("div");
      newDiv3.textContent = inputObj.pp;
      newDiv3.classList.add("gridBtn");
      return `${newDiv.outerHTML}${newDiv2.outerHTML}${newDiv3.outerHTML}`;
    });
    divList.innerHTML = mappedInputs.join("");
    console.log("zmapowana", mappedInputs);
    arrayValue.pop(field.value);
  }
}
function resetField(field) {
  field.value = "";
  field.classList.remove("changeColor");
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
