import { products } from "./product.js";
import { addToCart } from "./addtocart.js";

const imagePreview = document.getElementById("image-preview");
const productId = document.querySelector(".product-id");
const productCategory = document.querySelector(".product-category");
const productTitle = document.querySelector(".product-title");
const rateValue = document.querySelector(".rating-value");
const currentPrice = document.querySelector(".current-price");
const productDescription = document.querySelector(".product-description");

const urlParams = new URLSearchParams(new URL(window.location.href).search);
let id = urlParams.get("id");
id = parseInt(id, 10);

const productToShow = products.find((value) => value.id == id);

imagePreview.src = productToShow.image;
productId.textContent = `#0${productToShow.id}`;
productCategory.textContent = productToShow.category;
productTitle.textContent = productToShow.name;
rateValue.textContent = productToShow.rate;
currentPrice.textContent = productToShow.price;
productDescription.textContent = productToShow.description;

const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const quantity = document.getElementById("quantity");
let count = 1;
quantity.value = count;
const cartCount = document.querySelector('.cart-count')

minus.addEventListener("click", () => {
  count--;
  if (count < 1) {
    count = 1;
  }
  quantity.value = count;
});
plus.addEventListener("click", () => {
  count++;
  quantity.value = count;
});

addToCartBtn.addEventListener("click", () => {
  addToCart(id, count);
});
cartCount.textContent = cartCount;
