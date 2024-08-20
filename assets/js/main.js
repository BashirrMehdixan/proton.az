feather.replace();

let servicesSwiper = new Swiper(".servicesSwiper", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let homeProjectsSwiper = new Swiper(".homeProjectsSwiper", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
