feather.replace();

let servicesSwiper = new Swiper(".servicesSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

let homeProjectsSwiper = new Swiper(".homeProjectsSwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let partnersSwiper = new Swiper(".partnersSwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 6,
    },
  },
});
