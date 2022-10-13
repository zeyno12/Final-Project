//main_swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
  },
});
//button nav
$(window).load(function () {
  $(".btn-nav").on("click tap", function () {
    $(this).toggleClass("animated");
  });
});

const opendata = document.querySelector(".btn-nav");
const transformitem = document.querySelector(".transform_itemas");

opendata.addEventListener("click", openitem);
function openitem(e) {
  e.preventDefault();
  transformitem.classList.toggle("active");
  console.log(true);
}

//accordion doctors
const Openaccardion = document.querySelector(".accordion__data");
Openaccardion.addEventListener("click", () => {
  const accardionitem = document.querySelector(".accordion__item");
  accardionitem.classList.toggle("active2");
});
