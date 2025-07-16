// script.js
let cartCount = 0;
const cartItems = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (e) => {
    const productName = e.target.parentElement.querySelector('h2').innerText;
    cartItems.push(productName);
    cartCount++;
    document.getElementById('cartBtn').innerText = `🛒 Cart (${cartCount})`;
    updateCartModal();
  });
});

document.getElementById('cartBtn').addEventListener('click', () => {
  document.getElementById('cartModal').classList.remove('hidden');
});

function closeCart() {
  document.getElementById('cartModal').classList.add('hidden');
}

function updateCartModal() {
  const cartList = document.getElementById('cartItems');
  cartList.innerHTML = cartItems.map(item => `<li>${item}</li>`).join('');
}
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('dblclick', () => {
    const name = card.querySelector('h2').innerText;
    const price = card.querySelector('p').innerText;
    document.getElementById('quickTitle').innerText = name;
    document.getElementById('quickPrice').innerText = price;
    document.getElementById('quickView').classList.remove('hidden');
  });
});

function closeQuickView() {
  document.getElementById('quickView').classList.add('hidden');
}



// Toggle mobile menu
document.getElementById('menuToggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// SEARCH & FILTER
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const productCards = document.querySelectorAll('.product-card');

function filterProducts() {
  const query = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  productCards.forEach(card => {
    const name = card.dataset.name.toLowerCase();
    const type = card.dataset.category;

    const matchName = name.includes(query);
    const matchCategory = category === 'all' || type === category;

    card.style.display = matchName && matchCategory ? 'block' : 'none';
  });
}

searchInput.addEventListener('input', filterProducts);
categoryFilter.addEventListener('change', filterProducts);

// ADD TO CART COUNTER
let cartCount = 0;
const cartCountEl = document.getElementById('cartCount');
const addToCartButtons = document.querySelectorAll('.product-card button');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    cartCountEl.textContent = cartCount;
    showPopup("Added to cart!");
  });
});

// OPTIONAL: POPUP
function showPopup(message) {
  const popup = document.createElement('div');
  popup.className = 'cart-popup';
  popup.textContent = message;
  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 2000);
}
