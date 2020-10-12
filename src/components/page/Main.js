import React, { useContext } from 'react';
import CodingArea from '../elements/CodingArea';
import { UiContext } from '../../state/UiContext';
import Memory from '../computer/Memory';
import Console from '../computer/Console';
import { Processor } from '../computer/Peripherals';
import VideoPlayer from '../elements/VideoPlayer';
import '../computer/computer.css';
import '../elements/styles.css';

const Main = () => {
  const [ui, setUi] = useContext(UiContext);
  const isElementHiddenClass = ui.ctxIsAppRunViewActive ? 'hidden' : '';
  const tabletWarning = 'Warning: Using a desktop or laptop will give you a better experience.';

  return (
    <div className="main">
      <div className={`layout-column ${isElementHiddenClass}`}>
	    <span id="tabletWarning">{tabletWarning}</span>
        <VideoPlayer />
        <CodingArea />
      </div>
      <div className="layout-column" id="computer-column">
        <Memory />
        <div className={`peripheral-icon-grp ${isElementHiddenClass}`}>
          <Processor />
        </div>
        <Console />
      </div>
    </div>
  );
};

export default Main;
