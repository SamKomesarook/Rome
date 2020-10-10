import React, { useContext } from 'react';
import CodingArea from '../elements/CodingArea';
import { UiContext } from '../../state/UiContext';
import Memory from '../computer/Memory';
import Console from '../computer/Console';
import { Processor } from '../computer/Peripherals';
import VideoPlayer from '../elements/VideoPlayer';
import '../computer/computer.css';
import '../elements/styles.css';

export const Tablet = () => {
  const [ui, setUi] = useContext(UiContext);
  const isElementHiddenClass = ui.ctxIsAppRunViewActive ? 'hidden' : '';

  const memorySize = () => {
    setUi((prevUI) => ({
      ...prevUI,
      ctxMemoryTabletSize: 'memory-section-size-tablet',
    }));
  };
  
  return (
    <div className="main">
	  <div className='layout-column'>
        <VideoPlayer className={`layout-column ${isElementHiddenClass}`}/>
		<CodingArea className={`layout-column ${isElementHiddenClass}`}/>
		<Memory />
        <Processor className={`peripheral-icon-grp ${isElementHiddenClass}`}/>
        <Console />
	  </div>
    </div>
  );
};

export default Tablet;