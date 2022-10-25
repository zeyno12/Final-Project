///accordion_muyineler
const accordion_i = document.getElementsByClassName("container");
for (i = 0; i < accordion_i.length; i++) {
  accordion_i[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
