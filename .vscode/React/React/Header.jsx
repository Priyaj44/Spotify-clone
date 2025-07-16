import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="navbar">
      <h1><Link to="/">ShopEase</Link></h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/checkout">Cart</Link>
      </nav>
    </header>
  );
}

export default Header;
