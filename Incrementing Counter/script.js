const counters = document.querySelectorAll(".counter-number");

counters.forEach((counter) => {
  counter.innerText = 0;

  function updateCounter() {
    const target = parseInt(counter.getAttribute("data-target"));
    const currentNumber = parseInt(counter.innerText);
    const increment = target / 200;

    if (currentNumber < target) {
      counter.innerText = Math.round(currentNumber + increment);
      setInterval(updateCounter, 100);
    } else {
      counter.innerText = target;
    }
  }
  updateCounter();
});
