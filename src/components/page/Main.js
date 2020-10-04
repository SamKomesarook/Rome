import React, { useContext } from 'react';
import CodingArea from '../elements/CodingArea';
import { UiContext } from '../../state/UiContext';
import Memory from '../computer/Memory';
import { StartButton, ResetButton, DebugButton, NextButton } from '../elements/Button';
import { InputArea, OutputArea } from '../computer/IOArea';
import { Debuger, Processor } from '../computer/Peripherals';
import VideoPlayer from '../elements/VideoPlayer';
import '../computer/computer.css';
import '../elements/styles.css';

const Main = () => {
  const [ui, setUi] = useContext(UiContext);
  const isElementHiddenClass = ui.ctxIsAppRunViewActive ? 'hidden' : '';
  const isDebugRunningClass = ui.ctxIsDebugActive ? '' : 'hidden';
  const isStratHiddenClass = ui.ctxIsDebugActive ? 'hidden' : '';

  return (
    <div className="main">
      <div className={`layout-column ${isElementHiddenClass}`}>
        <VideoPlayer />
        <CodingArea />
        <div className="hflex">
          <div className={isStratHiddenClass}>
            <StartButton />
          </div>
          <div className={isDebugRunningClass}>
            <NextButton />
          </div>
          <ResetButton />
          <DebugButton />
        </div>
      </div>
      <div className="layout-column" id="computer-column">
        <Memory />
        <div className={`peripheral-icon-grp ${isElementHiddenClass}`}>
          <Processor />
          <div className={isDebugRunningClass}>
            <Debuger />
          </div>
        </div>
        <OutputArea />
        <InputArea />
      </div>
    </div>
  );
};

export default Main;
