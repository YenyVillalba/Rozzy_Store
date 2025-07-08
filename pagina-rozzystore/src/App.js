import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import './App.css';

function AppWrapper() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
   const hiddenRoutes = ['/', '/login', '/register'];
    setShowNavbar(!['/', '/login', '/register'].includes(location.pathname));
    setShowFooter(!hiddenRoutes.includes(location.pathname));
  }, [location]);
  

  return (
    <div className="app-container">
      {showNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
     
      </Routes>

       {showFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
