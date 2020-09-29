import React, { useState, useContext, useRef } from 'react';
import TextArea from './TextArea';
import { DisplayContext } from '../../state/DisplayState';
import { UiContext } from '../../state/UiContext';
import Memory from './Memory';
import { StartButton, ResetButton } from './Button';
import { InputArea, OutputArea } from './IOArea';
import { Processor } from './Peripherals';
import VideoPlayer from './VideoPlayer';
import Toolbar from './Toolbar';
import HtmlElementUtil from '../../utils/HtmlElementUtil';

const Main = () => {
  const [display, setDisplay] = useContext(DisplayContext);
  const [ui, setUi] = useContext(UiContext);
  const isElementHiddenClass = ui.ctxIsAppRunViewActive ? 'hidden' : '';
  const [isElementDragEnterClass, setElementDragEnterClass] = useState('');
  const dragEventTargetRef = useRef(null);
  const computerRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setElementDragEnterClass('drag-hovered');
    dragEventTargetRef.current = e.target;
  };

  const handleDragLeave = (e) => {
    console.log('leave e.target', e.target);
    console.log('leave dragEventTarget', dragEventTargetRef.current);

    e.preventDefault();
    if (e.target === dragEventTargetRef.current) {
      setElementDragEnterClass('');
      dragEventTargetRef.current = null;
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    console.log('dragover');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    console.log('drop');
    const EXTERNAL_MEMORY_SIZE = 8;
    const combinedMemorySize = display.memorySize + EXTERNAL_MEMORY_SIZE;
    const newMemory = [];

    for (let i = display.memorySize; i < combinedMemorySize; i++) {
      newMemory.push({
        key: i, // Unique key
        type: '', // Type 'integer, long, float, string or character'
        size: '', // The available space taken based on the data type
        content: '', // defined content
        special: '', //
        name: '', //
      });
    }

    setDisplay((prevDisplay) => ({
      ...prevDisplay,
      memorySize: combinedMemorySize,
      externalMemorySize: EXTERNAL_MEMORY_SIZE,
      memory: prevDisplay.memory.concat(newMemory),
    }));
  };

  return (
    <div className="main">
      <div className={`layout-column ${isElementHiddenClass}`}>
        <VideoPlayer />
        <TextArea />
        <Toolbar />
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
        ref={computerRef}
      >
        <Memory />
        <div className={`peripheral-icon-grp ${isElementHiddenClass}`}>
          <Processor />
        </div>
        <OutputArea />
        <InputArea />
      </div>
    </div>
  );
};

export default Main;
