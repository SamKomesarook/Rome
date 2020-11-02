import React, { useState, useRef } from 'react';
import bcrypt from 'bcryptjs';
import Cookies from 'js-cookie';
import App from './App';
import './LoginScreen.css';

const data = require('./hash/hash.json');

// Read from json
const hashValue = data.find((hash) => hash.id === 1);

const LoginScreen = () => {
  const passwordRef = useRef();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isInvalidInput, setInvalidInput] = useState(false);

  const handleLogin = () => {
    setInvalidInput(false);
    const check = bcrypt.compareSync(passwordRef.current.value, hashValue.value);
    if (check) {
      // Set cookie with 1 day expiry
      Cookies.set('user', hashValue.value, { expires: 1 });
      setLoggedIn(true);
    } else {
      setInvalidInput(true);
    }
  };

  React.useEffect(() => {
    // Read from cookie
    if (Cookies.get('user')) {
      setLoggedIn(true);
    }
  }, []);

  if (isLoggedIn) {
    return (
      <App />
    );
  }

  return (
    <div className="login-container">
      <div className="login-screen">
        Welcome to Rome.
        <input
          name="password-field"
          type="password"
          className={`login-input ${isInvalidInput ? 'login-input-invalid' : ''}`}
          placeholder="password"
          ref={passwordRef}
        />
        <button
          type="submit"
          onClick={handleLogin}
          className="login-btn"
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
