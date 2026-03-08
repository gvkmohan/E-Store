const products = [
  { id: 1, name: "Earphones", price: 1000 },
  { id: 2, name: "Bluetooth Speaker", price: 500 },
  { id: 3, name: "Watch", price: 2000 }
];

let cart = [];

function displayProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    container.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);

  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total-price");
  const cartCount = document.getElementById("cart-count");

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ₹${item.price}
      <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
    `;

    cartItems.appendChild(li);
  });

  totalPrice.innerText = total;
  cartCount.innerText = cart.length;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

displayProducts();