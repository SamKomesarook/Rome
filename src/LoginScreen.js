import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import Cookies from 'js-cookie';
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
  // set the state to false
  const [log, setLog] = React.useState(false);

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
    const check = bcrypt.compareSync(password, hashValue.value);
    if (check) {
      setLog(true);
      // set cookie with 1 day expiry
      Cookies.set('user', hashValue.value, { expires: 1 });
    } else {
      window.alert('wrong password, please try again.');
    }
  };

  if (log) {
    return (
      <App />
    );
  }

  return (
    <div className="container">
      <div className="loginScreen">
        Welcome to Rome.
        <input
          name="password-field"
          type="password"
          className="input"
          value={password}
          onChange={setInput}
          placeholder="password"
        />
        <button
          type="submit"
          onClick={login}
          className="btn"
        >
          Go
        </button>
      </div>
    </div>
  );
}

export default LoginScreen;
