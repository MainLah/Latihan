const bg = document.querySelector(".bg");
const loadPercent = document.querySelector("#load-percent");
let index = 100;
let percent = 0;

const interval = setInterval(() => {
  bg.style.filter = `blur(${index}px)`;
  loadPercent.style.opacity = `${index / 100}`;
  index--;
  loadPercent.innerText = `${percent}%`;
  percent++;
  if (index < 0 && percent > 100) {
    clearInterval(interval);
    setTimeout(() => {
      loadPercent.innerText = "";
    }, 1000);
  }
}, 25);
