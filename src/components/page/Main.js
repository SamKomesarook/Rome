import React, { useState, useContext, useRef } from 'react';
import { DisplayContext } from '../../state/DisplayState';
import { UiContext } from '../../state/UiContext';
import Memory from '../computer/Memory';
import { StartButton, ResetButton } from '../elements/Button';
import { InputArea, OutputArea } from '../computer/IOArea';
import { Processor } from '../computer/Peripherals';
import VideoPlayer from '../elements/VideoPlayer';
import Toolbar from '../elements/Toolbar';
import CodingArea from '../elements/CodingArea';
import '../computer/computer.css';
import '../elements/styles.css';

const Main = () => {
  const [display, setDisplay] = useContext(DisplayContext);
  const [ui, setUi] = useContext(UiContext);
  const isElementHiddenClass = ui.ctxIsAppRunViewActive ? 'hidden' : '';
  const [isElementDragEnterClass, setElementDragEnterClass] = useState('');
  const dragEventTargetRef = useRef(null);

  const handleDragEnter = (e) => {
    if (ui.ctxDraggedItem === 'toolbarUsb') {
      e.preventDefault();
      setElementDragEnterClass('drag-hovered');
      dragEventTargetRef.current = e.target;
    }
  };

  const handleDragLeave = (e) => {
    if (ui.ctxDraggedItem === 'toolbarUsb') {
      console.log('leave e.target', e.target);
      console.log('leave dragEventTarget', dragEventTargetRef.current);

      e.preventDefault();
      if (e.target === dragEventTargetRef.current) {
        setElementDragEnterClass('');
        dragEventTargetRef.current = null;
      }
    }
  };

  const handleDragOver = (e) => {
    if (ui.ctxDraggedItem === 'toolbarUsb') {
      e.preventDefault();
      console.log('dragover');
    }
  };

  const handleDrop = (e) => {
    if (ui.ctxDraggedItem === 'toolbarUsb') {
      e.preventDefault();
      console.log('drop');
      const EXTERNAL_MEMORY_SIZE = 8;
      const combinedMemorySize = display.memorySize + EXTERNAL_MEMORY_SIZE;
      const newMemory = [];

      for (let i = display.memorySize; i < combinedMemorySize; i++) {
        newMemory.push({
          key: i,
          type: '',
          content: '',
          special: 'usb',
          name: '',
        });
      }

      setDisplay((prevDisplay) => ({
        ...prevDisplay,
        memorySize: combinedMemorySize,
        externalMemorySize: EXTERNAL_MEMORY_SIZE,
        memory: prevDisplay.memory.concat(newMemory),
      }));

      setElementDragEnterClass('');
      dragEventTargetRef.current = null;
    }
  };

  return (
    <div className="main">
      <div className={`layout-column ${isElementHiddenClass}`}>
        <VideoPlayer />
        <CodingArea />
        <div className="hflex">
          <StartButton />
          <ResetButton />
        </div>
      </div>
      <div
        className={`layout-column ${isElementDragEnterClass}`}
        id="computer-column"
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <Memory />
        <div className={`peripheral-icon-grp ${isElementHiddenClass}`}>
          <Processor />
        </div>
        <OutputArea />
        <InputArea />
      </div>
      <Toolbar className="layout-column" />
    </div>
  );
};

export default Main;
