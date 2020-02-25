import React from 'react'
import './App.css'
import TextArea from './components/elements/TextArea'
import Slider from './components/elements/Slider'
import {DisplayProvider} from './state/DisplayState'
import Memory from './components/elements/Memory'
import {StartButton, StopButton} from './components/elements/Button'
import {InputArea, OutputArea} from './components/elements/IOArea'
import {NetPeripheral, USBPeripheral} from './components/elements/Peripherals'
import Switch from './components/elements/Switch'
const App = () => {

  return (
	<DisplayProvider>
    <div className="App">
	<TextArea />
	  <Memory />
	<Slider />
    <Switch />
	<StartButton />
	  <StopButton />
	  <InputArea />
	  <OutputArea />
	  <NetPeripheral />
	  <USBPeripheral />
      </div>
	</DisplayProvider>
  );
}

export default App;
