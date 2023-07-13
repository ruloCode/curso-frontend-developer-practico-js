// import useOutSideClick from './utils/useOutSideClick'
const navEmail = document.querySelector(".navbar-email");
const burgerIcon = document.querySelector(".menu");
const menuCartIcon = document.querySelector(".navbar-shopping-cart");

const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

navEmail.addEventListener("click", toggleDesktopMenu);
burgerIcon.addEventListener("click", toggleMobileMenu);
menuCartIcon.addEventListener("click", toggleAsideMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
}
function toggleAsideMenu() {
  aside.classList.toggle("inactive");
}

function useOutsideClick(element, callback) {
  document.addEventListener("click", function (event) {
    const target = event.target;
    const isElement = target === element || element.contains(target);

    if (!isElement) {
      callback();
    }
  });
}


// Agregar outsideClick desktop menu
document.addEventListener("click", function (event) {
    // Obtiene el elemento en el que se hizo clic
    const target = event.target; 
    // Verifica si el clic ocurrió dentro del elemento navEmail o alguno de sus elementos secundarios
    const isNavEmail = target === navEmail || navEmail.contains(target); 
    // Verifica si el clic ocurrió dentro del elemento desktopMenu o alguno de sus elementos secundarios
    const isDesktopMenu = target === desktopMenu || desktopMenu.contains(target); 
  
    // Si el clic no ocurrió ni dentro de navEmail ni dentro de desktopMenu
    if (!isNavEmail && !isDesktopMenu) {
      desktopMenu.classList.add("inactive"); // Agrega la clase "inactive" al elemento desktopMenu para ocultarlo
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
// Agregar outsideClick aside menu
document.addEventListener("click", function (event) {
  const target = event.target;
  const isCartIcon = target === menuCartIcon || menuCartIcon.contains(target);
  const isCartAside = target === aside || aside.contains(target);

  if (!isCartIcon && !isCartAside) {
    aside.classList.add("inactive");
  }
});
