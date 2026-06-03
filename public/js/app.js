const API = "http://localhost:5000/api";

// PRODUCTS

if (document.getElementById("products")) {
  fetch(`${API}/products`)
    .then((res) => res.json())
    .then((products) => {
      const container = document.getElementById("products");

      products.forEach((product) => {
        container.innerHTML += `
          <div class="card">

            <img
              src="https://via.placeholder.com/250x180"
              alt="${product.name}"
              class="product-img"
            >

            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <p class="price">
              ₹${product.price}
            </p>

            <button onclick="addToCart('${product._id}')">
              Add To Cart
            </button>

          </div>
        `;
      });
    });
}

// REGISTER

const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    const res = await fetch(`${API}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    await res.json();

    alert("Registration Successful");

    window.location.href = "login.html";
  });
}

// LOGIN

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    const res = await fetch(`${API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    localStorage.setItem("token", result.token);

    alert("Login Successful");

    window.location.href = "index.html";
  });
}

// CART

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(id);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product Added To Cart");
}

// SHOW CART

if (document.getElementById("cartItems")) {
  loadCart();
}

async function loadCart() {
  const cartItemsDiv = document.getElementById("cartItems");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = `
      <h2>Your Cart Is Empty</h2>
    `;
    return;
  }

  for (let productId of cart) {
    const res = await fetch(`${API}/products/${productId}`);
    const product = await res.json();

    cartItemsDiv.innerHTML += `
      <div class="card">

        
        <h3>${product.name}</h3>

        <p>${product.description}</p>

        <p class="price">
          ₹${product.price}
        </p>

        <button onclick="removeFromCart('${product._id}')">
          Remove
        </button>

      </div>
    `;
  }
}

function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart = cart.filter((item) => item !== id);

  localStorage.setItem("cart", JSON.stringify(cart));

  location.reload();
}

function checkout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  localStorage.removeItem("cart");

  window.location.href = "success.html";
}