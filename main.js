const navEmail = document.querySelector(".navbar-email");
const burgerIcon = document.querySelector(".menu");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");

navEmail.addEventListener("click", toggleDesktopMenu);
burgerIcon.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
}

// Agregar outsideClick desktop menu
document.addEventListener("click", function (event) {
  const target = event.target;
  const isNavEmail = target === navEmail || navEmail.contains(target);
  const isDesktopMenu = target === desktopMenu || desktopMenu.contains(target);

  if (!isNavEmail && !isDesktopMenu) {
    desktopMenu.classList.add("inactive");
  }
});
// Agregar outsideClick mobile menu
document.addEventListener("click", function (event) {
  const target = event.target;
  const isBurgerIcon = target === burgerIcon || burgerIcon.contains(target);
  const isMobileMenu = target === mobileMenu || mobileMenu.contains(target);

  if (!isBurgerIcon && !isMobileMenu) {
    mobileMenu.classList.add("inactive");
  }
});
