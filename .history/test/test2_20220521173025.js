const viewProduct = [];
$(".btn").click(function (e) {
  e.preventDefault();
  const id = $(this).data("id");
  const div = document.createElement("div");
  div.classList.add("added-product");
  div.innerHTML = `<div class="name">hihi ${id}</div>`;
  document.querySelector(".active-added-product").appendChild(div);
  let countShowProduct = document.querySelectorAll(".added-product");
  $(".added-product").last().addClass("show-product");
  setTimeout(() => {
    $(".added-product").first().addClass("hidden-product");
    $(".added-product").first().remove();
  }, 500);
  if (countShowProduct.length >= 2) {
    $(".added-product").first().addClass("hidden-product");
    setTimeout(() => {
      $(".added-product").first().remove();
    }, 200);
  }
});
