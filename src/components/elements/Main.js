import React, { useState, useContext, useRef } from 'react';
import TextArea from './TextArea';
import { UiContext } from '../../state/UiContext';
import Memory from './Memory';
import { StartButton, ResetButton } from './Button';
import { InputArea, OutputArea } from './IOArea';
import { Processor } from './Peripherals';
import VideoPlayer from './VideoPlayer';
import Toolbar from './Toolbar';

const Main = () => {
  const [ui, setUi] = useContext(UiContext);
  const isElementHiddenClass = ui.ctxIsAppRunViewActive ? 'hidden' : '';
  const [isElementDragEnterClass, setElementDragEnterClass] = useState('');
  const dragEventTargetRef = useRef(null);

  const handleDragEnter = (e) => {
    setElementDragEnterClass('drag-hovered');
    dragEventTargetRef.current = e.target;
  };

  const handleDragLeave = (e) => {
    if (e.target === dragEventTargetRef.current) {
      setElementDragEnterClass('');
      dragEventTargetRef.current = null;
    }
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
