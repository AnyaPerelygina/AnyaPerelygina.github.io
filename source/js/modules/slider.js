import Swiper from '../vendor/swiper'

// eslint-disable-next-line no-undef

const sliderCoaches = document.querySelector('.coaches__swiper');
const buttonNext = document.querySelector('.coaches__button--next');
const buttonPrev = document.querySelector('.coaches__button--prev');

const initCoachesSlider = () => {
  if (sliderCoaches) {
    new Swiper(sliderCoaches, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      loop: true,
      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },

        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
  }
};

// eslint-disable-next-line no-undef
const sliderReviews = document.querySelector('.reviews__swiper');

const initSliderReviews = () => {
  if (sliderReviews) {
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

const slides = document.querySelectorAll('.swiper-slide');

const getSlidesTabs = () => {
  const slidesObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.setAttribute('tabindex', '0');
      } else {
        entry.target.removeAttribute('tabindex', '0');
      }
    });
  });

  slides.forEach((slide) => slidesObserver.observe(slide));
};

export {initCoachesSlider, initSliderReviews, getSlidesTabs};
