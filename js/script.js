const navbarNav = document.querySelector(".navbar-nav");
const shoppingCart = document.querySelector(".shopping-cart");
//ketika hambuger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
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

document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".star");

  stars.forEach((star) => {
    star.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      highlightStars(index);
    });
  });

  function highlightStars(index) {
    stars.forEach((star) => {
      if (star.getAttribute("data-index") <= index) {
        star.classList.add("active");
      } else {
        star.classList.remove("active");
      }
    });
  }
});
// modal box
// const itemDetailModal1 = document.querySelector("#item1");
// const itemDetailButtons1 = document.querySelectorAll(".item-detail-button1");
// itemDetailButtons1.forEach((btn) => {
//   btn.onclick = (e) => {
//     itemDetailModal1.style.display = "flex";
//     e.preventDefault();
//   };
// });
// document.querySelector(".modal .keluar1").onclick = (e) => {
//   itemDetailModal1.style.display = none;
//   e.preventDefault();
// };
// // klik tombol keluar
// document.querySelector(".modal .keluar1").onclick = (e) => {
//   itemDetailModal1.style.display = "none";
//   e.preventDefault();
// };
// window.onclick = (e) => {
//   if (e.target === itemDetailModal1) {
//     itemDetailModal1.style.display = "none";
//   }
// };

// const itemDetailModal2 = document.querySelector("#item2");
// const itemDetailButtons2 = document.querySelectorAll(".item-detail-button2");
// itemDetailButtons2.forEach((btn) => {
//   btn.onclick = (e) => {
//     itemDetailModal2.style.display = "flex";
//     e.preventDefault();
//   };
// });
// document.querySelector(".modal .keluar2").onclick = (e) => {
//   itemDetailModal2.style.display = none;
//   e.preventDefault();
// };
// // klik tombol keluar
// document.querySelector(".modal .keluar2").onclick = (e) => {
//   itemDetailModal2.style.display = "none";
//   e.preventDefault();
// };
// window.onclick = (e) => {
//   if (e.target === itemDetailModal2) {
//     itemDetailModal2.style.display = "none";
//   }
// };

// const itemDetailModal3 = document.querySelector("#item3");
// const itemDetailButtons3 = document.querySelectorAll(".item-detail-button3");
// itemDetailButtons3.forEach((btn) => {
//   btn.onclick = (e) => {
//     itemDetailModal3.style.display = "flex";
//     e.preventDefault();
//   };
// });
// document.querySelector(".modal .keluar3").onclick = (e) => {
//   itemDetailModal3.style.display = none;
//   e.preventDefault();
// };
// // klik tombol keluar
// document.querySelector(".modal .keluar3").onclick = (e) => {
//   itemDetailModal3.style.display = "none";
//   e.preventDefault();
// };
// window.onclick = (e) => {
//   if (e.target === itemDetailModal3) {
//     itemDetailModal3.style.display = "none";
//   }
// };

// const itemDetailModal4 = document.querySelector("#item4");
// const itemDetailButtons4 = document.querySelectorAll(".item-detail-button4");
// itemDetailButtons4.forEach((btn) => {
//   btn.onclick = (e) => {
//     itemDetailModal4.style.display = "flex";
//     e.preventDefault();
//   };
// });
// document.querySelector(".modal .keluar4").onclick = (e) => {
//   itemDetailModal4.style.display = none;
//   e.preventDefault();
// };
// // klik tombol keluar
// document.querySelector(".modal .keluar4").onclick = (e) => {
//   itemDetailModal4.style.display = "none";
//   e.preventDefault();
// };
// window.onclick = (e) => {
//   if (e.target === itemDetailModal4) {
//     itemDetailModal4.style.display = "none";
//   }
// };

// const itemDetailModal5 = document.querySelector("#item5");
// const itemDetailButtons5 = document.querySelectorAll(".item-detail-button5");
// itemDetailButtons5.forEach((btn) => {
//   btn.onclick = (e) => {
//     itemDetailModal5.style.display = "flex";
//     e.preventDefault();
//   };
// });

// document.querySelector(".modal .keluar5").onclick = (e) => {
//   itemDetailModal5.style.display = none;
//   e.preventDefault();
// };

// // klik tombol keluar
// document.querySelector(".modal .keluar5").onclick = (e) => {
//   itemDetailModal5.style.display = "none";
//   e.preventDefault();
// };

// window.onclick = (e) => {
//   if (e.target === itemDetailModal5) {
//     itemDetailModal5.style.display = "none";
//   }
// };

// const itemDetailModal6 = document.querySelector("#item6");
// const itemDetailButtons6 = document.querySelectorAll(".item-detail-button6");

// itemDetailButtons6.forEach((btn) => {
//   btn.onclick = (e) => {
//     itemDetailModal6.style.display = "flex";
//     e.preventDefault();
//   };
// });

// document.querySelector(".modal .keluar6").onclick = (e) => {
//   itemDetailModal6.style.display = none;
//   e.preventDefault();
// };

// // klik tombol keluar
// document.querySelector(".modal .keluar6").onclick = (e) => {
//   itemDetailModal6.style.display = "none";
//   e.preventDefault();
// };

// window.onclick = (e) => {
//   if (e.target === itemDetailModal6) {
//     itemDetailModal6.style.display = "none";
//   }
// };
// const itemModal = document.getElementById("item6");
// const itemButton = document.querySelectorAll("#itemm1");

// itemButton.forEach((btn) => {
//   btn.onclick = (e) => {
//     itemModal.style.display = "flex";
//     e.preventDefault();
//   };
// });
// document.querySelector(".modal .keluar6").onclick = (e) => {
//   itemModal.style.display = "none";
//   e.preventDefault();
// };
// document.querySelector(".modal .keluar6").onclick = (e) => {
//   itemModal.style.display = "none";
//   e.preventDefault();
// };
// window.onclick = (e) => {
//   if (e.target === itemModal) {
//     itemModal.style.display = "none";
//   }
// };

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 500) {
    navbar.style.backgroundColor = "rgb(1, 1, 1, 0.7)";
  } else {
    navbar.style.backgroundColor = "rgb(1, 1, 1, 0.7)";
  }
});
