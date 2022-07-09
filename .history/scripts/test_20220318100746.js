$(document).ready(function () {
  $(".row").isotope({
    // options
    itemSelector: "img",
    layoutMode: "fitRows",
  });
});
$(".btns").on("click", "button", function () {
  const filter = $(this).data("filter");
  console.log("filter ", filter);
  $(".row").isotope({ filter });
});
