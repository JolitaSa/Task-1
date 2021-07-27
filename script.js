/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const userInput = document.getElementById("search");
const outputDiv = document.getElementById("output");

document
  .querySelector("form")
  .addEventListener("submit", calculateAndDispayResult);

function calculateAndDispayResult(e) {
  e.preventDefault();
  const inputValue = userInput.value;
  try {
    const resultArr = calculateResults(inputValue);
    displayResults(resultArr);
  } catch (e) {
    alert(e);
  }
}

function calculateResults(inputValue) {
  if (!inputValue || isNaN(inputValue)) {
    throw Error("incorrect value");
  } else {
    const inLb = convertToLb(inputValue);
    const inG = convertToG(inputValue);
    const inOz = convertToOz(inputValue);
    return new Array(inLb, inG, inOz);
  }
}

function convertToLb(inputValue) {
  return `In lb: ${(inputValue * 2.2046).toFixed(1)}`;
}

function convertToG(inputValue) {
  return `In g: ${(inputValue / 0.001).toFixed(1)}`;
}

function convertToOz(inputValue) {
  return `In oz: ${(inputValue * 35.274).toFixed(1)}`;
}

function displayResults(resultArr) {
  deleteAllChildElements(outputDiv);
  const ul = document.createElement("ul");
  resultArr.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element;
    li.className = "headline";
    ul.appendChild(li);
  });
  outputDiv.appendChild(ul);
}

function deleteAllChildElements(parent) {
  while (parent.lastElementChild) {
    parent.removeChild(parent.lastElementChild);
  }
}
