const express = require("express");
const app = express();

app.use(express.json());

const users = [];

app.post("/api/cart", (req, res) => {
    const { foodId } = req.body;

    res.json({
        success: true,
        foodId
    });
});

app.post("/api/signup", (req, res) => {
    const { name, email, password } = req.body;

    users.push({
        name,
        email,
        password
    });

    res.json({
        success: true,
        message: "User Registered"
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(item) {
  cart.push({ name: item, price: 50 });
  saveCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function renderCart() {
  let list = document.getElementById("cartList");
  if (!list) return;

  list.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    list.innerHTML += `
      <li>
        ${item.name} - ₹${item.price}
        <button onclick="removeItem(${index})">Remove</button>
      </li>
    `;
  });

  document.getElementById("total").innerText = total;
}

renderCart();
let foods = ["Maggie", "Momos", "Noodles", "Burger", "Pizza"];

function showFoods(list) {
  let container = document.getElementById("foodList");
  container.innerHTML = "";

  list.forEach(item => {
    container.innerHTML += `<h3>${item}</h3>`;
  });
}

showFoods(foods);
function searchFood() {
  let value = document.getElementById("searchBox").value.toLowerCase();

  let filtered = foods.filter(item =>
    item.toLowerCase().includes(value)
  );

  showFoods(filtered);
}
<script>
function searchFood() {
    let input = document.getElementById("search").value.toLowerCase();

    let cards = document.querySelectorAll(".food-card");

    cards.forEach(card => {
        let foodName = card.querySelector("h3").innerText.toLowerCase();

        if (foodName.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
</script>