// display
let displayNumber = document.getElementById("display");

// get button
let button = document.getElementById("button");

let sum = 0;

button.addEventListener("click", () => {
  let inputOne = document.getElementById("input1").value;
  let inputTwo = document.getElementById("input2").value;
  let operator = document.getElementById("operator").value;

  let number1 = parseFloat(inputOne);
  let number2 = parseFloat(inputTwo);

  switch (operator) {
    case "+":
      sum = number1 + number2;
      break;
    case "-":
      sum = number1 - number2;
      break;
    case "*":
      sum = number1 * number2;
      break;
    case "/":
      sum = number1 / number2;
      break;
    case "%":
      sum = number1 % number2;
      break;
  }
  let fixValue = sum.toFixed(2);
  displayNumber.innerText = fixValue;
});
