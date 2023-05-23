// Implement basic arithmetic functions
const add = (num1, num2) => (num1 + num2);
const subtract = (num1, num2) => (num1 - num2);
const multiply = (num1, num2) => (num1 * num2);
const divide = (num1, num2) => (num1 / num2);

let operand1 = 0;
let operand2 = 0;
let operator = null;

const operate = (operator, num1, num2) => {
  const result = 0;
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
display.addEventListener("change", function() {
  console.log(this.value);
});


const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
  display.value = "";
})

const digits = document.querySelectorAll(".digit");
for (let digit of digits) {
  digit.addEventListener("click", function() {
    display.value += this.innerText;
  })
}

const operators = document.querySelectorAll(".operator");
for (let operator of operators) {
  operator.addEventListener("click", function() {
    display.value += " " + this.innerText + " ";
  });
}
