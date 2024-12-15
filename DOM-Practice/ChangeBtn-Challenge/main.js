// Button to Change Text and Remove It
// ●Instructions: Create a button that, when clicked, changes the text of a specified element to "Hello, World!" and another button that removes the text from the element when clicked.

const body = document.querySelector("body");
const changeBtn = document.querySelector("#changeBtn");
const removeBtn = document.querySelector("#removeBtn");
const element = document.querySelector("h1");

body.addEventListener("click", (e) => {
  const id = e.target.id;
  if (id == "changeBtn") {
    element.textContent = "Hello World!";
  } else if (id == "removeBtn") {
    element.textContent = "";
  }
});
