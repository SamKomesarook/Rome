import React, { useContext } from 'react';
import { TerminalNodeImpl } from 'antlr4/tree/Tree';
import { DisplayContext } from '../../state/DisplayState';
import { UiContext } from '../../state/UiContext';
import { processInstrs, ErrorReporter } from '../../lang/Common';
import { USBToggle } from '../computer/Peripherals';

const antlr4 = require('antlr4');
const { RomeLexer } = require('../../lang/grammar/Rome/RomeLexer');
const { RomeParser } = require('../../lang/grammar/Rome/RomeParser');
const { MachineLexer } = require('../../lang/grammar/Machine/MachineLexer');
const { MachineParser } = require('../../lang/grammar/Machine/MachineParser');

const ResetButton = () => {
  const [display, setDisplay] = useContext(DisplayContext);

  const handleReset = () => {
    // Reset to the default value but keep machine and text value
    setDisplay((prevDisplay) => ({
      ...DisplayContext.DEFAULT(),
      machine: prevDisplay.machine,
      text: prevDisplay.text,
    }));
  };

  return (
    <button
      id="reset-button"
      onClick={handleReset}
      type="button"
      className="std-btn reset-btn"
      disabled={!display.running}
    >
      Reset
    </button>
  );
};

const DebugButton = () => {
  const [ui, setUi] = useContext(UiContext);
  const [display, setDisplay] = useContext(DisplayContext);
  const handleDebug = () => {
    // Reset to the default value but keep machine and text value
    setUi((prevUI) => ({
      ...prevUI,
      ctxIsDebugActive: !prevUI.ctxIsDebugActive,
    }));
  };

  return (
    <button
      id="debug-button"
      onClick={handleDebug}
      type="button"
      disabled={!!display.running}
      className="std-btn debug-btn"
    >
      Debug
    </button>
  );
};

const DebugNextButton = () => {
  const [display, setDisplay] = useContext(DisplayContext);
  const className = display.debugEndHint ? 'std-btn stop-btn' : 'std-btn next-btn';
  const handleDebugNext = () => {
    // Create a deep copy of display
    const staticDisplay = DisplayContext.createCustomClone(display);
    // Get the keys of special memory cells
    const usbMemoryKey = staticDisplay.specialKeys.find((element) => element.specialContent === 'usb').key;
    if (staticDisplay.selected === usbMemoryKey) {
      USBToggle();
    }
    const errorReporter = new ErrorReporter(staticDisplay);
    // Render new display information
    processInstrs(staticDisplay, errorReporter);
    setDisplay(DisplayContext.createCustomClone(staticDisplay));
  };

  return (
    <button
      id="debug-next-button"
      onClick={handleDebugNext}
      type="button"
      className={className}
      disabled={!display.running || !!display.reading || !display.debuging}
    >
      Next
    </button>
  );
};
export {
  DebugStartButton,
  DebugNextButton,
  DebugButton,
  ResetButton,
};
