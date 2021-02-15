// --- for scroll --- //
// jquery.jscrollpane.css
// jquery.mousewheel.js
// mwheelIntent.js - not included
// jquery.jscrollpane.min.js

// $(function () {
//   $('.developers__gallery').jScrollPane();
// });

// $(document).ready(function () {
//   $('.multiple-items').slick({
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     arrows: true,
//     prevArrow: document.querySelector('#slider-prev-btn'),
//     nextArrow: document.querySelector('#slider-next-btn'),
//     // dots: true,
//     // appendDots: document.querySelector('#slider-scrollbar'),
//     // dotsClass: document.querySelector('#slider-scrollbar'),
//   });
// });

const slidesCount = $('.slick-carousel').find('.slide-content').length,
  $nav = $('.nav'),
  $navInner = $nav.find('.nav-inner');

function updateNav(slide) {
  $navInner.width(`${($nav.width() * (slide + 1)) / (slidesCount - 3)}px`);
}

$('.nav').on('click', function (e) {
  $('.slick-carousel').slick(
    'slickGoTo',
    ((e.offsetX / $nav.width()) * slidesCount) | 0
  );
});

$('.slick-carousel')
  .on({
    init(e, slick) {
      updateNav(slick.currentSlide);
    },
    beforeChange(e, slick, currentSlide, nextSlide) {
      updateNav(nextSlide);
    },
  })
  .slick({
    arrows: true,
    slidesToShow: 4,
    infinite: false,
    prevArrow: document.querySelector('#slider-prev-btn'),
    nextArrow: document.querySelector('#slider-next-btn'),
  });
