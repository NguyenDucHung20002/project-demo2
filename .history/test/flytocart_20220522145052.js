$(".add-to-cart").on("click", function () {
  let locateCart = $(".cart");
  var imgtodrag = $(this).parent(".product").find("img").eq(0);
  console.log(imgtodrag);
  if (imgtodrag) {
    var imgclone = { ...imgtodrag };
    console.log(imgclone);
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
