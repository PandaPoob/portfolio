window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("Welcome");
  document
    .querySelector("#fx-open-popup")
    .addEventListener("click", () => showFxImg());
}

function showFxImg() {
  console.log("click");
  const fxPopup = document.querySelector("#fx-popup");
  fxPopup.style.display = "block";

  const container = document.querySelector(".popup-container");
  container.addEventListener("click", closeFxImg);
}

function closeFxImg() {
  document.querySelector("#fx-popup").style.display = "none";
  document.querySelector("#fx-popup").removeEventListener("click", closeHgImg);
}
