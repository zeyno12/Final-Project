// /accordion
let accordion = document.getElementsByClassName("accordion");
const openicon = document.querySelector(".acc_i_icon");
let array = [...accordion];
array.forEach((element) => {
  element.addEventListener("click", function () {
    element.nextElementSibling.classList.toggle("active2");
    openicon.classList.toggle("rotate");
  });
});
