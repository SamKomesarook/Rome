import React from 'react';
import './App.css';
import Main from './components/page/Main';
import { DisplayProvider } from './state/DisplayState';
import { UiProvider } from './state/UiContext';
import Sidebar from './components/sidebar/Sidebar';

const App = () => (
  <UiProvider>
    <DisplayProvider>
      <Main />
      <Sidebar />
    </DisplayProvider>
  </UiProvider>
);

export default App;
