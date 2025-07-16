function renderProducts(filter = "", category = "") {
  productList.innerHTML = "";
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(filter.toLowerCase()) &&
    (category === "" || p.category === category)
  );
  filtered.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('product');
    div.innerHTML = `
      <div class="badge">${product.new ? "New" : product.sale ? "Sale" : ""}</div>
      <img src="${product.img}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <div class="rating">${'⭐'.repeat(product.rating)}</div>
      <p class="price">₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}
