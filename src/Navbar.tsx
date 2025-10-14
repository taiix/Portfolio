import React from 'react';
import './style/navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><a className="nav-link" href="/index.html#home">Home</a></li>
        <li><a className="nav-link" href="/about.html">About</a></li>
        <li><a className="nav-link" href="/index.html#projects">Projects</a></li>
        <li><a className="nav-link" href="/index.html#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;