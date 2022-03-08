const input = document.querySelector("textarea");
const choices = document.querySelector(".choices");

input.addEventListener("keyup", update);

function update(e) {
  createElem(e.target.value);
  if (e.key.toLowerCase() === "enter") {
    randomize();
  }
}

function createElem(input) {
  const elem = input
    .split(",")
    .filter((e) => e.trim() !== "")
    .map((e) => e.trim());
  choices.innerHTML = "";
  elem.forEach((el) => {
    const create = document.createElement("span");
    create.classList.add("choice");
    create.innerText = el;
    choices.appendChild(create);
  });
}

function randomize() {
  const currentChoices = document.querySelectorAll(".choice");
  const time =
    currentChoices.length > 15
      ? Math.floor(Math.random() * 20000 + 1000)
      : Math.floor(Math.random() * 10000 + 1000);
  let index = 0;
  console.log(currentChoices.length);
  const interval = setInterval(() => {
    currentChoices[index].classList.add("focus");
    setTimeout(() => {
      currentChoices.forEach((e) => e.classList.remove("focus"));
    }, 50);
    setTimeout(() => {
      clearInterval(interval);
      if (!currentChoices[index].className.includes("focus")) {
        currentChoices[index].classList.add("focus");
      }
    }, time);
    if (index < currentChoices.length - 1) {
      index++;
    } else {
      index = 0;
    }
  }, 100);
  input.value = "";
}
