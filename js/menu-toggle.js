document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  if (menuIcon) {
    menuIcon.addEventListener("click", function () {
      const menuList = document.querySelector(".menulist");
      if (menuList) {
        menuList.classList.toggle("show");
      }
    });
  }
});

$(document).ready(function () {
  $(".collab-parter").slick({
    centerMode: true,
    // centerPadding: '60px',
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
