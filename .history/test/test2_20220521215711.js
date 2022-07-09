const viewProduct = [];

const debounce = (func, wait) => {
  let Timeout;
  return (...rest) => {
    if (Timeout) clearTimeout(Timeout);
    Timeout = setTimeout(() => func(...rest), wait);
  };
};
$(".btn").on(
  "click",
  debounce((e) => {
    $(".added-product").slideUp(300, function () {
      $(".added-product").remove();
    });
  }, 3000)
);

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
    $(".added-product").first().addClass("hidden-last-product");
    setTimeout(() => {
      $(".added-product").first().remove();
    }, 500);
  }
});
