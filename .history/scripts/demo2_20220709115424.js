//--------reder products --------------
const productsFeatrued = [
  {
    id: 9,
    animation: "left",
    label: "35% off",
    typeLabel: "off",
    namepduct: "Hand Electric Sell",
    image: "icon/product-9.jpg",
    type: "ACCESSORIES",
    price: 26.0,
    del: "$38.00",
    review: 6,
    stars: 5,
  },
  {
    id: 10,
    animation: "left",
    label: "NEW",
    typeLabel: "new",
    namepduct: "Season Sports Blue Sneaker",
    image: "icon/product-10.jpg",
    type: "CHOES",
    price: 119.58,
    del: "",
    review: 52,
    stars: 4,
  },
  {
    id: 11,
    animation: "left",
    label: "",
    typeLabel: "",
    namepduct: "Hempen Hood a Mourner",
    image: "icon/product-11.jpg",
    type: "WOMEN",
    price: 43.26,
    del: "",
    review: 42,
    stars: 4,
  },
  {
    id: 12,
    animation: "left",
    label: "new",
    typeLabel: "new",
    namepduct: "Women's Fashion Handbag",
    image: "icon/product-12.jpg",
    type: "BAGS AND BACKPACKS",
    price: 184.0,
    del: "",
    review: 42,
    stars: 4,
  },
];
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
renderProduct(products, ".product-menu");
productsFeatrued.forEach((val, index) => {
  $(`.product-featured-${index}`).append(
    `<div class="products-row-main">
        <div class="product ${val.animation}">
            <figure class="product-media ">           
                <img class="product-img" data-id="${val.id}" src="${
      val.image
    }" alt="">
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
function renderProduct(products = [], selector = "") {
  products.forEach((val, i) => {
    $(selector).append(
      `<div class="col-lg-3 col-md-4 col-xs-md-6 products-row-main">
        <div class="product ${val.animation}">
            <figure class="product-media ">           
                <img class="product-img" data-id="${val.id}" src="${
        val.image
      }" alt="">
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
$(document).ready(function () {
  $(".owl-carousel.banner-items").owlCarousel({
    items: 1,
    loop: true,
    animateOut: "fadeOut",
  });
  $(".owl-carousel.product-menu-sec").owlCarousel({
    items: 4,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  });
  $(".owl-carousel.service-list").owlCarousel({
    items: 4,
    responsive: {
      0: {
        items: 1,
        autoplay: true,
        loop: true,
      },
      576: {
        items: 2,
        autoplay: true,
        loop: true,
      },
      768: {
        items: 3,
        autoplay: true,
        loop: true,
      },
      992: {
        items: 4,
      },
    },
  });
  $(".owl-carousel.instagram-list").owlCarousel({
    items: 4,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });
});
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
  let boole = false;
  let booletwo = false;
  let boolethree = false;
  $(".mobile-menu").click(function (e) {
    boole = true;
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
    booletwo = true;
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
  window.addEventListener("resize", function (e) {
    let winwidth = window.innerWidth;
    if (winwidth >= 992 && boole === true && booletwo === false) {
      $(".header-btm-mobile").trigger("click");
      boolethree = true;
    }
    if (winwidth >= 992 && boole === true && booletwo === true) {
      $(".header-btm-mobile")
        .css("visibility", "visible")
        .css("opacity", "1")
        .find(".container")
        .css("transform", "translate(0)")
        .find(".content-menu-mobile")
        .css("transform", "translateY(0)");
      $("body").removeClass("hide-scroll");
    } else if (winwidth < 992 && boole === true && booletwo === true) {
      $(".header-btm-mobile").trigger("click");
      boole = false;
      booletwo = false;
      boolethree = true;
    }
    if (winwidth >= 992 && boolethree === true) {
      $(".header-btm-mobile")
        .css("visibility", "visible")
        .css("opacity", "1")
        .find(".container")
        .css("transform", "translate(0)")
        .find(".content-menu-mobile")
        .css("transform", "translateY(0)");
      boolethre = false;
    } else if (winwidth < 992 && boolethree === true) {
      $(".header-btm-mobile").trigger("click");
      boole = false;
      booletwo = false;
    }
  });
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

  if (top > 140 && top > lastScroll && windowWidth < 992) {
    $(".sticky-menu-mobile")
      .addClass("active-menu-mobile")
      .removeClass("hide-active-menu-mobile");
    flagScrollmobile = 1;
  } else if (top <= lastScroll && flagScrollmobile === 1 && windowWidth < 992) {
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
    if (top + windowHeight >= $(".prods-categories").offset().top) {
      $(".prods-categories").animate(
        {
          opacity: "1",
        },
        1000
      );
    }
    if (top + windowHeight >= $(".section-sale").offset().top) {
      $(".section-sale").animate(
        {
          opacity: "1",
        },
        1000
      );
    }
    if (top + windowHeight >= $(".product-menu-sec").offset().top) {
      $(".product-menu-sec")
        .animate(
          {
            opacity: "1",
            left: "50px",
          },
          1000
        )
        .addClass("animation-left");
    }
    if (top + windowHeight >= $(".service-list").offset().top) {
      $(".service-list").animate(
        {
          opacity: "1",
          left: "100px",
        },
        1000
      );
    }
    if (top + windowHeight >= $(".our-instagram").offset().top) {
      $(".our-instagram").animate(
        {
          opacity: "1",
        },
        500
      );
    }
  });
}
window.addEventListener("load", function (e) {
  rederScroll();
});
// MOBILE MENU
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
      productsFeatrued.forEach((val) => {
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
let indexOldeQuantity;
document.addEventListener("click", function (e) {
  target = e.target;
  inputControl = target.closest(".quantity-control");
  btnMinus = target.closest(".quantity-minus");
  btnPlus = target.closest(".quantity-plus");
  btnCheck = target.closest(".for-check-total");
  delcart = target.closest(".del-cart");
  if (delcart) {
    const indDelCart = delcart.dataset.id;
    const fidindCart = cart.findIndex((val) => val.id == indDelCart);
    cart.splice(fidindCart, 1);
    document.querySelector(
      ".icon-bag .cart-quantity"
    ).innerHTML = `${cart.length}`;
    renderCart();
  }
  if (inputControl) {
    indexOldeQuantity = inputControl.dataset.id;
  }
  if (btnCheck) {
    const index = btnCheck.dataset.id;
    cart.forEach((val) => {
      if (val.id == index) {
        val.check = !val.check;
      }
    });
    renderCart();
  }
  if (btnPlus) {
    const indxCart = cart.findIndex((val) => val.id == btnPlus.dataset.id);
    if (cart[indxCart].quantity < 1000 && cart[indxCart].check === true) {
      cart[indxCart].quantity++;
      cart[indxCart].total += cart[indxCart].price;
      cart[indxCart].total = Math.round(cart[indxCart].total * 1000) / 1000;
    }
    renderCart();
  }
  if (btnMinus) {
    const indxCart = cart.findIndex((val) => val.id == btnMinus.dataset.id);
    if (cart[indxCart].quantity > 0 && cart[indxCart].check === true) {
      cart[indxCart].quantity--;
      cart[indxCart].total -= cart[indxCart].price;
      cart[indxCart].total = Math.round(cart[indxCart].total * 1000) / 1000;
    }
    renderCart();
  }
});
// Subtotal
function getquantity() {
  //contact with input by onchance="getquantity()"
  const quantity = document.getElementById(`fname-${indexOldeQuantity}`);
  const getid = quantity.dataset.id;
  cart.forEach((val) => {
    if (val.id == getid) {
      val.quantity = Number(quantity.value);
      val.total = val.price * Number(quantity.value);
      val.total = Math.round(val.total * 1000) / 1000;
    }
  });
  renderCart();
}
$(document).ready(function () {
  //show cart
  $(".cart-lable").on("click", ".icon-bag", function () {
    $(".wrapper-sticky-cart").css("visibility", "visible").css("opacity", "1");
    $(".sticky-cart").css("transform", "translateX(0)");
    $("body").addClass("hide-scroll");
  });
  //hide cart
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
  // add to cart and ply to cart
  let countCart = 0;
  $(".product-action").on("click", ".cart", function () {
    //add to cart
    setTimeout(() => {
      document.querySelector(
        ".icon-bag .cart-quantity"
      ).innerHTML = `${cart.length}`;
    }, 500);
    let index = $(this).data("id");
    products.forEach((val) => {
      if (index == val.id) {
        let indCart = cart.findIndex((valCart) => valCart.id == index);
        if (indCart >= 0) {
          cart[indCart].quantity++;
          cart[indCart].total += val.price;
          cart[indCart].total = Math.round(cart[indCart].total * 1000) / 1000;
        } else {
          cart.push({
            id: val.id,
            name: val.namepduct,
            img: val.image,
            price: val.price,
            quantity: 1,
            check: true,
            total: val.price,
          });
        }
      }
    });
    productsFeatrued.forEach((val) => {
      if (index == val.id) {
        let indCart = cart.findIndex((valCart) => valCart.id == index);
        if (indCart >= 0) {
          cart[indCart].quantity++;
          cart[indCart].total += val.price;
          cart[indCart].total = Math.round(cart[indCart].total * 1000) / 1000;
        } else {
          cart.push({
            id: val.id,
            name: val.namepduct,
            img: val.image,
            price: val.price,
            quantity: 1,
            check: true,
            total: val.price,
          });
        }
      }
    });
    //ply yp cart
    const imgproduct = $(this)
      .parent(".product-action")
      .parent(".product-media ")
      .find(".product-img");
    const iconBag = $(".icon-bag");

    let imgclone = imgproduct
      .clone()
      .offset({
        top: imgproduct.offset().top + 20,
        left: imgproduct.offset().left + 20,
      })
      .css({
        opacity: "0.5",
        position: "absolute",
        height: "215px",
        width: "180px",
        "z-index": "100",
      })
      .appendTo($("body"))
      .animate(
        {
          top: iconBag.offset().top + 10,
          left: iconBag.offset().left + 10,
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
    renderCart();
  });
});
function renderCart() {
  let allCart = document.querySelectorAll(".wrapper-cart .product-cart");
  allCart.forEach((val) => {
    val.remove();
  });
  subtotal = cart.reduce((acc, val) => {
    return val.check === true ? acc + val.total : acc;
  }, 0);
  subtotal = Math.round(subtotal * 1000) / 1000;
  let totalNew = document.querySelector(".total");
  let cartPrice = document.querySelector(".cart-price");
  totalNew.innerHTML = `$${subtotal.toFixed(2)}`;
  cartPrice.innerHTML = `$${subtotal.toFixed(2)}`;
  cart.forEach((val) => {
    $(".wrapper-cart").append(`
  <div class="product-cart">
    <img src="${val.img}" alt="">
    <div class="content">
        <div class="name-product-cart">${val.name}</div>
        <div class="quantity-and-price">
           <div class="input-group-quantity">
               <button data-id="${val.id}" class="quantity-minus">-</button>
               <input class="quantity-control" data-id="${val.id}" id="fname-${
      val.id
    }" onchange="getquantity()" value="${
      val.quantity
    }" type="number" min="1" max="1000">
               <button data-id="${val.id}" class="quantity-plus">+</button>
           </div>
            <div class="price">$${val.price}</div>
        </div>
    </div>
    <div class="cart-action">
        <div class="check-total">
            <input id="check-total" ${
              val.check === true ? "checked" : ""
            } type="checkbox">
            <label data-id="${
              val.id
            }" class="for-check-total" for="check-total"></label>
        </div>
        <div data-id="${val.id}" class="del-cart">
            <i class="fa-solid fa-xmark"></i>
        </div>
    </div>
</div>
    `);
  });
}

// -------- wislist --------------
// ---------- login and register ------------
const stickyLogin = `
<div class="wrapper-login-register">
          <div class="login-or-register">
              <div class="close"></div>
              <div class="get-form">
                  <button class="active-form click-login" data-id="login">loing</button>
                  <h3>or</h3>
                  <button class="active-form click-register" data-id="register">register</button>
              </div>
              <form action="#">
                  <div class="login">
                      <input type="text" class="form-control" id="login-form"
                          placeholder="Username or Email Address *">
                      <input type="password" class="form-control" id="login-password" placeholder="Password *">
                      <div class="action">
                          <div class="remember">
                              <input type="checkbox" class="custom-checkbox" id="login-check">
                              <label for="login-check">Remember me</label>
                          </div>
                          <button class="loseing-pass">Lost your password?</button>
                      </div>
                      <button class="login-submit">LOGIN</button>
                      <h4>or Login With</h4>
                  </div>
                  <div class="register">
                      <input type="text" class="form-control" id="login-form" placeholder="Your Email Address *">
                      <input type="password" class="form-control" id="login-password" placeholder="Password *">
                      <div class="action">
                          <div class="remember">
                              <input type="checkbox" class="custom-checkbox" id="register-check">
                              <label for="register-check">I agree to the privacy policy</label>
                          </div>
                      </div>
                      <button class="login-submit">register</button>
                      <h4>or Register With</h4>
                  </div>
              </form>
              <div class="with-infor">
                  <div class="google get-infor"><i class="fa-brands fa-google"></i></div>
                  <div class="facebook get-infor"><i class="fa-brands fa-facebook-f"></i></div>
                  <div class="twitter get-infor"><i class="fa-brands fa-twitter"></i></div>
              </div>
          </div>
      </div>
`;
let wrapperAll = document.querySelector(".wrapper-all");
$(".get-register").click(function (e) {
  wrapperAll.insertAdjacentHTML("afterbegin", stickyLogin);
  actionLogin();
  $(".click-register").trigger("click");
  $("body").addClass("hide-scroll");
  $(".wrapper-login-register").animate(
    {
      opacity: "1",
    },
    300
  );
});
$(".get-login").click(function (e) {
  wrapperAll.insertAdjacentHTML("afterbegin", stickyLogin);
  actionLogin();
  $(".click-login").trigger("click");
  $("body").addClass("hide-scroll");
  $(".wrapper-login-register").animate(
    {
      opacity: "1",
    },
    300
  );
});
function actionLogin() {
  $(".login-or-register").click(function (e) {
    e.stopPropagation();
  });
  $(".wrapper-login-register").click(function (e) {
    const formlogin = document.querySelector(".wrapper-login-register");
    console.log(formlogin);
    $(".wrapper-login-register").animate(
      {
        visibility: "hidden",
        opacity: "0",
      },
      300
    );
    setTimeout(() => {
      formlogin.parentNode.removeChild(formlogin);
      $("body").removeClass("hide-scroll");
    }, 300);
  });
  $(".active-form").click(function (e) {
    e.preventDefault();
    $(".active-form").css({
      color: "#999999",
      "font-size": "18px",
    });
    $(this).css({
      color: "#222222",
      "font-size": "30px",
    });
    const getid = $(this).data("id");

    if (getid === "login") {
      $(".register").addClass("action-in");
      $(".login").removeClass("action-in");
    } else if (getid === "register") {
      $(".login").addClass("action-in");
      $(".register").removeClass("action-in");
    }
  });
}
const dettailProduct = `
<div class="wrapper-detail-product">
            <div class="detail-product row">
                <div class="detail-img col-md-6 col-xs-sm-12">
                    <div class="slider-main">
                        <div class="wrapper-img">
                            <div class="slider-img">
                                <img src="icon/view-small-1.jpg" />
                            </div>
                            <div class="slider-img">
                                <img src="icon/view-small-2.jpg" />
                            </div>
                            <div class="slider-img">
                                <img src="icon/view-small-3.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="prev direction"><i class="fa-solid fa-angle-left prev-dir"></i></div>
                    <ul class="slider-dots">
                        <li class="slider-dot-items action-dot" data-id="0"></li>
                        <li class="slider-dot-items" data-id="1"></li>
                        <li class="slider-dot-items" data-id="2"></li>
                    </ul>
                    <div class="next direction"><i class="fa-solid fa-angle-right next-dir"></i></div>
                </div>
                <div class="detailed-product-content col-md-6 col-xs-sm-12">
                    <div class="name-product">Converse Training Shoes</div>
                    <div class="origin">
                        <div class="sku">SKU: 12345670</div>
                        <div class="brand">BRAND: The Northland</div>
                    </div>
                    <div class="price">$113.00</div>
                    <div class="rating-content">
                        <div class="rating-star">
                            <div class="hover-stars">4.00
                                <div class="arrow-down"></div>
                            </div>
                            <i class="fa-solid fa-star action-star"></i>
                            <i class="fa-solid fa-star action-star"></i>
                            <i class="fa-solid fa-star action-star"></i>
                            <i class="fa-solid fa-star action-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="review">( 11 Reviews )</div>
                    </div>
                    <p class="product-content">
                        Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu
                        augue. Morbi purus liberpuro ate vol faucibus adipiscing.
                    </p>
                    <div class="wrapper-color">
                        <p>Color: </p>
                        <div class="color blue" data-id="1">
                            <div class="blue"></div>
                        </div>
                        <div class="color green" data-id="2">
                            <div class="green"></div>
                        </div>
                        <div class="color brown" data-id="3">
                            <div class="brown"></div>
                        </div>
                    </div>
                    <div class="product-size">
                        <div class="wrapper-size">
                          <p>size:</p>
                          <button class="size" data-size="m">M</button>
                          <button class="size" data-size="l">L</button>
                        </div>
                        <button class="clean-all">Clean All</button>
                    </div>
                    <div class="total-price">$50.00</div>
                    <div class="action-product-cart">
                        <div class="quantity">
                            <button class="quantity-minus">-</button>
                            <input type="number" min="1" max="1000" value="1">
                            <butuon class="quantity-plus">+</butuon>
                        </div>
                        <button class="add"><i class="fa-solid fa-bag-shopping"></i> Add to Cart</button>
                    </div>
                    <div class="action-more">
                        <div class="infor">
                            <a class="face" href=""><i class="fa-brands fa-facebook-f"></i></a>
                            <a class="twitter" href=""><i class="fa-brands fa-twitter"></i></a>
                            <a class="pinterest" href=""><i class="fa-brands fa-pinterest-p"></i></a>
                        </div>
                        <div class="add-wishlist "><i class="fa-regular fa-heart"></i> Add to Wishlist</div>
                        <div class="add-compare"><i class="fa-solid fa-scale-balanced"></i> Add to compare</div>
                    </div>
                </div>
            </div>
        </div>`;

$(".product-action-view").click(function (e) {
  e.preventDefault();
  const top = $("html, body").scrollTop();
  wrapperAll.insertAdjacentHTML("afterbegin", dettailProduct);
  $("body").addClass("hide-scroll");
  $(".wrapper-detail-product").offset({
    top: top,
    left: 0,
  });
  $(document).ready(function () {
    $(".wrapper-detail-product").click(function (e) {
      e.preventDefault();
      $(".wrapper-detail-product").animate(
        {
          opacity: "0",
        },
        300
      );
      setTimeout(() => {
        $(".wrapper-detail-product").remove();
      }, 300);
      $("body").removeClass("hide-scroll");
    });
  });
  $(".detail-product").click(function (e) {
    e.stopPropagation();
  });
  window.addEventListener("resize", function (e) {
    const detailProduct = document.querySelector(".detail-product");
    if (detailProduct) {
      let dotindex = $(".action-dot").data("id");
      $(".slider-dots .slider-dot-items").eq(dotindex).trigger("click");
    }
  });
  const sliderDots = document.querySelectorAll(".slider-dot-items");
  const wrapImg = document.querySelector(".wrapper-img");
  const imgItem = document.querySelectorAll(".slider-img");
  const btnPrev = document.querySelector(".prev");
  const btnnext = document.querySelector(".next");
  const sliderLeng = imgItem.length;
  let position = 0;
  let index = 0;
  [...sliderDots].forEach((val) => {
    val.addEventListener("click", function (e) {
      const hightSliderItem = $(".slider-img").find("img").height();
      $(".detailed-product-content").css("max-height", `${hightSliderItem}px`);
      const widthSliderItem = imgItem[0].offsetWidth;
      [...sliderDots].forEach((el) => el.classList.remove("action-dot"));
      e.target.classList.add("action-dot");
      const dotindex = parseInt(e.target.dataset.id);
      index = dotindex;
      position = -1 * dotindex * widthSliderItem;
      wrapImg.style = `transform: translateX(${position}px)`;
    });
  });
  btnPrev.addEventListener("click", function (e) {
    const hightSliderItem = $(".slider-img").find("img").height();
    console.log("hightSliderItem:", hightSliderItem);
    $(".detailed-product-content").css("max-height", `${hightSliderItem}px`);
    const widthSliderItem = imgItem[0].offsetWidth;
    if (index > 0) {
      index--;
      position += widthSliderItem;
      wrapImg.style = `transform: translateX(${position}px)`;
      [...sliderDots].forEach((el) => el.classList.remove("action-dot"));
      sliderDots[index].classList.add("action-dot");
    }
  });

  btnnext.addEventListener("click", function (e) {
    const widthSliderItem = imgItem[0].offsetWidth;
    if (index < sliderLeng - 1) {
      index++;
      position -= widthSliderItem;
      wrapImg.style = `transform: translateX(${position}px)`;
      [...sliderDots].forEach((el) => el.classList.remove("action-dot"));
      sliderDots[index].classList.add("action-dot");
    }
  });
  let price = 113.0;
  let color = false;
  let size = false;
  const priceColor = [
    {
      id: 1,
      price: 10.0,
    },
    {
      id: 2,
      price: 0.0,
    },
    {
      id: 3,
      price: 5.0,
    },
  ];
  const priceSize = [
    {
      id: "m",
      price: 0.0,
    },
    {
      id: "l",
      price: 5.0,
    },
  ];
  let getColor = 0;
  let getsize = 0;
  $(".wrapper-color").on("click", ".color", function (e) {
    let hasClass = $(this).hasClass("action-color");
    if (hasClass) {
      $(this).removeClass("action-color");
      color = false;
    } else {
      const idColor = $(this).data("id");
      priceColor.forEach((val) => {
        if (val.id === idColor) {
          getColor = val.price;
        }
      });
      let itemColor = document.querySelectorAll(".wrapper-color .color");
      itemColor.forEach((val) => val.classList.remove("action-color"));
      $(this).addClass("action-color");
      color = true;
    }
    if (color === true && size === true) {
      let total = 0;
      total += price + getColor + getsize;
      $(".total-price")
        .slideDown("fast")
        .text(`$${total.toFixed(2)}`);
      $(".clean-all").slideDown("fast");
      $(".action-product-cart .add").addClass("action-submit");
    } else {
      $(".total-price").slideUp("fast");
      $(".clean-all").slideUp("fast");
      $(".action-product-cart .add").removeClass("action-submit");
    }
  });
  $(".wrapper-size").on("click", ".size", function (e) {
    const idSize = $(this).data("size");
    console.log("idSize:", idSize);
    let hasClass = $(this).hasClass("action-size");
    if (hasClass) {
      $(this).removeClass("action-size");
      size = false;
    } else {
      let itemSize = document.querySelectorAll(".wrapper-size .size");
      itemSize.forEach((val) => val.classList.remove("action-size"));
      $(this).addClass("action-size");
      const idSize = $(this).data("size");
      priceSize.forEach((val) => {
        if (val.id === idSize) {
          getsize = val.price;
        }
      });
      size = true;
    }
    if (color === true && size === true) {
      let total = 0;
      total += price + getColor + getsize;
      console.log("total:", total.toFixed(2));
      $(".total-price")
        .slideDown("fast")
        .text(`$${total.toFixed(2)}`);
      $(".clean-all").slideDown("fast");
      $(".action-product-cart .add").addClass("action-submit");
    } else {
      $(".total-price").slideUp("fast");
      $(".clean-all").slideUp("fast");
      $(".action-product-cart .add").removeClass("action-submit");
    }
  });
  $(document).ready(function () {
    setTimeout(() => {
      $(".action-dot").trigger("click");
    }, 200);
  });
});
