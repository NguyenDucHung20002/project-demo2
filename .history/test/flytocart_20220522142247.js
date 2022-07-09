$(".add-to-cart").on("click", function () {
  let locateCart = $(".cart");
  let imgtodrag = $(this).parent(".product").find("img");
  let imgclone = imgtodrag.offset({
    top: imgtodrag.offset().top,
    left: imgtodrag.offset().left,
  });
});
