$(document).ready(function () {
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
const renderbtn = () => {
  let btns = $("button").removeClass();
};
$(".btns").on("click", "button", function () {
  const filter = $(this).data("filter");
  $(".demo").isotope({ filter });
  renderbtn();
  $(this).addClass("active-btn");
});
$(".btn-actived").on("click", "button", function () {
  const filter = $(this).data("filter");
  $(".demo").isotope({ filter });
});
