let carts = JSON.parse(localStorage.getItem("carts")) || []

function renderCartItems(items) {
  const container = document.querySelector(".cart-items");
  const cartCount = document.querySelector('.cart-count')
  let cards = ""
  let totalItems = 0;
  let subtotal = 0;

  items.forEach(item => {
    totalItems += item.quantity;
    subtotal += item.price * item.quantity;

    cards += `
      <div class="cart-item">
        <div class="item-image">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="item-details">
          <h3>${item.name}</h3>
          <p class="item-description">Product Description</p>
          <div class="item-specs">
            <span>Color: Default</span>
            <span>Size: Standard</span>
          </div>
        </div>
        <div class="item-quantity">
          <button class="qty-btn minus" onclick="decrease(${item.id})">−</button>
          <input type="number" value="${item.quantity}" min="1" class="qty-input" readonly>
          <button class="qty-btn plus" onclick="increase(${item.id})">+</button>
        </div>
        <div class="item-price">
          <span class="current-price">$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
        <button class="remove-btn">×</button>
      </div>
    `;

  });
  container.innerHTML = ca;

  document.querySelector(".cart-header p").textContent = `${totalItems} items in your cart`;
  cartCount.textContent = totalItems;
  document.querySelector(".summary-row span:last-child").textContent = `$${subtotal.toFixed(2)}`;
  document.querySelector(".summary-row.total span:last-child").textContent = `$${(subtotal - 200 + 136).toFixed(2)}`;
}
renderCartItems(carts);

const increase = (id) => {
  carts = carts.map((item)=> item.id == id ? {...item, quantity: item.quantity+ 1} : item);
  localStorage.setItem("carts", JSON.stringify(carts));
  renderCartItems(carts);
}
window.increase = increase;

const decrease = (id) => {
  carts = carts.map((item)=> item.id == id ? {...item, quantity: item.quantity - 1} : item);
  localStorage.setItem("carts", JSON.stringify(carts));
  renderCartItems(carts);
}
window.decrease = decrease;
