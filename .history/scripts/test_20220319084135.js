$(document).ready(function () {
  $(".demo").isotope({
    // options
    itemSelector: "img",
    layoutMode: "fitRows",
  });
  const wimg = $("img").width();
  $(".demo").forEach((val) => {
    val.css("height", `${wing}px`);
  });
  demo;
});
$(".btns").on("click", "button", function () {
  const filter = $(this).data("filter");
  $(".demo").isotope({ filter });
  $("button").removeClass();
  $(this).addClass("active-btn");
});
$(document).ready(function () {
  $("#actived").trigger("click");
});
