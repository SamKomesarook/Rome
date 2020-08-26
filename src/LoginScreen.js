import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import App from './App';
import './LoginScreen.css';

const data = require('./hash/hash.json');

// read from json
const hashValue = data.find((hash) => hash.id === 1);

function LoginScreen() {
  // password
  const [password, setPassword] = useState('');
  const setInput = (e) => setPassword(e.target.value);
  // login button
  const [log, setLog] = useState(false);
  const login = () => {
    // const hash = fs.readFileSync('hash.txt');
    const check = bcrypt.compareSync(password, hashValue.value);
    if (check) {
      setLog(true);
    } else {
      window.alert('Wrong password, please try again');
    }
  };

  if (log) {
    return (
      <App />
    );
  }

  return (

  // <div className="app">
    <div className="container">
      <div className="loginScreen">
        Please Login
        <input
          type="password"
          className="input"
          value={password}
          onChange={setInput}
        />
        <button
          type="submit"
          onClick={login}
          className="btn"
        >
          Login
        </button>
      </div>
    </div>
  // </div>

  );
}

export default LoginScreen;
