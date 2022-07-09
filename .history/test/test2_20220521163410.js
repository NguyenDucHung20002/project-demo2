const viewProduct = [];
$(".btn").click(function (e) {
  e.preventDefault();
  const id = $(this).data("id");
  const div = document.createElement("div");
  div.classList.add("added-product");
  div.innerHTML = `<div class="name">hihi ${id}</div>`;
  document.querySelector(".active-added-product").appendChild(div);
  $(".active-added-product").addClass("show-hidden-product");
  let countShowProduct = document.querySelectorAll(".added-product");
  if (countShowProduct.length >= 3) {
    $(".added-product").first().addClass("hidden-product");
  }
});
