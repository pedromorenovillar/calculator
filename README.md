# Calculator

A simple web-based calculator built with vanilla HTML, CSS, and JavaScript.

![Calculator](img/screenshot.png)

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division
- Clear button to reset the calculator
- Display shows the current input and operation in progress
- Prevents consecutive operator presses from evaluating prematurely
- Division by zero protection
- Responsive button layout with hover and active states

## How to Use

1. Enter a number by clicking the number buttons (0–9)
2. Select an operator (+, −, ×, ÷)
3. Enter a second number
4. Press the equals button (=) or an operator button to see the result
5. Press CLEAR to reset and start over

## Technical Details

- Handles floating-point arithmetic with rounding to 2 decimal places
- Uses event listeners on all buttons with a switch statement for action routing
- Stores first number, second number, and operator in separate variables
- Equal button only evaluates when both numbers and an operator are present

## Future features
- Truncate result display to avoid overflows with big numbers
- Implement extra, backspace (⌦), and ±  buttons, which are currently disabled
- Add keyboard support

