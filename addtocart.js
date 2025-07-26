import { products } from "./product.js";

let carts = JSON.parse(localStorage.getItem("carts")) || [];
export const addToCart = (id, qty) => {
  const productToAdd = products.find((value) => value.id == id);
  const checkIfAlreadyExist = carts.find((value) => value.id == id);

  if (checkIfAlreadyExist == undefined) {
    carts.push({ ...productToAdd, quantity: qty });
    localStorage.setItem("carts", JSON.stringify(carts));
  } else {
    carts = carts.map((value) =>
      value.id == id ? { ...value, quantity: value.quantity + qty } : value
    );
    localStorage.setItem("carts", JSON.stringify(carts));
  }
};