const hamburgerMenu = document.querySelector("#menu-hamburger");
const responsiveNav = document.querySelector(".responsive-nav");

hamburgerMenu.addEventListener("click", function () {
  responsiveNav.classList.toggle("menu-open");
  animateHamburgerMenu(hamburgerMenu.querySelectorAll("rect"));
});

function animateHamburgerMenu(svg) {

  console.log("called");
  svg.forEach(function(current, index) {
    current.classList.toggle('hamburger-menu__rect' + (index + 1));
  })
}
