// /accordion
let accordion = document.getElementsByClassName("accordion");
const openicon = document.querySelector(".acc_i_icon");
let array = [...accordion];
array.forEach((element) => {
  element.addEventListener("click", function () {
    element.nextElementSibling.classList.toggle("active2");
    if ((openicon.style.transform = "rotate(0deg)")) {
      openicon.style.transform = "rotate(90deg)";
    } else {
      openicon.style.transform = "rotate(0deg)";
    }
  });
});