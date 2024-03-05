const addBtn = document.getElementById("subBtn");
const list = document.querySelector("myList");
const field = document.getElementById("input1");
const field2 = document.getElementById("input2");
const field3 = document.getElementById("input3");
const divList = document.getElementById("divList");
const filtrBtn = document.querySelector(".filter-btn");
const filter_input = document.querySelector(".input2");
const resetBtn = document.querySelector(".reset-btn");

filtrBtn.disabled = true;
resetBtn.disabled = true;
const [CHANGE_COLOR, ENTER_INPUTS, CELL] = ["changeColor", "enterInputs", "cell"];
const [CLICK, KEYPRESS, ENTER] = ["click", "keypress", "Enter"];
const [LI, DIV] = ["li", "div"];
const EMPTY_STRING = "";
const globalArr = [];
let enterValues = [];
let combinedObj = {};
const url = "http://localhost:3000/api/verbs";
const fields = [field, field2, field3];
const checkEmpty = (element) => element.value === EMPTY_STRING;
const checkLength = (element) => element.length === 0;

async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  globalArr.push(...data.verbs);
  reset();
  console.log(globalArr);
}

function entry() {
  if (fields.some(checkEmpty)) {
    fields.forEach(chooseClass);
  } else {
    let combinedObj = {
      verb: field.value,
      sp: field2.value,
      pp: field3.value,
    };
    console.log(combinedObj);
    fields.forEach(resetField);

    enterValues.push(field.value);
    li2 = document.createElement(LI);
    divList.appendChild(li2);
    globalArr.push(combinedObj);
    createVerb(combinedObj);
    divList.innerHTML = globalArr.map(mapDivs).join(EMPTY_STRING);
    filtrBtn.disabled = false;
    resetBtn.disabled = false;
  }
}

function createVerb(data) {
  console.log(data);
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  });
}
function mapDivs(inputObj) {
  const { verb, sp, pp } = inputObj;
  return [verb, sp, pp].map(prepairDiv).join(EMPTY_STRING);
}

function resetField(field) {
  field.value = EMPTY_STRING;
  field.classList.remove(CHANGE_COLOR);
}

function prepairDiv(inputValue) {
  const newDiv = document.createElement(DIV);
  newDiv.textContent = inputValue;
  newDiv.classList.add(CELL);
  return newDiv.outerHTML;
}
function chooseClass(element) {
  element.className = element.value !== EMPTY_STRING ? ENTER_INPUTS : CHANGE_COLOR;
}
function createLi(element) {
  const newLi = document.createElement(LI);
  newLi.innerHTML = element;
  return newLi.outerHTML;
}

function equalToDiv(element) {
  const result =
    element.verb.includes(filter_input.value) ||
    element.sp.includes(filter_input.value) ||
    element.pp.includes(filter_input.value);
  console.log(result);
  return result;
}
function filtrInputs() {
  if (globalArr.every(checkLength)) {
  } else {
    const even = globalArr.filter(equalToDiv);
    console.log(even);
    divList.innerHTML = even.map(mapDivs).join(EMPTY_STRING);
  }
}
function reset() {
  if (globalArr.every(checkLength)) {
  } else {
    divList.innerHTML = globalArr.map(mapDivs).join(EMPTY_STRING);
    filter_input.value = EMPTY_STRING;
  }
}

addBtn.addEventListener(CLICK, entry);
fields.forEach((field) => {
  field.addEventListener(KEYPRESS, function (event) {
    if (event.key === ENTER) {
      entry();
    }
  });
});

filtrBtn.addEventListener(CLICK, filtrInputs);
resetBtn.addEventListener(CLICK, reset);
getData();
