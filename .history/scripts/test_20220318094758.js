$(document).ready(function () {
  const isotope = $(".row").isotope({
    // options
    itemSelector: "img",
    layoutMode: "fitRows",
  });
});
$(document).on("click", function () {
  const filter = $(this);
  console.log("filter ", filter);
});
