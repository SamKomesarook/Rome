import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LoginScreentest from './LoginScreentest';

ReactDOM.render(<LoginScreentest />, document.getElementById('root'));

serviceWorker.unregister();
