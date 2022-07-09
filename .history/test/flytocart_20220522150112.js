$(".add-to-cart").on("click", function () {
  let locateCart = $(".cart");
  let imgtodrag = $(this).parent(".product").find("img").eq(0);
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
        top: `${cart.offset().top + 10}px`,
        left: `${cart.offset().left + 10}px`,
        width: "75px",
        height: "75px",
      },
      1000,
      "easeInOutExpo"
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
