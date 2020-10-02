import React, { useRef, useContext, useState } from 'react';
import { UiContext } from '../../state/UiContext';
import { DisplayContext } from '../../state/DisplayState';

const Toolbar = () => {
  const [display, setDisplay] = useContext(DisplayContext);
  const [ui, setUi] = useContext(UiContext);
  const noItemClass = display.externalMemorySize === 0 ? '' : 'no-item';

  const isElementHiddenClass = ui.ctxIsAppRunViewActive ? 'hidden' : '';
  const [isElementDragEnterClass, setElementDragEnterClass] = useState('');
  const dragEventTargetRef = useRef(null);

  const handleDragEnter = (e) => {
    if (ui.ctxDraggedItem === 'externalPortUsb') {
      e.preventDefault();
      setElementDragEnterClass('drag-hovered');
      dragEventTargetRef.current = e.target;
    }
  };

  const handleDragLeave = (e) => {
    if (ui.ctxDraggedItem === 'externalPortUsb') {
      e.preventDefault();
      if (e.target === dragEventTargetRef.current) {
        setElementDragEnterClass('');
        dragEventTargetRef.current = null;
      }
    }
  };

  const handleDragOver = (e) => {
    if (ui.ctxDraggedItem === 'externalPortUsb') {
      e.preventDefault();
    }
  };

  const handleDrop = (e) => {
    if (ui.ctxDraggedItem === 'externalPortUsb') {
      e.preventDefault();
      const updatedMemorySize = display.memorySize - display.externalMemorySize;
      setDisplay((prevDisplay) => ({
        ...prevDisplay,
        memorySize: updatedMemorySize,
        externalMemorySize: 0,
        // Remove the external memory cell
        memory: prevDisplay.memory.slice(0, updatedMemorySize),
      }));

      setElementDragEnterClass('');
      dragEventTargetRef.current = null;

      setDisplay((prevDisplay) => ({
        ...prevDisplay,
        errors: true,
        output: prevDisplay.output.concat('ERROR: USB memory not found\n'),
      }));
    }
  };

  // Register the current dragged item as toolbarUSB
  const handleDragStart = () => {
    setUi((prevUi) => ({ ...prevUi, ctxDraggedItem: 'toolbarUsb' }));
  };

  // Clear up the current dragged item
  const handleDragEnd = () => {
    setUi((prevUi) => ({ ...prevUi, ctxDraggedItem: '' }));
  };

  return (
    <div
      id="toolbar"
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={`${isElementDragEnterClass} ${isElementHiddenClass}`}
    >
      <div
        className={`toolbar-item ${noItemClass}`}
        draggable={display.externalMemorySize === 0}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        style={{ cursor: display.externalMemorySize === 0 ? 'grab' : 'auto' }}
      >
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M8 15C8.55 15 9 15.45 9 16C9 16.55 8.55 17 8 17C7.45 17 7 16.55 7 16C7 15.45 7.45 15 8 15M15.07 4.69L16.5 6.1L15.07 7.5L13.66 6.1L15.07 4.69M17.9 7.5L19.31 8.93L17.9 10.34L16.5 8.93L17.9 7.5M8 13C6.34 13 5 14.34 5 16C5 17.66 6.34 19 8 19C9.66 19 11 17.66 11 16C11 14.34 9.66 13 8 13M9.77 4.33L10.5 5.08L14.29 1.29C14.47 1.11 14.72 1 15 1C15.28 1 15.53 1.11 15.71 1.29L22.78 8.36L22.78 8.37C22.92 8.54 23 8.76 23 9C23 9.3 22.87 9.57 22.66 9.76L22.66 9.76L18.93 13.5L19.67 14.23L12.95 20.95C11.68 22.22 9.93 23 8 23C4.13 23 1 19.87 1 16C1 14.07 1.78 12.32 3.05 11.05L9.77 4.33M20.59 9L15 3.41L11.93 6.5L17.5 12.08L20.59 9Z" />
        </svg>
      </div>
    </div>
  );
};

export default Toolbar;
