$(".owl-carousel.banner-items").owlCarousel({
  items: 1,
  loop: true,
  animateOut: "fadeOut",
});
//--------reder products --------------
const products = [
  {
    id: 1,
    animation: "left",
    label: "new",
    typeLabel: "new",
    namepduct: "Comfortable Brown Scart",
    image: "icon/product-1.jpg",
    type: "WONEM",
    price: 140.0,
    del: "",
    review: 12,
    stars: 5,
  },
  {
    id: 2,
    animation: "left",
    label: "27% off",
    typeLabel: "off",
    namepduct: "Cotton-padded Clothing",
    image: "icon/product-2.jpg",
    type: "CLOTHING",
    price: 125.99,
    del: "$160.99",
    review: 8,
    stars: 4,
  },
  {
    id: 3,
    animation: "right",
    label: "",
    typeLabel: "",
    namepduct: "Season Sports Sneaker",
    image: "icon/product-3.jpg",
    type: "SHOES",
    price: 78.64,
    del: "",
    review: 2,
    stars: 2,
  },
  {
    id: 4,
    animation: "right",
    label: "new",
    typeLabel: "new",
    namepduct: "Women Red Fur Overcoat",
    image: "icon/product-4.jpg",
    type: "CLOTHING",
    price: 184.0,
    del: "",
    review: 6,
    stars: 4,
  },
  {
    id: 5,
    animation: "left",
    label: "",
    typeLabel: "",
    namepduct: "Hempen Hood a Mourner",
    image: "icon/product-5.jpg",
    type: "WOMEN",
    price: 93.24,
    del: "",
    review: 9,
    stars: 2,
  },
  {
    id: 6,
    animation: "left",
    label: "new",
    typeLabel: "new",
    namepduct: "Women's Season Handbag",
    image: "icon/product-6.jpg",
    type: "BAGS & BACKPACKS",
    price: 61.35,
    del: "",
    review: 63,
    stars: 4,
  },
  {
    id: 7,
    animation: "right",
    label: "13% off",
    typeLabel: "off",
    namepduct: "Converse Blue Trainaing Shoes",
    image: "icon/product-7.jpg",
    type: "SHOES",
    price: 347.23,
    del: "$386.23",
    review: 14,
    stars: 2,
  },
  {
    id: 8,
    animation: "right",
    label: "",
    typeLabel: "",
    namepduct: "A Dress-Suit Valise",
    image: "icon/product-8.jpg",
    type: "BAGS & BACKPACKS",
    price: 78.23,
    del: "",
    review: 53,
    stars: 5,
  },
];
function renderstars(stars) {
  let starsString = "";
  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      starsString += `<i class="fa-solid fa-star active"></i>`;
    } else {
      starsString += `<i class="fa-solid fa-star"></i>`;
    }
  }
  return starsString;
}
renderProduct(products, ".product-menu");
function renderProduct(products = [], selector = "") {
  products.forEach((val, i) => {
    $(selector).append(
      `<div class="col-lg-3 col-md-4 col-xs-md-6 products-row-main">
        <div class="product ${val.animation}">
            <figure class="product-media ">
                <a class="product-img" href="">
                    <img data-id="${val.id}" src="${val.image}" alt="">
                </a>
                <div class="product-lable ${val.typeLabel}">${val.label}</div>
                <div class="product-action">
                    <a class="cart" data-id="${
                      val.id
                    }" href="#cart"><i class="fa-solid fa-bag-shopping"></i></a>
                    <a data-id="${
                      val.id
                    }" class="wishlist" href="#bag"><i class="fa-solid fa-heart"></i></a>
                </div>
                <div data-id="${
                  val.id
                }" class="product-action-view">quick view</div>
            </figure>
            <div class="product-details">
                <div class="product-cat">${val.type}</div>
                <h3 class="product-name">${val.namepduct}</h3>
                <div class="product-price">
                    <div class="price price-content">$${val.price}</div>
                    <div class="del price-content">${val.del}</div>
                </div>
                <div class="rating-content">
                    <div class="rating-star">
                      <div class="hover-stars">${val.stars}.00</div>
                      ${renderstars(val.stars)}
                    </div>
                    <div class="review">( ${val.review} Reviews )</div>
                </div>
            </div>
          </div>
      </div>`
    );
  });
  //--------reder products --------------
}
//--------reder products --------------
//------------model------------------
var hidePopup = localStorage.getItem("hidePopup");
$(document).ready(function () {
  setTimeout(() => {
    if (!hidePopup) {
      $(".model").fadeIn().css("display", "block");
      $("body").addClass("hide-scroll");
    }
  }, 5000);

  $(".model-close").click(function (e) {
    e.preventDefault();
    hidePopupEvent();
  });
  $(".model").click(function (e) {
    e.preventDefault();
    hidePopupEvent();
  });
  $(".model-wrapper").click(function (e) {
    e.stopPropagation();
  });
});
function hidePopupEvent() {
  $(".model").fadeOut(500);
  $("body").removeClass("hide-scroll");
  if ($("#show").is(":checked")) {
    localStorage.setItem("hidePopup", true);
  }
}
//(--------------menu mobile------------
$(document).ready(function () {
  if (windowWidth < 992) {
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
      $(".page-wrapper")
        .css("transform", "translateX(296px)")
        .css("z-index", "2000")
        .css("overflow", "unset");
      $(".wrapper-all").css("overflow", "hidden");
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
      $(".page-wrapper").css("transform", "translateX(0)").css("z-index", "1");
      setTimeout(() => {
        $(".page-wrapper").css("overflow-x", "hidden");
      }, 500);
      $(".wrapper-all").css("overflow", "unset");
    });
    $(".container").click(function (e) {
      e.stopPropagation();
    });
  }
});
//(--------------menu mobile------------)
//--------------model---------------
//-----------menu max content--------------
const windowHeight = $(window).height();
const windowWidth = $(window).width();
$(document).ready(function () {
  const widthContainer = $(".container").width();
  if (windowWidth > 992) {
    $(".mega-menu-container").css("width", `${widthContainer}px`);
  }
});
//-----------menu max content--------------
//-----------scroll animation banner----------
let flagScrollToTop = 0;
let flagScrollmobile = 0;
let lastScroll = 0;
function rederScroll() {
  const bannerBtmTop = $(".banner-btm > .product-banner").offset().top;
  const top = $("html, body").scrollTop();
  //(-----------sticky scroll------------
  //(-----------header-middle------------
  if (top > 145 && windowWidth > 992) {
    $(".header-meddle").addClass("sticky-header-middle");
    $(".header-top").css("margin-bottom", "100px");
  } else {
    $(".header-meddle").removeClass("sticky-header-middle");
    $(".header-top").css("margin-bottom", "1px");
  }
  //-----------scroll animation banner----------
  //-----------header-middle------------)
  //(-----------header-middle-mobile------------

  if (top > 140 && top > lastScroll && windowWidth < 768) {
    $(".sticky-menu-mobile")
      .addClass("active-menu-mobile")
      .removeClass("hide-active-menu-mobile");
    flagScrollmobile = 1;
  } else if (top <= lastScroll && flagScrollmobile === 1 && windowWidth < 768) {
    $(".sticky-menu-mobile")
      .addClass("hide-active-menu-mobile")
      .removeClass("active-menu-mobile");
  }
  lastScroll = top;
  //-----------header-middle-mobile------------)
  //(-----------scroll to top-----------
  if (top >= 400 && windowWidth > 992) {
    flagScrollToTop = 1;
    $(".sticky-scroll").addClass("active-scroll").removeClass("hide-scrolltop");
  }
  if (top < 400 && flagScrollToTop > 0) {
    $(".sticky-scroll").addClass("hide-scrolltop").removeClass("active-scroll");
  }
  //-----------scroll to top-----------)
  //-----------sticky scroll------------)
  //(-----------scroll animation banner----------
  if (top + windowHeight >= bannerBtmTop) {
    $(".banner-btm-left").addClass("animation-top");
    $(".banner-btm-right").addClass("animation-top-1s");
  }
  //-----------scroll animation banner----------)
  //(-----------scroll animation product----------)
  const productsMenu = $(".product-menu > .products-row-main");

  $.each(productsMenu, function (index, val) {
    //productsOffset.push($(val).offset().top);
    if (top + windowHeight >= $(val).offset().top) {
      $(".products-row-main")
        .eq(index)
        .find(".left")
        .addClass("animation-left");
      $(".products-row-main")
        .eq(index)
        .find(".right")
        .addClass("animation-right");
    }
  });
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
//-----------------sitcky wishlist-----------------
$(document).ready(function () {
  $(".dropdwon-like").on("click", ".icon-like", function () {
    $(".wrapper-sticky-wishlist")
      .css("visibility", "visible")
      .css("opacity", "1");
    $(".sticky-wishlist").css("transform", "translateX(0)");
  });
});
//-----------------sitcky wishlist--------------

const wishlist = [];
$(document).ready(function () {
  $(".dropdwon-like").on("click", ".icon-like", function () {
    $(".wrapper-sticky-wishlist")
      .css("visibility", "visible")
      .css("opacity", "1");
    $(".sticky-wishlist").css("transform", "translateX(0)");
    $("body").addClass("hide-scroll");
  });
  $(".nav-mobile").on("click", ".wishlist-mobile", function () {
    $(".wrapper-sticky-wishlist")
      .css("visibility", "visible")
      .css("opacity", "1");
    $(".sticky-wishlist").css("transform", "translateX(0)");
    $("body").addClass("hide-scroll");
  });
  $(".wrapper-sticky-wishlist").click(function (e) {
    e.preventDefault();
    $(".wrapper-sticky-wishlist")
      .css("visibility", "hidden")
      .css("opacity", "0");
    $(".sticky-wishlist").css("transform", "translateX(100%)");
    $("body").removeClass("hide-scroll");
  });
  $(".close-wishlist").click(function (e) {
    e.preventDefault();
    $(".wrapper-sticky-wishlist")
      .css("visibility", "hidden")
      .css("opacity", "0");
    $(".sticky-wishlist").css("transform", "translateX(100%)");
    $("body").removeClass("hide-scroll");
  });
});
function renderWishlist() {
  let productWL = document.querySelectorAll(
    ".wrapper-wishlist .product-wishlist"
  );
  productWL.forEach((val) => {
    val.remove();
  });
  wishlist.forEach((wl) => {
    $(".wrapper-wishlist").append(`
              <div class="product-wishlist">
                  <img src="${wl.img}" alt="">
                  <div class="content-wishlist">
                      <div class="name-product">
                          ${wl.nameProduct}
                      </div>
                      <div class="price">$${wl.price}</div>
                  </div>
                  <div data-id="${wl.id}" class="del-wishlist">
                      <i class="fa-solid fa-xmark"></i>
                  </div>
              </div>
    `);
  });
}
document.addEventListener("click", function (e) {
  const indexdelWL = e.target.closest(".del-wishlist");
  if (indexdelWL) {
    const indexdelWL = wishlist.findIndex(
      (val) => val.id == $(this).data("id")
    );
    wishlist.splice(indexdelWL, 1);
    renderWishlist();
  }
});
$(document).ready(function () {
  $(".product-action").on("click", ".wishlist", function () {
    flag = true;
    wishlist.forEach((val) => {
      if (val.id == $(this).data("id")) {
        alert("Already on the wishlist");
        flag = false;
      }
    });
    if (flag === true) {
      $(".sticky-wishlist").css("transform", "translateX(0)");
      setTimeout(() => {
        $(".sticky-wishlist").css("transform", "translateX(100%)");
      }, 1000);
      products.forEach((val) => {
        if (val.id == $(this).data("id")) {
          wishlist.push({
            id: val.id,
            img: val.image,
            nameProduct: val.namepduct,
            price: val.price,
            quantity: 1,
          });
        }
      });
      renderWishlist();
    }
  });
});
//-----------------sitcky wishlist--------------
//----------------sticky cart------------------
const cart = [];
let subtotal = 0;
$(document).ready(function () {
  $(".cart-lable").on("click", ".icon-bag", function () {
    $(".wrapper-sticky-cart").css("visibility", "visible").css("opacity", "1");
    $(".sticky-cart").css("transform", "translateX(0)");
    $("body").addClass("hide-scroll");
  });
  $(".wrapper-sticky-cart").click(function (e) {
    e.preventDefault();
    $(".wrapper-sticky-cart").css("visibility", "hidden").css("opacity", "0");
    $(".sticky-cart").css("transform", "translateX(100%)");
    $("body").removeClass("hide-scroll");
  });
  $(".close-cart").click(function (e) {
    e.preventDefault();
    $(".wrapper-sticky-cart").css("visibility", "hidden").css("opacity", "0");
    $(".sticky-cart").css("transform", "translateX(100%)");
    $("body").removeClass("hide-scroll");
  });
  $(".quantity-minus").click(function (e) {
    e.preventDefault();
    let getval = document.querySelector(".quantity-control");
    let count = parseInt(getval.value);
    if (count > 1) {
      getval.value = (count - 1).toString();
    }
  });
  $(".quantity-plus").click(function (e) {
    e.preventDefault();
    let getval = document.querySelector(".quantity-control");
    let count = parseInt(getval.value);
    if (count < 1000) {
      getval.value = (count + 1).toString();
    }
  });
  $(".quantity-control").click(function (e) {
    e.preventDefault();
  });
  $(".product-action").on("click", ".cart", function () {
    let index = $(this).data("id");
    products.forEach((val) => {
      if (index == val.id) {
        let indCart = cart.findIndex((valCart) => valCart.id == index);
        if (indCart >= 0) {
          cart[indCart].quantity++;
        } else {
          cart.push({
            id: val.id,
            name: val.namepduct,
            img: val.image,
            price: val.price,
            quantity: 1,
          });
        }

        console.log(cart[indCart]);
      }
    });
  });
});
