$(document).ready(function () {
  $(".reviews__slider").slick({
    adaptiveHeight: false,
    speed: 2000,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
  });
  $(".offers__slider").slick({
    adaptiveHeight: true,
    slidesToShow: 3,
    centerMode: true,
    speed: 2000,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
    focusOnSelect: false,
  });
});
