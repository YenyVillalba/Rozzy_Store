import React from 'react';
import './Navbar.css';
import logo from '../../assets/images/Rozz Store logo 2.png';
import { FaUser, FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Rozzy Store Logo" className="navbar-logo" />
        <h1 className="navbar-title">ROZZY STORE</h1>
      </div>

      <nav className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/products">Productos</Link>
        <Link to="/about">Sobre Nosotros</Link>
      </nav>

      <div className="navbar-search">
        <input type="text" placeholder="Buscar productos..." />
        <button><FaSearch /></button>
      </div>

      <div className="navbar-icons">
      
        <Link to="/favorites"><FaHeart /></Link>
        <Link to="/cart"><FaShoppingCart /></Link>
          <Link to="/profile"><FaUser /></Link>
      </div>
    </header>
  );
};

export default Navbar;
