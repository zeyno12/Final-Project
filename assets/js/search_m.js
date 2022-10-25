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
