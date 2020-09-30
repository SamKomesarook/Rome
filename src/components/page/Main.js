import React, { useContext } from 'react';
import CodingArea from '../elements/CodingArea';
import { UiContext } from '../../state/UiContext';
import Memory from '../computer/Memory';
import { StartButton, ResetButton } from '../elements/Button';
import { InputArea, OutputArea } from '../computer/IOArea';
import { Processor } from '../computer/Peripherals';
import VideoPlayer from '../elements/VideoPlayer';
import '../computer/computer.css';
import '../elements/styles.css';

const Main = () => {
  const [ui, setUi] = useContext(UiContext);
  const isElementHiddenClass = ui.ctxIsAppRunViewActive ? 'hidden' : '';

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
      <div className="layout-column" id="computer-column">
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
