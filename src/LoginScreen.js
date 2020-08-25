import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import App from './App';

function LoginScreen() {
  // password
  const [password, setPassword] = useState('');
  const setInput = (e) => setPassword(e.target.value);
  // hash value
  const hash = '$2b$09$xL3tXFifu0DWY/OYGvRD4eiDE0atzsOIWHtyL99fY/7WXYNSt0Z7a';

  // login button
  const [log, setLog] = useState(false);
  const login = () => {
    const check = bcrypt.compareSync(password, hash);
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
    <div className="InputField">
      <input value={password} onChange={setInput} />

      <button onClick={login}>
        login
      </button>
    </div>
  );
}

export default LoginScreen;
