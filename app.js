const share = document.querySelector(".share");
const popup = document.querySelector(".popup");
const popups = document.querySelector(".popups");
const tochange = document.querySelector("#tochange");
const markup = document.querySelector(".markup");
const body = document.querySelector(".body");

share.addEventListener("click", function () {
  popup.setAttribute("class", "popups");

  if (window.innerWidth <= 850) {
    const top = window.getComputedStyle(markup).top;
    tochange.style.top = top;

    const left = window.getComputedStyle(markup).left;
    tochange.style.left = left;

    const width = window.getComputedStyle(markup).width;
    tochange.style.width = `${width}-100`;
  }
});
