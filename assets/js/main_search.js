const mainSearch = document.querySelector(".bi-search");
const openSearch = document.querySelector("#Main_serch");
mainSearch.addEventListener("click", item);
function item(e) {
  e.preventDefault();
  openSearch.classList.toggle("block");
}

document.getElementById("searchAll").addEventListener("", filterList);
function filterList() {
  const searchInput = document.getElementById("search");
  const filter = searchInput.value.toLowerCase();
  const listItems = document.querySelectorAll(".axtaris_items");
  listItems.forEach((item) => {
    let text = item.textContent;
    if (text.toLowerCase().includes(filter.toLowerCase())) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}
let form1 = document.getElementById("form1");
form1.onclick = function (e) {
  e.preventDefault();
};
let searchCl = document.getElementsByClassName("main_serch");
searchCl.addEventListener("keydown", function () {
  alert("Privet");
});
searchCl.addEventListener("keydown", (event) => {
  if (event.isComposing || event.keyCode === 13) {
    alert("Privet");
  }
});
