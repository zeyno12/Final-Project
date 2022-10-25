////vertical_tab
$(document).ready(function () {
  $("#vertical_tab_nav > ul > li > a").eq(0).addClass("selected");
  $("#vertical_tab_nav > div > article").eq(0).css("display", "block");
  $("#vertical_tab_nav > ul").click(function (e) {
    if ($(e.target).is("a")) {
      $("#vertical_tab_nav > ul > li > a").removeClass("selected");
      $(e.target).addClass("selected");
      var clicked_index = $("a", this).index(e.target);
      $("#vertical_tab_nav > div > article").css("display", "none");
      $("#vertical_tab_nav > div > article").eq(clicked_index).fadeIn();
    }
    $(this).blur();
    return false;
  });
});
