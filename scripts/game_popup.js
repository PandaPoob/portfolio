window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("Welcome");
  document
    .querySelector("#game-open-popup")
    .addEventListener("click", () => showFxImg());
}

function showFxImg() {
  console.log("click");
  const gamePopup = document.querySelector("#game-popup");
  gamePopup.style.display = "block";

  gamePopup.addEventListener("click", closeGameImg);
}

function closeGameImg() {
  document.querySelector("#game-popup").style.display = "none";
  document
    .querySelector("#game-popup")
    .removeEventListener("click", closeGameImg);
}
