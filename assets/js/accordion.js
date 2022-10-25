// /accordion
let accordion = document.getElementsByClassName("accordion");
let array = [...accordion];
array.forEach((element) => {
  element.addEventListener("click", function () {
    element.nextElementSibling.classList.toggle("active2");
  });
});
