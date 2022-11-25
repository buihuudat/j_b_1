$(document).ready(function () {
  var siteLink = $(".sitebar_link .sitebar-icon").toArray();
  var siteChild = $(".sitebar_child").toArray();

  siteLink.map((e, i) => {
    $(e).click(() => {
      if ($(e).parent().hasClass("show")) {
        $(e).parent().removeClass("show");
        $($(".sitebar_link i")[i])
          .addClass("fa-chevron-right")
          .removeClass("fa-chevron-down");
        return;
      }
      $(siteLink).parent().removeClass("show");
      $($(".sitebar_link i"))
        .removeClass("fa-chevron-down")
        .addClass("fa-chevron-right");
      $(e).parent().addClass("show");
      $($(".sitebar_link i")[i])
        .addClass("fa-chevron-down")
        .removeClass("fa-chevron-right");
    });
  });

  siteChild.map((e) => {
    $(e).click(() => {
      $(e).parent().removeClass("show").addClass("hidden");
      console.log($(e).parent());
    });
  });
});

// swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiperLayout", {
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1330: {
      slidesPerView: 4,
    },
    890: {
      slidesPerView: 3,
    },
    550: {
      slidesPerView: 2,
    },
  },
});
