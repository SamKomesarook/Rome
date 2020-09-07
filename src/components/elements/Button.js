import React, { useContext } from 'react';
import { DisplayContext } from '../../state/DisplayState';
import { processInstrs, ErrorReporter } from '../../lang/Common';

const antlr4 = require('antlr4');
const { RomeLexer } = require('../../lang/grammar/Rome/RomeLexer');
const { RomeParser } = require('../../lang/grammar/Rome/RomeParser');
const { MachineLexer } = require('../../lang/grammar/Machine/MachineLexer');
const { MachineParser } = require('../../lang/grammar/Machine/MachineParser');

const StartButton = () => {
  const [display, setDisplay] = useContext(DisplayContext);

  const handleStart = () => {
    setDisplay((prevDisplay) => ({
      ...prevDisplay,
      running: true,
    }));
    const chars = new antlr4.InputStream(display.text);
    const lexer = (display.machine)
      ? new MachineLexer(chars)
      : new RomeLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = (display.machine)
      ? new MachineParser(tokens)
      : new RomeParser(tokens);
    parser.buildParseTrees = true;
    parser.removeErrorListeners();
    parser.addErrorListener(new ErrorReporter(display));

    const tree = parser.r();

    if (tree.exception === null && parser._syntaxErrors === 0) {
      try {
        for (const child of tree.children) {
          if (child.constructor.name !== 'TerminalNodeImpl') {
            display.commands.push(child);
          }
        }
        setDisplay((prevDisplay) => ({
          ...prevDisplay,
          errors: false,
        }));
        processInstrs(display, setDisplay);
      } catch (e) {
        console.log(e);
        // TODO print error messages
      }
    }
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

const StopButton = () => {
  const [display, setDisplay] = useContext(DisplayContext);
  const handleStop = () => {
    const newMem = display.memory;
    if (display.machine) {
      for (const mem of newMem) {
        mem.content = 0;
      }
    } else {
      for (const mem of newMem) {
        mem.type = '';
        mem.content = '';
        mem.name = '';
      }
    }

    setDisplay((prevDisplay) => ({
      ...prevDisplay,
      running: false,
      output: '',
      input: '',
      errors: false,
      reading: false,
      selected: 0,
      commands: [],
      importIO: false,
      importNet: false,
      memory: newMem,
    }));
  };

  return (
    <button
      id="stop-button"
      onClick={handleStop}
      type="button"
      disabled={!display.running}
      className="std-btn secondary-btn"
    >
      Stop
    </button>
  );
};

export {
  StartButton,
  StopButton,
};
