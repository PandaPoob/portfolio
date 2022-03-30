window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("Welcome");
  document
    .querySelector("#open-popup")
    .addEventListener("click", () => showHgImg());
}

function showHgImg() {
  console.log("click");
  const hgPopup = document.querySelector("#hg-popup");
  hgPopup.style.display = "block";

  hgPopup.addEventListener("click", closeHgImg);
}

function closeHgImg() {
  document.querySelector("#hg-popup").style.display = "none";
  document.querySelector("#hg-popup").removeEventListener("click", closeHgImg);
}
