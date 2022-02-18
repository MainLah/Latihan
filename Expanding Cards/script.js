const panels = document.querySelectorAll(".panel");

panels.forEach((el) => {
  el.addEventListener("click", () => {
    if (!el.classList.contains("active")) {
      removeActive();
      el.classList.add("active");
    }
  });
});

function removeActive() {
  panels.forEach((el) => {
    el.classList.remove("active");
  });
}
