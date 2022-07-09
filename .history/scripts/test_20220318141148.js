$(document).ready(function () {
  $(".active-btn").trigger("click");
  $(".demo").isotope({
    // options
    itemSelector: "img",
    layoutMode: "fitRows",
  });
});
const widthimg = $("img").width();
console.log("width", width);
$(".demo").forEach((val) => {
  val.css("height", `${widthimg}px`);
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
