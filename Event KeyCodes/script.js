const eventKey = document.querySelector(".event-key");
const eventKeyCode = document.querySelector(".event-keyCode");
const eventCode = document.querySelector(".event-code");

window.addEventListener("keydown", (e) => {
  document.body.innerHTML = `
    <div class="container">
      <div class="text">
        <p>event.key</p>
        <div class="test event-key">
          <h4>${e.key === " " ? "Space" : e.key}</h4>
        </div>
      </div>
      <div class="text">
        <p>event.keyCode</p>
        <div class="test event-keyCode">
          <h4>${e.keyCode}</h4>
        </div>
      </div>
      <div class="text">
        <p>event.code</p>
        <div class="test event-code">
          <h4>${e.code}</h4>
        </div>
      </div>
    </div>
    `;
});
