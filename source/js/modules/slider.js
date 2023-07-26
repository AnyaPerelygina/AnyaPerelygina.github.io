import Swiper from '../vendor/swiper'

// eslint-disable-next-line no-undef
const initCoachSlider = () => {
  new Swiper('.coach__sliders', {
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1366: {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: '.coach__button--next',
      prevEl: '.coach__button--prev',
    },
  })
};

// eslint-disable-next-line no-undef
const sliderReviews = document.querySelector('.reviews__swiper');
const buttonNext = document.querySelector('.reviews__button--next');
const buttonPrev = document.querySelector('.reviews__button--prev');

const initSliderReviews = () => {
  if (sliderReviews) {
    // eslint-disable-next-line
    new Swiper(sliderReviews, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      slidesPerView: 1,
      spaceBetween: 30,
    });
  }
};

export {initCoachSlider, initSliderReviews};
