import React from 'react';
import './App.css';
import TextArea from './components/elements/TextArea';
import Slider from './components/elements/Slider';
import { DisplayProvider } from './state/DisplayState';
import Memory from './components/elements/Memory';
import { StartButton, StopButton } from './components/elements/Button';
import { InputArea, OutputArea } from './components/elements/IOArea';
import { NetPeripheral, USBPeripheral } from './components/elements/Peripherals';
import Switch from './components/elements/Switch';

const App = () => (
  <DisplayProvider>
    <div className="App">
      <div className="layout-column">
        <TextArea />
        <Switch />
        <div className="btn-grp">
          <StartButton />
          <StopButton />
        </div>
      </div>
      <div className="layout-column">
        <Memory />
        <div className="peripheral-icon-grp">
          <NetPeripheral />
          <USBPeripheral />
        </div>
        <OutputArea />
        <InputArea />
      </div>
    </div>
  </DisplayProvider>
);

export default App;
