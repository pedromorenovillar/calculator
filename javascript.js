// DOM elements
const result = document.querySelector(".result");
const buttons = document.querySelectorAll("button");
const equal = document.querySelector(".equal")
const numbers = document.querySelectorAll(".number");
const back = document.querySelector(".back")
const extra = document.querySelector(".extra")
const dot = document.querySelector(".dot")
const plusMinus = document.querySelector(".plus-minus")


// Variables
let firstNumber = "";
let secondNumber = "";
let operator = "";
let isOperationReady = false;

// Button event listener with switch statement
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.className) {
      case "clear":
        clearResult();
        break;
      case "add":
        if (secondNumber !== "") {
          firstNumber = operate(firstNumber, secondNumber, operator);
          operator = "+"
        } else {
          operator = "+";
        }
        break;
      case "subtract":
        if (secondNumber !== "") {
          firstNumber = operate(firstNumber, secondNumber, operator);
          operator = "-";
        } else {
          operator = "-";
        }
        break;
      case "multiply":
        if (secondNumber !== "") {
          firstNumber = operate(firstNumber, secondNumber, operator);
          operator = "*";
        } else {
          operator = "*";
        }
        break;
      case "divide":
        if (secondNumber !== "") {
          firstNumber = operate(firstNumber, secondNumber, operator);
          operator = "/";
        } else {
          operator = "/";
        }
        break;
      case "equal":
        if (operator !== "" && secondNumber !== "") {
          firstNumber = operate(firstNumber, secondNumber, operator);
        }
        break;

      default:
        if (operator === "") {
          if (isOperationReady) {
            firstNumber = "";
            isOperationReady = false
          }
          firstNumber += button.innerText;
          result.textContent = firstNumber;
          equal.disabled = true
        } else {
          secondNumber += button.innerText;
          result.textContent = `${firstNumber} ${operator} ${secondNumber}`;
          equal.disabled = false
        }
        break;
    }
  });
});

// Disable back, extra, point and +- buttons
const disabledBtns = [back, extra, dot, plusMinus]
disabledBtns.forEach((button) => {
  button.disabled = true
  button.classList = "disabledBtn"
})

// Function switchboard
function operate(a, b, operator) {
  isOperationReady = true
  a = parseInt(firstNumber);
  b = parseInt(secondNumber);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);

    default:
      break;
  }
}

// Mathematical functions
function add(a, b) {
  let addResult = Math.round((a + b) * 100) / 100;
  result.textContent = addResult;
  resetValues();
  return addResult;
}
function subtract(a, b) {
  let subtractResult = Math.round((a - b) * 100) / 100;;
  result.textContent = subtractResult;
  resetValues();
  return subtractResult;
}
function multiply(a, b) {
  let multiplyResult = Math.round(a * b * 100) / 100;
  result.textContent = multiplyResult;
  resetValues();
  return multiplyResult;
}
function divide(a, b) {
  if (b == 0) {
    result.textContent = "Cannot divide by 0!";
    resetValues();
  } else {
    let divideResult = Math.round(a / b * 100) / 100;
    result.textContent = divideResult;
    resetValues();
    return divideResult;
  }
}


// Helper functions
function resetValues() {
  secondNumber = "";
  operator = "";
}

function clearResult() {
  result.textContent = 0;
  firstNumber = ""
  resetValues();
}

function truncate(number) {
  console.log(number.length);
  
  return number
}