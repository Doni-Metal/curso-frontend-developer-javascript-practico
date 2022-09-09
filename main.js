var navEmail = document.querySelector(".navbar-email");
var desktopMenu = document.querySelector(".desktop-menu");

navEmail.addEventListener("click", toggleDM);

function toggleDM() {
  desktopMenu.classList.toggle("inactive");
}