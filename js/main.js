// Get the display elements
const resultInput = document.getElementById("result-input");
const resultOutput = document.getElementById("result-output");

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let value;
    if (button.classList.contains("number-button")) {
      value = button.textContent;
    } else if (button.classList.contains("button-add")) {
      value = "+";
    } else if (button.classList.contains("button-sub")) {
      value = "-";
    } else if (button.classList.contains("button-mul")) {
      value = "×";
    } else if (button.classList.contains("button-division")) {
      value = "÷";
    } else if (button.classList.contains("button-equal")) {
      value = "=";
    } else if (button.classList.contains("button-c")) {
      value = "C";
    } else if (button.classList.contains("button-del")) {
      value = "Del";
    } else if (button.classList.contains("button-percent")) {
      value = "%";
    }
    // console.log(value);

    if (value === "C") {
      resultInput.textContent = "";
      resultOutput.textContent = "0";
      return;
    } else if (value === "Del") {
      resultInput.textContent = resultInput.textContent.slice(0, -1);
      return;
    }

    if (value === "%") {
      let input = resultInput.textContent;
      console.log(input);

      let match = input.match(/(\d+\.?\d*)$/);

      console.log(match);

      if (match) {
        let num = match[0];
        let percent = num / 100;

        console.log(input.slice(0, -num.length) + percent);
        resultInput.textContent = input.slice(0, -num.length) + percent;
      } else {
        alert("cant do percentage to a operator");
      }

      return;
    }

    if (value === "=") {
      const input = resultInput.textContent;
      const numbers = input.split(/[\+\-×÷]/).map(Number);
      const operators = input.match(/[\+\-×÷]/g);
      console.log(input);
      console.log("numbers:", numbers, "operators:", operators);

      let result = numbers[0];

      for (let i = 0; i < operators.length; i++) {
        const op = operators[i];
        const num = numbers[i + 1];

        if (op === "+") {
          result = result + num;
        } else if (op === "-") {
          result = result - num;
        } else if (op === "×") {
          result = result * num;
        } else if (op === "÷") {
          result /= num;
        }
      }
      resultOutput.textContent = result;
      return;
    }
    resultInput.textContent = resultInput.textContent + value;
  });
});
