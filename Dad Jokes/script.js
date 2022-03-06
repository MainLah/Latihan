const dadJoke = document.querySelector(".dad-jokes");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      dadJoke.textContent = `${json.joke}`;
    });
});
