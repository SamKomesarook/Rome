import React, { useState, useContext, useRef } from 'react';
import { DisplayContext } from '../../state/DisplayState';
import { UiContext } from '../../state/UiContext';
import Memory from './Memory';
import { InputArea, OutputArea } from './IOArea';
import { Processor } from './Peripherals';
import './computer.css';

const Computer = () => {
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
    }
  };

  const handleDrop = (e) => {
    if (ui.ctxDraggedItem === 'toolbarUsb') {
      e.preventDefault();
      const EXTERNAL_MEMORY_SIZE = 8;
      const updatedMemorySize = display.memorySize + EXTERNAL_MEMORY_SIZE;
      const newMemory = [];

      // Build up usb memory
      for (let i = display.memorySize; i < updatedMemorySize; i++) {
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
        memorySize: updatedMemorySize,
        externalMemorySize: EXTERNAL_MEMORY_SIZE,
        memory: prevDisplay.memory.concat(newMemory),
      }));

      // Reset dragging properties
      setElementDragEnterClass('');
      dragEventTargetRef.current = null;
    }
  };

  return (
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
  );
};

export default Computer;
