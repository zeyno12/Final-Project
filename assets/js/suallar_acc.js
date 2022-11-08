const accordionSual = document.getElementsByClassName("container_sual");
for (i = 0; i < accordionSual.length; i++) {
  accordionSual[i].addEventListener("click", function () {
    this.classList.toggle("activeks");
  });
}
