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
const reviewsSlider = new Swiper('.reviews__slider', {
  loop: false,
  navigation: {
    prevEl: '.reviews__button--prev',
    nextEl: '.reviews__button--next',
  },
});

export {initCoachSlider, reviewsSlider};
