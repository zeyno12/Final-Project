//btn_animated
try {
  $(window).load(function () {
    $(".btn-nav").on("click tap", function () {
      $(this).toggleClass("animated");
    });
  });
} catch (error) {
  console.log("js server runung...");
}
