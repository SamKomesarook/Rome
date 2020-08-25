import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LoginScreen from './LoginScreen';

ReactDOM.render(<LoginScreen />, document.getElementById('root'));

serviceWorker.unregister();
