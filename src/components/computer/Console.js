import React, { useContext, useRef } from 'react';
import { TerminalNodeImpl } from 'antlr4/tree/Tree';
import antlr4 from 'antlr4';
import { DisplayContext } from '../../state/DisplayState';
import { processInstrs, ErrorReporter } from '../../lang/Common';
import { USBToggle } from './Peripherals';
import { RomeLexer } from '../../lang/grammar/Rome/RomeLexer';
import { RomeParser } from '../../lang/grammar/Rome/RomeParser';
import { MachineLexer } from '../../lang/grammar/Machine/MachineLexer';
import { MachineParser } from '../../lang/grammar/Machine/MachineParser';

const Console = () => {
  const [display, setDisplay] = useContext(DisplayContext);
  const inputRef = useRef();

  const executeStart = () => {
    // Create a deep copy of display
    const staticDisplay = DisplayContext.createCustomClone(display);

    // Save recent command to console history
    staticDisplay.consoleHistory.push(inputRef.current.value);

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
      }
    }

    // Render new display information
    setDisplay(DisplayContext.createCustomClone(staticDisplay));
  };

  const executeReset = () => {
    // Reset to the default value but keep machine and text value
    setDisplay((prevDisplay) => ({
      ...DisplayContext.DEFAULT(),
      machine: prevDisplay.machine,
      text: prevDisplay.text,
      consoleHistory: prevDisplay.consoleHistory.push(inputRef.current.value),
    }));
  };

  const executeWriteToMemory = () => {
    // Create a deep copy of display
    const staticDisplay = DisplayContext.createCustomClone(display);

    // Save recent command to console history
    staticDisplay.consoleHistory.push(inputRef.current.value);

    const newMem = staticDisplay.memory;

    // Get the keys of special memory cells
    const usbMemoryKey = staticDisplay.specialKeys.find((element) => element.specialContent === 'usb').key;
    if (staticDisplay.selected === usbMemoryKey) {
      USBToggle();
    } else {
      newMem[staticDisplay.selected].content = inputRef.current.value;
      newMem[staticDisplay.selected].type = 'string';
    }
    staticDisplay.memory = newMem;
    staticDisplay.reading = false;
    processInstrs(staticDisplay);

    // Render new display information
    setDisplay(DisplayContext.createCustomClone(staticDisplay));
  };

  const handleKey = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const inputValue = inputRef.current.value;
      if (display.reading) {
        executeWriteToMemory();
      } else if (inputValue === 'start') {
        executeStart();
      } else if (inputValue === 'reset') {
        executeReset();
      }
      inputRef.current.value = '';
    }
  };

  const consoleHistoryList = display.consoleHistory.map((record) => (
    <div>{`> ${record}`}</div>
  ));

  return (
    <div
      id="console"
      style={{
        backgroundColor: `${display.outputStyle.bgColor}`,
        color: `${display.outputStyle.txtColor}`,
        fontSize: `${display.outputStyle.txtSize}`,
        textAlign: `${display.outputStyle.txtAlign}`,
        fontWeight: `${display.outputStyle.bold}`,
        fontStyle: `${display.outputStyle.italic}`,
        textDecorationLine: `${display.outputStyle.underline}`,
      }}
      className="code"
    >
      {consoleHistoryList}
      <div className="hflex">
        <span>>&nbsp;</span>
        <textarea
          id="console-input"
          ref={inputRef}
          onKeyDown={handleKey}
        />
      </div>
    </div>
  );
};

export default Console;