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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

function myFunction() {
  var x = document.getElementById('mobMenu');
  if (x.className === 'mobile-menu') {
    x.className += ' responsive';
  } else {
    x.className = 'mobile-menu';
  }
}
