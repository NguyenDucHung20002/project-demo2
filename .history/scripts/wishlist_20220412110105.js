//(--------------menu mobile------------
$(document).ready(function () {
  $(".mobile-menu").click(function (e) {
    $(".header-btm-mobile")
      .css("visibility", "visible")
      .css("opacity", "1")
      .css("transform", "translateX(-296px)")
      .find(".container")
      .css("transform", "translate(0)")
      .find(".content-menu-mobile")
      .css("transform", "translate(0)");
    $("body").addClass("hide-scroll");
    $(".page-wrapper").css("transform", "translateX(296px)");
  });
  $(".header-btm-mobile").click(function (e) {
    $(".header-btm-mobile")
      .css("visibility", "hidden")
      .css("opacity", "0")
      .css("transform", "translateX(0)")
      .find(".container")
      .css("transform", "translate(-100%)")
      .find(".content-menu-mobile")
      .css("transform", "translateY(150px)");
    $("body").removeClass("hide-scroll");
    $(".page-wrapper").css("transform", "translateX(0)");
  });
  $(".container").click(function (e) {
    e.stopPropagation();
  });
});
//(--------------menu mobile------------)
const windowHeight = $(window).height();
const windowWidth = $(window).width();
//-----------scroll animation banner----------
let flagScrollToTop = 0;
function rederScroll() {
  const top = $("html, body").scrollTop();
  console.log(top);
  //(-----------sticky scroll------------
  //(-----------header-middle------------
  if (top > 145 && windowWidth > 992) {
    $(".header-meddle").addClass("sticky-header-middle");
    $(".header-top").css("margin-bottom", "100px");
  } else {
    $(".header-meddle").removeClass("sticky-header-middle");
    $(".header-top").css("margin-bottom", "1px");
  }
  //(-----------scroll to top-----------
  if (top >= 400) {
    flagScrollToTop = 1;
    $(".sticky-scroll").addClass("active-scroll").removeClass("hide-scrolltop");
  }
  if (top < 400 && flagScrollToTop > 0) {
    $(".sticky-scroll").addClass("hide-scrolltop").removeClass("active-scroll");
  }
  //-----------scroll to top-----------)
}
function clickArrow(element = "", toggleSlide = "", parent = "") {
  $(element).on("click", function (e) {
    e.preventDefault();
    let bool = $(this).attr("data-toggle");
    if (bool === "false") {
      $(this).addClass("rotate-up").removeClass("rotate-right");
      $(this).attr("data-toggle", "true");
    } else if (bool === "true") {
      $(this).addClass("rotate-right").removeClass("rotate-up");
      $(this).attr("data-toggle", "false");
    }
    $(this).closest(parent).find(toggleSlide).slideToggle();
  });
}
$(document).ready(function () {
  //(-----------sticky scroll------------)
  $(".sticky-scroll").click(function (e) {
    e.preventDefault();
    const body = $("html");
    body.animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
  //(-----------sticky scroll------------
  rederScroll();
  $(window).scroll(function () {
    rederScroll();
  });
  //(----------btm dropdown menu--------------
  clickArrow(".btn-dropdown-main-menu", ".mega-menu-mobile", ".submenu");
  clickArrow(
    ".btn-dropdown-middle-menu",
    ".mega-menu-two-mobile",
    ".submenu-mobile"
  );
  //----------btm dropdown menu--------------)
});
