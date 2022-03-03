const label = document.querySelectorAll(".label");
const input = document.querySelectorAll("input");

label.forEach((e) => {
  e.querySelectorAll("span").forEach((span, i) => {
    span.style.transition = `all ${i * 100 + 100}ms`;
  });
});

input.forEach((e) => {
  e.addEventListener("focus", () => {
    label.forEach((el) =>
      el.querySelectorAll("span").forEach((ele) => ele.classList.remove("down"))
    );
  });
});
