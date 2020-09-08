/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import Cookies from 'js-cookie';
import App from './App';
import './LoginScreen.css';
// import AuthApi from "./AuthApi";
const data = require('./hash/hash.json');

// read from json
const hashValue = data.find((hash) => hash.id === 1);

function LoginScreentest() {
  // password
  const [password, setPassword] = useState('');
  const setInput = (e) => setPassword(e.target.value);
  // login button

  const [log, setLog] = React.useState(false);

  const readCookie = () => {
    const user = Cookies.get('user');
    // const checkCookie = bcrypt.compareSync(password, user);
    if (user) {
      setLog(true);
    }
  };

  React.useEffect(() => {
    readCookie();
  }, []);

  const login = () => {
    // const hash = fs.readFileSync('hash.txt');
    const check = bcrypt.compareSync(password, hashValue.value);
    if (check) {
      setLog(true);
      Cookies.set('user', hashValue.value, { expires: 1 });
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
        Please Login ssssss
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
          Login dsadasdsa
        </button>
      </div>
    </div>
  // </div>

  );
}

export default LoginScreentest;
