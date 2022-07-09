$(".add-to-cart").on("click", function () {
  let locateCart = $(".cart");
  let imgtodrag = $(this).parent(".product").find("img").eq(0);
  let imgclone = imgtodrag.offset({
    top: imgtodrag.offset().top,
    left: imgtodrag.offset().left,
  });
  imgclone
    .css({
      opacity: "0.5",
      position: "absolute",
      height: "150px",
      width: "150px",
      "z-index": "100",
    })
    .appendTo($("body"));
});
