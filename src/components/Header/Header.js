import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">Company Logo</a>
      </div>
      <nav className="nav-links">
        <a href="/products">Products</a>
        <a href="/catalogues">Catalogues</a>
        <a href="/brands">Brands</a>
        <a href="/about-us">About Us</a>
        <a href="/contact-us">Contact Us</a>
        <a href="/careers">Careers</a>
      </nav>
      <div className="header-buttons">
        <button className="login-button" onClick={() => console.log('Open Login Modal')}>
          Login
        </button>
        <button className="register-button" onClick={() => console.log('Open Register Modal')}>
          Register
        </button>
      </div>
      <div className="language-switcher">
        <button>EN</button>
        <button>AR</button>
      </div>
    </header>
  );
};

export default Header;
