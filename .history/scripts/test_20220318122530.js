$(document).ready(function () {
  $(".active-btn").trigger("click");
  $(".row").isotope({
    // options
    itemSelector: "img",
    layoutMode: "fitRows",
  });
});
const renderbtn = () => {
  let btns = $("button").remove();
  console.log(btns);
};
$(".btns").on("click", "button", function () {
  const filter = $(this).data("filter");
  $(".row").isotope({ filter });
  console.log("active ", $(this).hasClass("active-btn"));
  renderbtn();
});
