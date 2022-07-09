const viewProduct = [];
let flag = 0;
$(".btn").click(function (e) {
  e.preventDefault();
  const id = $(this).data("id");
  const div = document.createElement("div");
  div.classList.add("added-product");
  div.innerHTML = `<div class="name">hihi ${id}</div>`;
  document.querySelector(".active-added-product").appendChild(div);
  let countShowProduct = document.querySelectorAll(".added-product");
  $(".added-product").last().addClass("show-product");
  flag = true;
  if (countShowProduct.length >= 2) {
    $(".added-product").first().addClass("hidden-last-product");
    setTimeout(() => {
      $(".added-product").first().remove();
    }, 400);
  } else {
    setTimeout(() => {
      $(".added-product").addClass("hidden-product");
    }, 6000);
    setTimeout(() => {
      $(".added-product").remove();
    }, 6400);
  }
});
