const main = () => {
  const navbar = $("#navbar");
  const btnNavBar = $(".btn-navbar-menu");

  // Function to handle scroll event
  window.onscroll = function () {
    if (window.scrollY > 50) {
      // When scroll position is more than 50px from top
      navbar.addClass("scrolled");
    } else {
      navbar.removeClass("scrolled");
    }
  };

  btnNavBar.on("click", () => {
    navbar.toggleClass("showing");
  });
};

$(document).ready(() => {
  main();
});
