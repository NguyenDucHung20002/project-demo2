$(document).ready(function () {
  const isotope = $(".demo").isotope({
    // options
    itemSelector: "img",
    layoutMode: "fitRows",
  });
  // const wimg = $("img").width();
  // $(".demo").forEach((val) => {
  //   val.css("height", `${wing}px`);
  // });
  $(".btns").on("click", "button", function () {
    const filter = $(this).data("filter");
    console.log(filter);
    $(".demo").isotope({ filter: filter });
    $("button").removeClass();
    $(this).addClass("active-btn");
  });
  $("#actived").trigger("click");
});
