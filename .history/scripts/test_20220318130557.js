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
  $(".btns").append(`<button data-filter="*">ALL</button>
  <button data-filter=".category-1">category 1</button>
  <button data-filter=".category-2">category 2</button>`);
  $("button").click(function () {
    $(this).addClass("active-btn");
  });
};
$(".btns").on("click", "button", function () {
  const filter = $(this).data("filter");
  $(".row").isotope({ filter });
  renderbtn();
});
