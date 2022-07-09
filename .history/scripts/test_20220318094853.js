$(document).ready(function () {
  const isotope = $(".row").isotope({
    // options
    itemSelector: "img",
    layoutMode: "fitRows",
  });
});
$(".btns").on("click", "button", function () {
  const filter = $(this).data("filter");
  console.log("filter ", filter);
});
