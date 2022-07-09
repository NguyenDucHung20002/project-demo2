$(document).ready(function () {
  $(".actived").trigger("click");
  console.log($(".actived"));
  $(".demo").isotope({
    // options
    itemSelector: "img",
    layoutMode: "fitRows",
  });
  const widthimg = $("img").width();
  console.log("width", widthimg);
  $(".demo").forEach((val) => {
    val.css("height", `${widthimg}px`);
  });
});

$(".btn-actived").on("click", "button", function () {
  const filter = $(this).data("filter");
  $(".demo").isotope({ filter });
});
$(".btns").on("click", "button", function () {
  const filter = $(this).data("filter");
  $(".demo").isotope({ filter });
  $("button").removeClass();
  $(this).addClass("active-btn");
});
