import React from 'react';
import './App.css';
import './components/styles/styles.css';
import TextArea from './components/elements/TextArea';
import { DisplayProvider } from './state/DisplayState';
import { UiProvider } from './state/UiContext';
import Memory from './components/elements/Memory';
import { StartButton, ResetButton } from './components/elements/Button';
import { InputArea, OutputArea } from './components/elements/IOArea';
import { NetPeripheral, USBPeripheral, Processor } from './components/elements/Peripherals';
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
            <ResetButton />
          </div>
        </div>
        <div className="layout-column" id="computer-column">
          <Memory />
          <div className="peripheral-icon-grp">
            <Processor />
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
