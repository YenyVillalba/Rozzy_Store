// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaWhatsapp, FaCcVisa, FaCcMastercard } from 'react-icons/fa';


const Footer = () => {
   return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Rozzy Store</h3>
          <p>Somos tu tienda de calzado de confianza. Encuentra calidad, estilo y comodidad en un solo lugar.</p>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Enlaces Rápidos</h4>
          <ul>
            <li>Nueva Colección</li>
            <li>Ofertas Especiales</li>
            <li>Guía de Tallas</li>
            <li>Política de Devoluciones</li>
            <li>Blog de Moda</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Contacto</h4>
          <p>rozzy.store@gmail.com</p>
          <p>+57 302 513 8703</p>
          <div className="footer-icons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaWhatsapp className="icon" />
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <div className="footer-payments">
          <p>Métodos de pago:</p>
          <FaCcVisa className="icon" />
          <FaCcMastercard className="icon" />
        </div>
        <p className="footer-copy">© 2025 Rozzy Store. Todos los derechos reservados.</p>
        <p className="footer-links">Términos y condiciones | Política de privacidad</p>
      </div>
    </footer>
  );
};

export default Footer;
