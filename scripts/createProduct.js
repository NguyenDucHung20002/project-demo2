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
renderProduct(productsFeatrued, ".product-menu-sec");
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
