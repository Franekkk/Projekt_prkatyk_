// const addBtn = document.getElementById("subBtn");
// const list = document.querySelector("myList");
// const field = document.getElementById("input1");
// const field2 = document.getElementById("input2");
// const field3 = document.getElementById("input3");
// const divList = document.getElementById("divList");
// const editBtn = document.querySelector(".filter-btn");
// const filter_input = document.querySelector(".input2");

// const inputArr = [];

// let enterValues = [];
// let edited;
// const fields = [field, field2, field3];

// function entry() {
//   if (field.value === "" || field2.value === "" || field3.value === "") {
//     if (field.value === "") {
//       field.className = "changeColor";
//     }
//     if (field2.value === "") {
//       field2.className = "changeColor";
//     }
//     if (field3.value === "") {
//       field3.className = "changeColor";
//     }
//   } else {
//     const combinedObj = {
//       verb: field.value,
//       sp: field2.value,
//       pp: field3.value,
//     };
//     fields.forEach(resetField);

//     enterValues.push(field.value);
//     li2 = document.createElement("li");
//     divList.appendChild(li2);
//     inputArr.push(combinedObj);

//     const mappedInputs = inputArr.map(mapDivs);
//     divList.innerHTML = mappedInputs.join("");
//   }
// }

// function mapDivs(inputObj) {
//   const { verb, sp, pp } = inputObj;
//   return [verb, sp, pp].map(prepairDiv).join("");
// }

// function resetField(field) {
//   field.value = "";
//   field.classList.remove("changeColor");
// }

// function prepairDiv(inputValue) {
//   const newDiv = document.createElement("div");
//   newDiv.textContent = inputValue;
//   newDiv.classList.add("gridBtn");
//   return newDiv.outerHTML;
// }

// function edit() {
//   if (filter_input.value === "") {
//     editBtn.disabled = true;
//   } else {
//     editBtn.disabled = false;
//     const filtered = enterValues.filter(
//       (enterValue) => enterValue === filter_input.value
//     );
//     const createArr = filtered.map((item) => {
//       const newLi = document.createElement("li");
//       newLi.innerHTML = item;
//       return newLi.outerHTML;
//     });

//     divList.innerHTML = createArr.join("");
//   }
// }

// addBtn.addEventListener("click", entry);
// field.addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     entry();
//   }
// });
// editBtn.addEventListener("click", edit);

// function genresList() {
//   var movieLists = [
//       {
//         name: "New Releases",
//         videos: [
//           {
//             id: 70111470,
//             title: "Die Hard",
//             boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//             uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//             rating: 4.0,
//             bookmark: [],
//           },
//           {
//             id: 654356453,
//             title: "Bad Boys",
//             boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//             uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//             rating: 5.0,
//             bookmark: [{ id: 432534, time: 65876586 }],
//           },
//         ],
//       },
//       {
//         name: "Dramas",
//         videos: [
//           {
//             id: 65432445,
//             title: "The Chamber",
//             boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//             uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//             rating: 4.0,
//             bookmark: [],
//           },
//           {
//             id: 675465,
//             title: "Fracture",
//             boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//             uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//             rating: 5.0,
//             bookmark: [{ id: 432534, time: 65876586 }],
//           },
//         ],
//       },
//     ],
//     allVideoIdsInMovieLists = [];

// ------------   INSERT CODE HERE!  -----------------------------------
// Use two nested forEach loops to flatten the movieLists into a list of
// video ids.
// ------------   INSERT CODE HERE!  -----------------------------------

Array.prototype.concatAll = function () {
  var results = [];
  this.forEach(function (subArray) {
    // ------------ INSERT CODE HERE! ----------------------------
    // Add all the items in each subArray to the results array.
    // ------------ INSERT CODE HERE! ----------------------------
    if (Array.isArray(subArray)) {
      subArray.forEach((value) => {
        results.push(value);
      });
    } else {
      throw Error("byle co should be array");
    }
  });

  return results;
};

JSON.stringify(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ].concatAll()
) === "[1,2,3,4,5,6,7,8,9]";
//[(1, 2, 3)].concatAll(); // throws an error because this is a one-dimensional array
