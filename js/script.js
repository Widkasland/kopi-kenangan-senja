const navbarNav = document.querySelector(".navbar-nav");
const shoppingCart = document.querySelector(".shopping-cart");
//ketika hambuger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

document.querySelector("#shopping").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};
//klik di luar sidbar
// toggle search
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const cart = document.querySelector("#shopping");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!cart.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});
// modal box
const itemDetailModal = document.querySelector("#item");
const itemDetailButton = document.querySelector(".item-detail-button");

itemDetailButton.onclick = (e) => {
  itemDetailModal.style.display = "flex";
  e.preventDefault();
};
document.querySelector(".modal. keluae").onclick = (e) => {
  itemDetailModal.style.display = none;
  e.preventDefault();
};

// klik tombol keluar
document.querySelector(".modal .keluar").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};
