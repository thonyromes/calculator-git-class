const NUMBERS = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];

window.addEventListener("DOMContentLoaded", () => {

  let displayValue = "";

  const display = window.document.querySelector("#calculator-display");

  const addNumber = (number) => {
    displayValue += number;
    display.value = displayValue;
  };

  const deleteNumber = () => {
    displayValue = displayValue.slice(0, -1);
    display.value = displayValue;
  };

  const clearDisplay = () => {
    displayValue = '';
    display.value = displayValue;
  };

  const deleteNumberExtra = () => {
    displayValue = displayValue.slice(0, -2);
    display.value = displayValue;
  };

  const deleteButtonElement = document.querySelector("#delete-button");

  deleteButtonElement.addEventListener("click", () => {
    deleteNumber();
  });

  const clearButtonElement = document.querySelector("#clear-button");

  clearButtonElement.addEventListener("click", () => {
    clearDisplay();
  });

  const deleteButtonExtraElement = document.querySelector("#delete-button-extra");

  deleteButtonExtraElement.addEventListener("click", () => {
    deleteNumberExtra();
  });

  const buttonsNumberList = document.querySelector("#buttons-number-list");

  NUMBERS.forEach((number) => {
    const button = document.createElement("button");

    button.textContent = number;

    button.classList.add("buttons-item");

    button.addEventListener("click", () => {
      addNumber(number);
    });

    buttonsNumberList.appendChild(button);
  });
});