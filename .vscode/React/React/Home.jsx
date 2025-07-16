import React from 'react';
import ProductList from '../components/ProductList';

function Home() {
  return (
    <section className="home">
      <h2>Featured Products</h2>
      <ProductList />
    </section>
  );
}

export default Home;
