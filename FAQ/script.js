const button = document.querySelectorAll("i");

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.toggle("active");
  });
});
