$(document).ready(function () {
  const isotope = $(".row").isotope({
    // options
    itemSelector: "img",
    layoutMode: "fitRows",
  });
});
$(".btns").on("click", function () {
  const filter = $("button").data("filter");
  console.log("filter ", filter);
});
