const label = document.querySelectorAll("label");
const input = document.querySelectorAll("input");
// const span = document.querySelectorAll("label span");

label.forEach((e) => {
  e.querySelectorAll("span").forEach((span, i) => {
    span.style.transition = `all ${i * 100 + 100}ms`;
  });
});

input.forEach((input, i) => {
  input.addEventListener("focus", () => {
    const span = label[i].querySelectorAll("span");
    span.forEach((span) => {
      span.classList.add("up");
    });
  });
  input.addEventListener("blur", () => {
    const span = label[i].querySelectorAll("span");
    span.forEach((span) => {
      span.classList.remove("up");
    });
  });
});
