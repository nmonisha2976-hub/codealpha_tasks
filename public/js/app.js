const API = "https://codealpha-tasks-mq2i.onrender.com/api";

/* ================= INIT ================= */

document.addEventListener("DOMContentLoaded", () => {
  loadProducts();

  const cartDiv = document.getElementById("cartItems");
  if (cartDiv) loadCart();
});

/* ================= PRODUCTS ================= */

function loadProducts() {
  const container = document.getElementById("products");
  if (!container) return;

  fetch(`${API}/products`)
    .then(res => res.json())
    .then(products => {
      container.innerHTML = "";

      if (!Array.isArray(products)) {
        container.innerHTML = "<h2>No products found</h2>";
        return;
      }

      const uniqueProducts = [...new Map(products.map(p => [p._id, p])).values()];

      uniqueProducts.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";

        const image =
          product.image && product.image.trim() !== ""
            ? product.image
            : "https://via.placeholder.com/250x180";

        card.innerHTML = `
          <img 
            src="${image}"
            class="product-img"
            onerror="this.src='https://via.placeholder.com/250x180'"
          >

          <h3>${product.name || "No Name"}</h3>
          <p>${product.description || ""}</p>

          <p class="price">₹${product.price || 0}</p>

          <button onclick="addToCart('${product._id}')">
            Add To Cart
          </button>
        `;

        container.appendChild(card);
      });
    })
    .catch(err => {
      console.log("Products load error:", err);
      container.innerHTML = "<h2>Failed to load products</h2>";
    });
}

/* ================= REGISTER ================= */

const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    try {
      await fetch(`${API}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      alert("Registration Successful");
      window.location.href = "login.html";
    } catch (err) {
      console.log(err);
      alert("Registration Failed");
    }
  });
}

/* ================= LOGIN ================= */

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    try {
      const res = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.token) {
        localStorage.setItem("token", result.token);
        alert("Login Successful");
        window.location.href = "index.html";
      } else {
        alert("Invalid Credentials");
      }
    } catch (err) {
      console.log(err);
      alert("Login Failed");
    }
  });
}

/* ================= CART ================= */

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product Added To Cart");
}

/* ================= LOAD CART ================= */

async function loadCart() {
  const cartItemsDiv = document.getElementById("cartItems");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cartItemsDiv.innerHTML = "";

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<h2>Your Cart Is Empty</h2>";
    return;
  }

  for (let productId of cart) {
    try {
      const res = await fetch(`${API}/products/${productId}`);
      const product = await res.json();

      const card = document.createElement("div");
      card.className = "card";

      const image =
        product.image && product.image.trim() !== ""
          ? product.image
          : "https://via.placeholder.com/250x180";

      card.innerHTML = `
        <img 
          src="${image}"
          class="product-img"
          onerror="this.src='https://via.placeholder.com/250x180'"
        >

        <h3>${product.name}</h3>
        <p>${product.description}</p>

        <p class="price">₹${product.price}</p>

        <button onclick="removeFromCart('${product._id}')">
          Remove
        </button>
      `;

      cartItemsDiv.appendChild(card);
    } catch (err) {
      console.log("Cart load error:", err);
    }
  }
}

/* ================= REMOVE CART ================= */

function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter(item => item !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

/* ================= CHECKOUT ================= */

function checkout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  localStorage.removeItem("cart");
  window.location.href = "success.html";
}