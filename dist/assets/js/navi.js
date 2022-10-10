// Navigation
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// Menu Show

function navShowButton() {
  navMenu.classList.remove("hidden");
  navMenu.classList.add("block");
}

function navCloseButton() {
  navMenu.classList.remove("block");
  navMenu.classList.add("hidden");
}

if (navToggle) {
  navToggle.addEventListener("click", navShowButton);
}

if (navClose) {
  navClose.addEventListener("click", navCloseButton);
}
