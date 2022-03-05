const sounds = ["lock", "paper", "gubrak"];

sounds.forEach((sound) => {
  const button = document.createElement("button");
  button.classList.add("btn");
  button.innerText = sound;

  button.addEventListener("click", () => {
    button.style.transform = "scale(0.95)";
    setTimeout(() => {
      button.style.transform = "";
    }, 100);

    const currentSound = document.querySelector(`#${sound}`);
    stopSound();
    currentSound.play();
  });

  document.body.appendChild(button);
});

function stopSound() {
  sounds.forEach((sound) => {
    const currentSound = document.querySelector(`#${sound}`);
    currentSound.pause();
    currentSound.currentTime = 0;
  });
}
