import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import LandingPage from './components/LandingPage';

const APP_NAME = 'Explora UChile';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {isLoggedIn ? (
        <LandingPage appName={APP_NAME} onLogout={handleLogout} />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} appName={APP_NAME} />
      )}
    </div>
  );
};

export default App;