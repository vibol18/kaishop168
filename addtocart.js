import { products } from "./product.js";

let carts = JSON.parse(localStorage.getItem("carts")) || [];

export const addToCart = (id, qty = 1) => {
  // Find product
  const product = products.find(p => p.id == id);
  if (!product) return alert("Product not found!");

  // Check existing item
  const existing = carts.find(item => item.id == id);

  if (existing) {
    existing.quantity += qty;
  } else {
    carts.push({
      ...product,
      quantity: qty,
    });
  }

  // Save
  localStorage.setItem("carts", JSON.stringify(carts));
};
