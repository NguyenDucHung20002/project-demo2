$(document).ready(function () {
  $(".demo").isotope({
    // options
    itemSelector: "img",
    layoutMode: "fitRows",
    fitRows: {
      gutter: 10,
    },
  });
  const filter = $(".active-btn").data("filter");
  $(".demo").isotope({ filter });
  const widthimg = $("img").width();
  $(".demo").forEach((val) => {
    val.css("height", `${widthimg}px`);
  });
});

$(".btns").on("click", "button", function () {
  const filter = $(this).data("filter");
  $(".demo").isotope({ filter });
  $("button").removeClass();
  $(this).addClass("active-btn");
});
