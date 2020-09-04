import React, { useContext } from 'react';
import { DisplayContext } from '../../state/DisplayState';
import { processInstrs, ErrorReporter } from '../../lang/Common';

const antlr4 = require('antlr4');
const { RomeLexer } = require('../../lang/grammar/Rome/RomeLexer');
const { RomeParser } = require('../../lang/grammar/Rome/RomeParser');
const { MachineLexer } = require('../../lang/grammar/Machine/MachineLexer');
const { MachineParser } = require('../../lang/grammar/Machine/MachineParser');

// TODO no updates use setDisplay. Should we?
const StartButton = () => {
  const [display, setDisplay] = useContext(DisplayContext);

  const start = (event) => {
    setDisplay((display) => ({
      ...display,
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
        setDisplay((display) => ({
          ...display,
          errors: false,
        }));
        processInstrs(display, setDisplay);
        return true;
      } catch (e) {
        console.log(e);
        // TODO print error messages
      }
    }
  };

  return (
    <button
      id="start-button"
      onClick={start}
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
  const stop = (event) => {
    const newMem = display.memory;
    if (display.machine) {
      for (const memory of newMem) {
        memory.content = 0;
      }
    } else {
      for (const mem of newMem) {
        mem.type = '';
        mem.content = '';
        mem.name = '';
        mem.bgColor = '';
        mem.txtColor = '';
        mem.txtSize = '';
        mem.txtAlign = '';
        mem.bold = '';
        mem.italic = '';
      }
    }

    setDisplay((display) => ({
      ...display,
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
      onClick={stop}
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
