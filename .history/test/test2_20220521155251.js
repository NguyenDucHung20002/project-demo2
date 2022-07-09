const viewProduct = [];
$(".btn").click(function (e) {
  e.preventDefault();
  const id = $(this).data("id");
  console.log("con cac", id);
  const div = document.createElement("div");
  div.classList.add("added-product");
  document.querySelector(".active-added-product").appendChild(div);
});
