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

const opendata = document.querySelector(".btn-nav");
const transformitem = document.querySelector(".transform_itemas");
opendata.addEventListener("click", openitem);
function openitem(e) {
  e.preventDefault();
  transformitem.classList.toggle("active");
}

// var acc = document.getElementsByClassName("accordion");
// var i;
// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

const Openaccardion = document.querySelector(".accordion");
Openaccardion.addEventListener("click", () => {
  const accardionitem = document.querySelector(".row");
  console.log(true);
  accardionitem.classList.toggle("active2");
});
