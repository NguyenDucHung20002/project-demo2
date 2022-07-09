$(document).ready(function () {
  const isotope = $(".demo").isotope({
    // options
    itemSelector: ".grid-item",
    percentPosition: true,
    masonry: {
      // use element for option
      columnWidth: ".grid-sizer",
    },
    itemSelector: "img",
    layoutMode: "fitRows",
  });
  // const wimg = $("img").width();
  // $(".demo").forEach((val) => {
  //   val.css("height", `${wing}px`);
  // });
  // $("#actived").trigger("click");
  $(".btns").on("click", "button", function () {
    const filter = $(this).data("filter");
    isotope.isotope({ filter: filter });
    // $("button").removeClass();
    // $(this).addClass("active-btn");
  });
});
