const cups = document.querySelectorAll(".cups");
const water = document.querySelector(".water");

const heightCounter = 100 / cups.length;
let currentIndex = 0;

cups.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (index === 0 && water.style.height === "12.5%") {
      water.style.height = 0;
      return;
    }

    water.style.height = `${heightCounter * (index + 1)}%`;
    currentIndex = index;
  });
});
