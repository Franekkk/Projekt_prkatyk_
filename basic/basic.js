const addBtn = document.getElementById("subBtn");
const list = document.querySelector("myList");
const field = document.getElementById("input1");
const field2 = document.getElementById("input2");
const field3 = document.getElementById("input3");
const divList = document.getElementById("divList");
const filtrBtn = document.querySelector(".filter-btn");
const filter_input = document.querySelector(".input2");

const [CHANGE_COLOR, ENTER_INPUTS, CELL] = ["changeColor", "enterInputs", "cell"];
const [CLICK, KEYPRESS, ENTER] = ["click", "keypress", "Enter"];
const [LI, DIV] = ["li", "div"];
const EMPTY_STRING = "";
const inputArr = [];
let enterValues = [];
const fields = [field, field2, field3];
const checkEmpty = (element) => element.value === EMPTY_STRING;

function entry() {
  if (fields.some(checkEmpty)) {
    fields.forEach(chooseClass);
  } else {
    const combinedObj = {
      verb: field.value,
      sp: field2.value,
      pp: field3.value,
    };
    fields.forEach(resetField);

    enterValues.push(field.value);
    li2 = document.createElement(LI);
    divList.appendChild(li2);
    inputArr.push(combinedObj);

    divList.innerHTML = inputArr.map(mapDivs).join(EMPTY_STRING);
  }
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
function filtrInputs() {
  if (filter_input.value === EMPTY_STRING) {
    filtrBtn.disabled = true;
  } else {
    filtrBtn.disabled = false;

    const createArr = enterValues
      .filter((enterValue) => enterValue === filter_input.value)
      .map(createLi)
      .join(EMPTY_STRING);

    divList.innerHTML = createArr;
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
