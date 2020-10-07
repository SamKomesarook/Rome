import React, { useContext } from 'react';
import { TerminalNodeImpl } from 'antlr4/tree/Tree';
import { DisplayContext } from '../../state/DisplayState';
import { UiContext } from '../../state/UiContext';
import { processInstrs, debugInstrs, ErrorReporter } from '../../lang/Common';
import { USBToggle } from '../computer/Peripherals';

const antlr4 = require('antlr4');
const { RomeLexer } = require('../../lang/grammar/Rome/RomeLexer');
const { RomeParser } = require('../../lang/grammar/Rome/RomeParser');
const { MachineLexer } = require('../../lang/grammar/Machine/MachineLexer');
const { MachineParser } = require('../../lang/grammar/Machine/MachineParser');

const StartButton = () => {
  const [display, setDisplay] = useContext(DisplayContext);

  const handleStart = () => {
    // Create a deep copy of display
    const staticDisplay = DisplayContext.createCustomClone(display);

    staticDisplay.running = true;

    const chars = new antlr4.InputStream(staticDisplay.text);
    const lexer = (staticDisplay.machine)
      ? new MachineLexer(chars)
      : new RomeLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = (staticDisplay.machine)
      ? new MachineParser(tokens)
      : new RomeParser(tokens);
    const errorReporter = new ErrorReporter(staticDisplay);
    parser.buildParseTrees = true;
    parser.removeErrorListeners();
    parser.addErrorListener(errorReporter);

    const tree = parser.r();

    if (tree.exception === null && parser._syntaxErrors === 0) {
      try {
        for (const child of tree.children) {
          if (child.constructor !== TerminalNodeImpl) {
            staticDisplay.commands.push(child);
          }
        }
        staticDisplay.errors = false;
        processInstrs(staticDisplay, errorReporter);
      } catch (e) {
        console.log(e);
        // TODO print error messages
      }
    }

    // Render new display information
    setDisplay(DisplayContext.createCustomClone(staticDisplay));
  };

  return (
    <button
      id="start-button"
      onClick={handleStart}
      type="button"
      disabled={!!display.running}
      className="std-btn primary-btn"
    >
      Start
    </button>
  );
};

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
      className="std-btn secondary-btn"
      disabled={!display.running}
    >
      Reset
    </button>
  );
};

const DebugButton = () => {
  // const [display, setDisplay] = useContext(DisplayContext);
  // const staticDisplay = DisplayContext.createCustomClone(display);
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
      className="std-btn third-btn"
    >
      Debug
    </button>
  );
};

const DebugStartButton = () => {
  const [display, setDisplay] = useContext(DisplayContext);
  const handleDebugStart = () => {
    const staticDisplay = DisplayContext.createCustomClone(display);
    staticDisplay.debuging = true;
    staticDisplay.running = true;

    const chars = new antlr4.InputStream(staticDisplay.text);
    const lexer = (staticDisplay.machine)
      ? new MachineLexer(chars)
      : new RomeLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = (staticDisplay.machine)
      ? new MachineParser(tokens)
      : new RomeParser(tokens);
    const errorReporter = new ErrorReporter(staticDisplay);
    parser.buildParseTrees = true;
    parser.removeErrorListeners();
    parser.addErrorListener(errorReporter);

    const tree = parser.r();

    if (tree.exception === null && parser._syntaxErrors === 0) {
      try {
        for (const child of tree.children) {
          if (child.constructor !== TerminalNodeImpl) {
            staticDisplay.commands.push(child);
          }
        }
        staticDisplay.errors = false;
        processInstrs(staticDisplay, errorReporter);
      } catch (e) {
        console.log(e);
        // TODO print error messages
      }
    }

    // Render new display information
    setDisplay(DisplayContext.createCustomClone(staticDisplay));
  };

  return (
    <button
      id="debug-start-button"
      onClick={handleDebugStart}
      type="button"
      className="std-btn fourth-btn"
      disabled={!!display.running}
    >
      Start
    </button>
  );
};

const DebugNextButton = () => {
  const [display, setDisplay] = useContext(DisplayContext);
  const className = display.debugEndHint ? 'std-btn fifth-btn' : 'std-btn primary-btn';
  const handleDebugNext = () => {
    // Create a deep copy of display
    const staticDisplay = DisplayContext.createCustomClone(display);
    staticDisplay.debuging = true;
    // Get the keys of special memory cells
    const usbMemoryKey = staticDisplay.specialKeys.find((element) => element.specialContent === 'usb').key;
    if (staticDisplay.selected === usbMemoryKey) {
      USBToggle();
    }
    const errorReporter = new ErrorReporter(staticDisplay);
    // Render new display information
    processInstrs(staticDisplay, errorReporter);
    setDisplay(DisplayContext.createCustomClone(staticDisplay));
    // console.log(staticDisplay.debuging);
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
  StartButton,
  ResetButton,
  DebugStartButton,
  DebugNextButton,
  DebugButton,
};
