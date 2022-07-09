$(".add-to-cart").on("click", function () {
  let imgtodrag = $(this).parent(".product").find("img");
  let locateCart = $(".cart");
  let imgclone = imgtodrag.clone().offset({
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
    .appendTo($("body"))
    .animate(
      {
        top: locateCart.offset().top + 10,
        left: locateCart.offset().left + 10,
        width: 75,
        height: 75,
      },
      500
    );
  imgclone.animate(
    {
      width: 0,
      height: 0,
    },
    function () {
      $(this).detach();
    }
  );
});
