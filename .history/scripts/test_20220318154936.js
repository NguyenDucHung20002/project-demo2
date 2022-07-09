$(document).ready(function () {
  const isopote = $(".demo").isotope({
    // options
    itemSelector: "img",
    layoutMode: "fitRows",
  });
  //
  $(".btns").on("click", "button", function () {
    const filter = $(this).data("filter");
    isopote.isotope({ filter });
    // $("button").removeClass();
    // $(this).addClass("active-btn");
  });
});
