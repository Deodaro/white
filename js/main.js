// --- for scroll --- //
// jquery.jscrollpane.css
// jquery.mousewheel.js
// mwheelIntent.js - not included
// jquery.jscrollpane.min.js

// $(function () {
//   $('.developers__gallery').jScrollPane();
// });

$(document).ready(function () {
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: document.querySelector('#slider-prev-btn'),
    nextArrow: document.querySelector('#slider-next-btn'),
    dots: true,
    appendDots: document.querySelector('#slider-scrollbar'),
    // dotsClass: document.querySelector('#slider-scrollbar'),
  });
});
