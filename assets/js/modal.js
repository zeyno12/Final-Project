window.addEventListener("load", function () {
  setTimeout(function open(event) {
    // event.preventDefaul();
    document.querySelector("#Popup_modal").style.display = "block";
  }, 1000);
});

document.querySelector(".bi-x-circle").addEventListener("click", function () {
  document.querySelector("#Popup_modal").style.display = "none";
});
