// For Calculator

import "./styles.css";

const { createLogicalAnd } = require("typescript");

let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let calculate = document.getElementById("calculate");
let result = document.getElementById("result");

export function cal() {
  let num1 = parseFloat(a.value);
  let operator = b.value;
  let num2 = parseFloat(c.value);
  let res;

  switch (operator) {
    case "+":
      res = num1 + num2;
      break;
    case "-":
      res = num1 - num2;
      break;
    case "*":
      res = num1 * num2;
      break;
    case "/":
      res = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
      break;
    default:
      res = "Invalid operator";
  }
  result.textContent = `Result: ${res}`;
}

// Optional: Attach event listener
calculate.addEventListener("click", cal);

// For TODO LIST

let inputValue = document.getElementById("input-text");
let submit = document.getElementById("submit");
let tasks = document.getElementById("todo-list");

function addToList() {
  const taskText = inputValue.value.trim();
  console.log(taskText);

  if (taskText === "") return; // Avoid empty tasks

  // Create a new list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Optional: Add a remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";
  removeBtn.style.marginLeft = "10px";
  removeBtn.addEventListener("click", () => {
    tasks.removeChild(li);
  });

  li.appendChild(removeBtn);

  // Add the list item to the task list
  tasks.appendChild(li);

  // Clear input field
  inputValue.value = "";
}

submit.addEventListener("click", addToList);
