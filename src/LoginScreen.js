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
  const [popUp, setPopUp] = React.useState(false);
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
      setPopUp(true);
    }
  };

  const back = () => {
    setPopUp(false);
  };

  if (log) {
    return (
      <App />
    );
  }

  const isMain = popUp ? 'hidden' : 'login-screen';
  const isPopUP = popUp ? 'login-screen' : 'hidden';
  return (
    <div className="login-container">
      <div className={isMain}>
        Welcome to Rome.
        <input
          name="password-field"
          type="password"
          className="login-input"
          value={password}
          onChange={setInput}
          placeholder="password"
        />
        <button
          type="submit"
          onClick={login}
          className="login-btn"
        >
          Go
        </button>
      </div>
      <div className={isPopUP}>
        <div>
          Wrong password, please try again
        </div>
        <button
          type="submit"
          onClick={back}
          className="login-btn"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default LoginScreen;
