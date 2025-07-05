
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import logo from '../../assets/images/Rozz Store logo 2.png';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

function Register() {

 const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <img src={logo} alt="Rozzy Store Logo" className="register-logo" />
        <h2>Crear Cuenta</h2>

        <div className="register-input">
          <FaUser className="icon" />
          <input type="text" placeholder="Nombre de usuario" />
        </div>

        <div className="register-input">
          <FaEnvelope className="icon" />
          <input type="email" placeholder="Correo electrónico" />
        </div>

        <div className="register-input">
          <FaLock className="icon" />
          <input type="password" placeholder="Contraseña" />
        </div>

        <div className="register-input">
          <FaLock className="icon" />
          <input type="password" placeholder="Confirmar contraseña" />
        </div>

        <button className="register-button">REGISTRARSE</button>

        <p className="login-link">
          ¿Ya tienes una cuenta?{' '}
          <span className="register-link-action" onClick={handleLoginClick}>
            Inicia sesión
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
