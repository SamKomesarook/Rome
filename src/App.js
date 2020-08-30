import React from 'react';
import './App.css';
import TextArea from './components/elements/TextArea';
import { DisplayProvider } from './state/DisplayState';
import { UiProvider } from './state/UiContext';
import Memory from './components/elements/Memory';
import { StartButton, StopButton } from './components/elements/Button';
import { InputArea, OutputArea } from './components/elements/IOArea';
import { NetPeripheral, USBPeripheral } from './components/elements/Peripherals';
import Switch from './components/elements/Switch';
import Sidebar from './components/elements/Sidebar';
import VideoPlayer from './components/elements/VideoPlayer';

const App = () => (
  <UiProvider>
    <DisplayProvider>
      <div className="main">
        <div className="layout-column">
          <VideoPlayer />
          <TextArea />
          <Switch />
          <div className="hflex">
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
      <Sidebar />
    </DisplayProvider>
  </UiProvider>
);

export default App;
