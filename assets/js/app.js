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

////vertical_tab
$(document).ready(function () {
  $("#vertical_tab_nav > ul > li > a").eq(0).addClass("selected");
  $("#vertical_tab_nav > div > article").eq(0).css("display", "block");
  $("#vertical_tab_nav > ul").click(function (e) {
    if ($(e.target).is("a")) {
      $("#vertical_tab_nav > ul > li > a").removeClass("selected");
      $(e.target).addClass("selected");
      var clicked_index = $("a", this).index(e.target);
      $("#vertical_tab_nav > div > article").css("display", "none");
      $("#vertical_tab_nav > div > article").eq(clicked_index).fadeIn();
    }
    $(this).blur();
    return false;
  });
});

///accordion_muyineler
const accordion_i = document.getElementsByClassName("container");
for (i = 0; i < accordion_i.length; i++) {
  accordion_i[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

////serch_muyineler
document.getElementById("search").addEventListener("input", filterList);
function filterList() {
  const searchInput = document.getElementById("search");
  const filter = searchInput.value.toLowerCase();
  const listItems = document.querySelectorAll(".flexable");
  listItems.forEach((item) => {
    let text = item.textContent;
    if (text.toLowerCase().includes(filter.toLowerCase())) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}
///search_mainnn
const opensearch = document.querySelectorAll(".bi-search");
opensearch.addEventListener("click", () => {
  console.log(true);
  document.getElementById("Main_serch").style.display = "block";
});
