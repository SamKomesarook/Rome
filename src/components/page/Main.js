import React, { useContext } from 'react';
import CodingArea from '../elements/CodingArea';
import { UiContext } from '../../state/UiContext';
import Memory from '../computer/Memory';
import Console from '../computer/Console';
import { Processor } from '../computer/Peripherals';
import VideoPlayer from '../elements/VideoPlayer';
import '../computer/computer.css';
import '../elements/styles.css';
import { Tablet } from './Tablet';
import { Computer } from './Computer';

const Main = () => {
  const [ui, setUi] = useContext(UiContext);
  
  const memorySize = () => {
	  console.log('call me');
      setUi((prevUI) => ({
        ...prevUI,
        ctxMemoryTabletSize: 'memory-section-size-tablet',
      }));
  };
  
  if (navigator.userAgent.match(/Tablet|iPad/i))
  {
	memorySize();
	/*
    const memorySize = () => {
	  console.log('call me');
      setUi((prevUI) => ({
        ...prevUI,
        ctxMemoryTabletSize: 'memory-section-size-tablet',
      }));
    };
	*/
	return (<Tablet />);
  } else {
	return (<Computer />);
  }
  
};

export default Main;
