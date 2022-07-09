$(document).ready(function () {
  let isotope = $(".demo").isotope({
    // options
    itemSelector: "img",
    layoutMode: "fitRows",
  });
  const wimg = $("img").width();
  $(".demo").forEach((val) => {
    val.css("height", `${wing}px`);
  });
  $("#actived").trigger("click");
});
$(".btns").on("click", "button", function () {
  const filter = $(this).data("filter");
  isotope.isotope({ filter });
  $("button").removeClass();
  $(this).addClass("active-btn");
});
