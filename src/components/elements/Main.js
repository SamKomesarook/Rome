import React, { useContext } from 'react';
import TextArea from './TextArea';
import { UiContext } from '../../state/UiContext';
import Memory from './Memory';
import { StartButton, ResetButton } from './Button';
import { InputArea, OutputArea } from './IOArea';
import { Processor } from './Peripherals';
import Switch from './Switch';
import VideoPlayer from './VideoPlayer';

const Main = () => {
  const [ui, setUi] = useContext(UiContext);
  const isElementHiddenClass = ui.ctxIsAppRunViewActive ? 'hidden' : '';

  return (
    <div className="main">
      <div className={`layout-column ${isElementHiddenClass}`}>
        <VideoPlayer />
        <TextArea />
        <Switch />
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
