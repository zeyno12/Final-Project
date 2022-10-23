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
//btn_animated
$(window).load(function () {
  $(".btn-nav").on("click tap", function () {
    $(this).toggleClass("animated");
  });
});
//nav_item
const opendata = document.querySelector(".btn-nav");
const transformitem = document.querySelector(".transform_itemas");
opendata.addEventListener("click", openitem);
function openitem(e) {
  e.preventDefault();
  transformitem.classList.toggle("active");
}
// /accordion
let accordion = document.getElementsByClassName("accordion");
let array = [...accordion];
array.forEach((element) => {
  element.addEventListener("click", function () {
    element.nextElementSibling.classList.toggle("active2");
  });
});

//tab_items
const labels = document.querySelectorAll(".accordion-item__label");
const tabs = document.querySelectorAll(".accordion-tab");

function toggleShow() {
  const target = this;
  const item = target.classList.contains("accordion-tab")
    ? target
    : target.parentElement;
  const group = item.dataset.actabGroup;
  const id = item.dataset.actabId;

  tabs.forEach(function (tab) {
    if (tab.dataset.actabGroup === group) {
      if (tab.dataset.actabId === id) {
        tab.classList.add("accordion-active");
      } else {
        tab.classList.remove("accordion-active");
      }
    }
  });

  labels.forEach(function (label) {
    const tabItem = label.parentElement;

    if (tabItem.dataset.actabGroup === group) {
      if (tabItem.dataset.actabId === id) {
        tabItem.classList.add("accordion-active");
      } else {
        tabItem.classList.remove("accordion-active");
      }
    }
  });
}

labels.forEach(function (label) {
  label.addEventListener("click", toggleShow);
});

tabs.forEach(function (tab) {
  tab.addEventListener("click", toggleShow);
});
