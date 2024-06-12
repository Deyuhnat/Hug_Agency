document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.querySelector(".menu");
  const closeMenu = document.createElement("div");
  closeMenu.classList.add("close-menu");
  closeMenu.innerHTML = "&times;";
  menu.appendChild(closeMenu);

  if (menuIcon) {
    menuIcon.addEventListener("click", function () {
      menu.classList.toggle("show");
    });

    closeMenu.addEventListener("click", function () {
      menu.classList.remove("show");
    });
  }
});

$(document).ready(function () {
  $(".collab-parter").slick({
    centerMode: true,
    centerPadding: "60px",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><img src='./pic/vector-left.svg' alt='Next'></button>`,
    nextArrow:
      "<button type='button' class='slick-next slick-arrow'><img src='./pic/vector-right.svg' alt='Next'></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".team-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });
});
