// Implement basic arithmetic functions
const add = (num1, num2) => (num1 + num2);
const subtract = (num1, num2) => (num1 - num2);
const multiply = (num1, num2) => (num1 * num2);
const divide = (num1, num2) => (num1 / num2);

let operand1 = 0;
let operand2 = 0;
let operator = 0;

const operate = (operator, num1, num2) => {
  let result = 0;
  switch (operator) {
    case 'subtract':
      result = subtract(num1, num2);
      break;
    case 'add':
      result = add(num1, num2);
      break;
    case 'multiply':
      result = multiply(num1, num2);
      break;
    case 'divide':
      result = divide(num1, num2);
      break;
  }
  return result;
};

let displayValue = "";
const display = document.querySelector(".display");

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
  displayValue = "";
  display.value = "";
})

const digits = document.querySelectorAll(".digit");
for (let digit of digits) {
  digit.addEventListener("click", function() {
    displayValue += this.value;
    display.value += this.innerText;
  })
}

const operators = document.querySelectorAll(".operator");
for (let operator of operators) {
  operator.addEventListener("click", function() {
    displayValue += " " + this.value + " ";
    display.value += " " + this.innerText + " ";
  });
}

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", () => {
  let orderOfOperations = displayValue.split(" ");
  let tempResult = 0;

  while (orderOfOperations.length != 1) {
    let currentCalcArray = orderOfOperations.slice(0,3);
    operand1 = parseInt(currentCalcArray[0]);
    operand2 = parseInt(currentCalcArray[2]);
    operator = currentCalcArray[1];
    tempResult = operate(operator, operand1, operand2);
    orderOfOperations.splice(0, 3, tempResult);
    console.log(orderOfOperations);
    display.value = tempResult;
  }
})
