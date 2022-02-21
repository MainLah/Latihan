const button = document.querySelector(".btn");
const input = document.querySelector(".input");

button.addEventListener("click", () => {
  input.classList.toggle("show-search");
});
