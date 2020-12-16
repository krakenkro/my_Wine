$(document).ready(function () {
  $(".reviews__slider").slick({
    adaptiveHeight: false,
    speed: 2500,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $(".offers__slider").slick({
    adaptiveHeight: true,
    slidesToShow: 3,
    centerMode: true,
    speed: 2500,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: false,
  });
});
