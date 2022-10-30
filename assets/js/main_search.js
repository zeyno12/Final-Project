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
