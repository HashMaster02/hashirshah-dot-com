let isVisible = true;
const upNextMenuButton = document.getElementById("up-next-menu-button");
const upNextMenu = document.querySelector(".up-next");

upNextMenuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (isVisible) {
    closeMenu();
    isVisible = false;
  } else {
    openMenu();
    isVisible = true;
  }
}

function closeMenu() {
  upNextMenu.classList.add("collapse");
}

function openMenu() {
  upNextMenu.classList.remove("collapse");
}
