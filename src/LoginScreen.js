import React, { useState, useRef } from 'react';
import bcrypt from 'bcryptjs';
import Cookies from 'js-cookie';
import App from './App';
import './LoginScreen.css';

const data = require('./hash/hash.json');

// read from json
const hashValue = data.find((hash) => hash.id === 1);

function LoginScreen() {
  // password
  const passwordRef = useRef();
  const [log, setLog] = useState(false);
  const [popUp, setPopUp] = useState(false);

  // read from cookie
  const readCookie = () => {
    const user = Cookies.get('user');
    if (user) {
      setLog(true);
    }
  };

  React.useEffect(() => {
    readCookie();
  }, []);

  const login = () => {
    // const hash = fs.readFileSync('hash.txt');
    const check = bcrypt.compareSync(passwordRef.current.value, hashValue.value);
    if (check) {
      setLog(true);
      // set cookie with 1 day expiry
      Cookies.set('user', hashValue.value, { expires: 1 });
    } else {
      setPopUp(true);
    }
  };

  if (log) {
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
          className={!popUp ? 'login-input' : 'login-input-invalid'}
          placeholder="password"
          ref={passwordRef}
        />
        <button
          type="submit"
          onClick={login}
          className="login-btn"
        >
          Go
        </button>
      </div>
    </div>
  );
}

export default LoginScreen;
