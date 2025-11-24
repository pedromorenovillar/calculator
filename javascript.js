// DOM elements
const result = document.querySelector(".result")
const buttons = document.querySelectorAll("button")

// Variables
let firstNumber = ""
let secondNumber = ""
let operator = ""
let operatorCount = 0

// Button event listener with switch statement
buttons.forEach((button) => {
  button.addEventListener("click", ()=> {
    switch (button.className) {
      case "clear":
        clearResult()
        break;
      case "add":
        operator = "+"
        operatorCount++
        break;
      case "subtract":
        operator = "-"
        operatorCount++
        break;
      case "multiply":
        operator = "x"
        operatorCount++
        break;
      case "divide":
        operator = "/"
        operatorCount++
        break;
      case "equal":
        a = parseInt(firstNumber)
        b = parseInt(secondNumber)
        result.textContent = operate(a, b, operator)
        break;
    
      default:
        if(operatorCount === 0) {
          firstNumber += button.innerText
          result.textContent = firstNumber
        } else if (operatorCount === 1) {
          secondNumber += button.innerText
          result.textContent = `${firstNumber} ${operator} ${secondNumber}`
        } else {
          // a = parseInt(firstNumber)
          // b = parseInt(secondNumber)
          // let newFirstNumber = operate(a, b, operator)
          // firstNumber = newFirstNumber
          // result.textContent = firstNumber
        }
        break;
    }
    
  })
})
// Function switchboard
function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b)
    case "-":
      return subtract(a, b)
    case "x":
      return multiply(a, b)
    case "/":
      return divide(a, b)
  
    default:
      break;
  }
}


// Mathematical functions

function clearResult() {
  result.textContent = 0
}

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}