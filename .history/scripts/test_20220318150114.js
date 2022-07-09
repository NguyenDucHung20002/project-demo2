$(document).ready(function () {
  console.log($(".actived"));
  $(".demo").isotope({
    // options
    itemSelector: "img",
    layoutMode: "fitRows",
  });
  const filter = $(".active").data("filter");
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
