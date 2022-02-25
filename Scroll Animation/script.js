const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", trigger);

trigger();

function trigger() {
  const triggerBottom = (window.innerHeight / 5) * 5;

  boxes.forEach((e) => {
    const topOfBox = e.getBoundingClientRect().top;

    if (topOfBox < triggerBottom) {
      e.classList.add("show");
    } else {
      e.classList.remove("show");
    }
  });
}
