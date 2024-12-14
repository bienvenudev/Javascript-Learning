// Button to Change Text and Remove It
// ●Instructions: Create a button that, when clicked, changes the text of a specified element to "Hello, World!" and another button that removes the text from the element when clicked.

// 2 buttons
// 1 btn changes to 'Hello World'
// 2nd btn removes the text
// an element = 'Bye!'

const body = document.querySelector("body");
const changeBtn = document.querySelector("#changeBtn");
const removeBtn = document.querySelector("#removeBtn");
const element = document.querySelector("h1");

body.addEventListener("click", (e) => {
  console.log(e.target.attributes.id);
});

// changeBtn.addEventListener(
//   "click",
//   () => (element.textContent = "Hello World!")
// );

// removeBtn.addEventListener("click", () => (element.textContent = ""));
