import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../../assets/images/Rozz Store logo 2.png';
import { FaUser, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebook } from 'react-icons/fa';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
   const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  }
    const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Rozzy Store Logo" className="login-logo" />
        <h2>Iniciar Sesión</h2>
        
        <div className="login-input">
  <FaUser className="icon" />
  <input
    type="text"
    placeholder="Usuario"
    value={correo}
    onChange={(e) => setCorreo(e.target.value)}
  />
</div>

        
        <div className="login-input">
  <FaLock className="icon" />
  <input
    type={showPassword ? 'text' : 'password'}
    placeholder="Contraseña"
    value={clave}
    onChange={(e) => setClave(e.target.value)}
  />
  <span className="password-toggle" onClick={togglePassword}>
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </span>
</div>


        <button className="login-button">INICIAR SESIÓN</button>

        <div className="social-login">
          <p>O inicia sesión con:</p>
          <div className="social-icons">
            <button className="social-btn google"><FaGoogle /> Google</button>
            <button className="social-btn facebook"><FaFacebook /> Facebook</button>
          </div>
        </div>

        <p className="register-link">
      ¿No tienes cuenta?{' '}
      <span className="register-link-action" onClick={handleRegisterClick}>
        Regístrate aquí
      </span>
    </p>
    
      </div>
    </div>
  );
}

export default Login;
