let axtars = document.getElementById("axtars");
axtars.addEventListener("input", function (e) {
  e.preventDefault();
  let searchInputitem = document.getElementById("axtars");
  let filters = searchInputitem.value.toLowerCase();
  let listItemss = document.querySelectorAll(".axtaris_items");

  listItemss.forEach((items) => {
    let text = items.textContent;
    if (text.toLowerCase().includes(filters.toLowerCase())) {
      items.style.display = "";
    } else {
      items.style.display = "none";
    }
  });
});
