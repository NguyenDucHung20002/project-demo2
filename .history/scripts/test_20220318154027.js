$(document).ready(function () {
  const isopote = $(".demo").isotope({
    // options
    itemSelector: "img",
    layoutMode: "fitRows",
  });
  const widthimg = $("img").width();
  $(".demo").forEach((val) => {
    val.css("height", `${widthimg}px`);
  });
  $(".btns").on("click", "button", function () {
    const filter = $(this).data("filter");
    isopote.isotope({ filter });
    $("button").removeClass();
    $(this).addClass("active-btn");
  });
});
