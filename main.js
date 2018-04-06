const hamburgerMenu = document.querySelector("#menu-hamburger");
const responsiveNav = document.querySelector(".responsive-nav");

hamburgerMenu.addEventListener("click", function () {
  responsiveNav.classList.toggle("menu-open");
  animateHamburgerMenu(hamburgerMenu.querySelectorAll("rect"));
});

function animateHamburgerMenu(svg) {
  svg.forEach(function(current, index) {
    current.classList.toggle('hamburger-menu__rect' + (index + 1));
  })
};

var links = document.querySelectorAll("ul li a");
var title = document.querySelector(".title a")
var svgChicken = document.querySelector(".center__svg")

window.addEventListener("scroll", function () {
  if (window.scrollY >= 500) {
    links.forEach(function (link) {
      link.classList = "nav-color"
    })
    svgChicken.classList = "nav-color center__svg";
    title.classList = "nav-color";

    hamburgerMenu.classList = "nav-color";
  } else if (window.scrollY <= 500) {
    links.forEach(function (link) {
      link.classList = "";
    })
    svgChicken.classList = "center__svg";
    title.classList = "";
    hamburgerMenu.classList = "";
  }
});
