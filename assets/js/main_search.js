const mainSearch = document.querySelector(".bi-search");
const openSearch = document.querySelector("#Main_serch");
mainSearch.addEventListener("click", item);
function item(e) {
  e.preventDefault();
  openSearch.classList.toggle("block");
}
var input = document.getElementById("searchAll");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    location.href = "http://127.0.0.1:5500/axtariw.html";
  }
});
// document.getElementById("search").addEventListener("input", filterList);
// function filterList() {
//   const searchInput = document.getElementById("search");
//   const filter = searchInput.value.toLowerCase();
//   const listItems = document.querySelectorAll("axtaris_items");
//   listItems.forEach((item) => {
//     let text = item.textContent;
//     if (text.toLowerCase().includes(filter.toLowerCase())) {
//       item.style.display = "";
//     } else {
//       item.style.display = "none";
//     }
//   });
// }
