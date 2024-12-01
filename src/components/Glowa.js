import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <nav className="header">
      <div className="header-logo">SoleShoe</div>
      <ul className="header-menu">
        <li>Home</li>
        <li>Shop</li>
        <li>New Arrivals</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Header;
