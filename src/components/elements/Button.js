import React, { useContext } from 'react';
import { TerminalNodeImpl } from 'antlr4/tree/Tree';
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
    // Create a deep copy of display
    const staticDisplay = JSON.parse(JSON.stringify(display));

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
    setDisplay(staticDisplay);
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
      disabled={!display.running}
      className="std-btn secondary-btn"
    >
      Reset
    </button>
  );
};

export {
  StartButton,
  ResetButton,
};
