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
  if (countShowProduct.length >= 2) {
    $(".added-product").first().addClass("hidden-product");
    setTimeout(() => {
      $(".added-product").first().remove();
    }, 400);
  }
  setTimeout(() => {
    $(".added-product").addClass("hidden-product");
  }, 500);
});
