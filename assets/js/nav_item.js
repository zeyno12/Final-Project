//nav_item
const opendata = document.querySelector(".btn-nav");
const transformitem = document.querySelector(".transform_itemas");
opendata.addEventListener("click", openitem);
function openitem(e) {
  e.preventDefault();

  transformitem.classList.toggle("active");
}
