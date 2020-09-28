import React from 'react';
import './App.css';
import './components/styles/styles.css';
import Main from './components/elements/Main';
import { DisplayProvider } from './state/DisplayState';
import { UiProvider } from './state/UiContext';
import Sidebar from './components/elements/Sidebar';

const App = () => (
  <UiProvider>
    <DisplayProvider>
      <Main />
      <Sidebar />
    </DisplayProvider>
  </UiProvider>
);

export default App;
