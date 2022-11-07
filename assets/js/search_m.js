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

// Animate scroll to page anchor
$("#qan12").click(function (e) {
  // e.preventDefault();
  // var div = $(this).attr("href");
  // $("html, body").animate(
  //   {
  //     scrollTop: $(div).position().top,
  //   },
  //   "slow",
  //   "swing"
  // );
  alert("test");
});
