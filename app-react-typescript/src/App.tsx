import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import LandingPage from './components/LandingPage';

const APP_NAME = 'Explora UChile';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleSignUpSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  const switchToSignUp = () => {
    setIsSignUp(true);
  };

  const switchToLogin = () => {
    setIsSignUp(false);
  };

  if (isLoggedIn) {
    return <LandingPage appName={APP_NAME} onLogout={handleLogout} />;
  }

  if (isSignUp) {
    return (
      <SignUp
        onSignUpSuccess={handleSignUpSuccess}
        appName={APP_NAME}
        onSwitchToLogin={switchToLogin}
      />
    );
  }

  return (
    <Login
      onLoginSuccess={handleLoginSuccess}
      appName={APP_NAME}
      onSwitchToSignUp={switchToSignUp}
    />
  );
};

export default App;