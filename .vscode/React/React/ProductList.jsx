import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Wireless Headphones', price: 99.99 },
  { id: 2, name: 'Smartwatch', price: 149.99 },
];

function ProductList() {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;