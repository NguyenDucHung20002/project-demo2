$(document).ready(function () {
  $(".demo").isotope({
    // options
    itemSelector: "img",
    layoutMode: "fitRows",
  });
  //
  $(".btns").on("click", "button", function () {
    const filter = $(this).data("filter");
    $(".demo").isotope({ filter });
    // $("button").removeClass();
    // $(this).addClass("active-btn");
  });
});
