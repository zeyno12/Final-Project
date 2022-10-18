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

$(window).load(function () {
  $(".btn-nav").on("click tap", function () {
    $(this).toggleClass("animated");
  });
});

// const opendata = document.querySelector(".btn-nav");
// const transformitem = document.querySelector(".transform_itemas");
// opendata.addEventListener("click", openitem);
// function openitem(e) {
//   e.preventDefault();
//   transformitem.classList.toggle("active");
// }

let accordion = document.getElementsByClassName("accordion");
let array = [...accordion];
array.forEach((element) => {
  element.addEventListener("click", function () {
    element.nextElementSibling.classList.toggle("panel_row");
  });
});
////
let tabheader = document.getElementsByClassName("tab_header")[0];
let tabindicator = document.getElementsByClassName("tab_indicator")[0];
let tabbody = document.getElementsByClassName("tab_body")[0];
let tabpane = tabheader.getElementsByTagName("div");
for (let i = 0; i < tabpane.length; i++) {
  tabpane[i].addEventListener("click", function () {
    tabheader.getElementsByClassName("active")[0].classList.remove("active");
    tabpane[i].classList.add("active");
    tabbody.getElementsByClassName("active")[0].classList.remove("active");
    tabbody.getElementsByTagName("div")[i].classList.add("active");
    tabindicator.style.left = `calc(calc(100% / 4)*${i})`;
  });
}
