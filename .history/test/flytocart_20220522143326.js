$(".add-to-cart").on("click", function () {
  let locateCart = $(".cart");
  var imgtodrag = $(this).parent(".product").find("img").eq(0);
  if (imgtodrag) {
    var imgclone = imgtodrag;
    imgclone
      .css({
        opacity: "0.5",
        position: "absolute",
        height: "150px",
        width: "150px",
        "z-index": "100",
      })
      .appendTo($("body"));
  }
});
