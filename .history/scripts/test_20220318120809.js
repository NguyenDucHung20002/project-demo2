$(document).ready(function () {
  $(".active-btn").trigger("click");
  $(".row").isotope({
    // options
    itemSelector: "img",
    layoutMode: "fitRows",
  });
});
$(".btns").on("click", "button", function () {
  const filter = $(this).data("filter");
  $(".row").isotope({ filter });

  console.log("active ", $(this).hasClass("active-btn"));
});
