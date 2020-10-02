import React, { useContext } from 'react';
import { UiContext } from '../../state/UiContext';
import { StartButton, ResetButton } from '../elements/Button';
import VideoPlayer from '../elements/VideoPlayer';
import Toolbar from '../elements/Toolbar';
import CodingArea from '../elements/CodingArea';
import Computer from '../computer/Computer';
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
      <Computer />
      <Toolbar className="layout-column" />
    </div>
  );
};

export default Main;
