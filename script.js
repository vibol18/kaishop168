import { products } from "./product.js";
import { addToCart } from "./addtocart.js";
export const SearchIteam = document.getElementById(".search-input")
export const searchForm = document.getElementById("/.search-form")
export const productContainer = document.getElementById("product-container");
 export const cartcount = document.getElementById(".cart-count");
const totalDisplay = document.getElementById("total");

function updateCartCount() {
    const carts = JSON.parse(localStorage.getItem("carts")) || [];
    const cartCountElement = document.querySelector(".cart-count");
    const totalItems = carts.reduce((acc, item) => acc + item.quantity, 0);
    cartCountElement.textContent = totalItems;
  }
  updateCartCount();
window.addToCart = addToCart;

export const showProduct = (productsData) => {
  let cards = "";
  productsData.forEach((value) => {
    cards += `
        <div class="product-card">
            <div class="product-image">
                <img src="${value.image}" style="object-fit: contain;" alt="Smartphone">
                <div class="product-badge sale">Sale</div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${value.name}</h3>
                <p class="product-description">${value.description}</p>
                <div class="product-rating">
                    <div class="stars">
                        <span class="star filled">★</span>
                        <span class="star filled">★</span>
                        <span class="star filled">★</span>
                        <span class="star filled">★</span>
                        <span class="star">★</span>
                    </div>
                    <span>${value.rate}</span>
                </div>
                <div class="product-price">
                    <span class="current">$${value.price}</span>
                    <span class="original">$${value.price}</span>
                </div>
                <div class="product-actions">
                    <a href="product-detail.html?id=${value.id}" class="btn btn-outline">View</a>
                    <button class="btn btn-primary" onclick="addToCart(${value.id}, 1)">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
  });
  productContainer.innerHTML = cards;
};
showProduct(products);
