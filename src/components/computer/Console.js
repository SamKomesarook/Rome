import React, { useContext, useRef } from 'react';
import { DisplayContext } from '../../state/DisplayState';
import { processInstrs, compile, ErrorReporter } from '../../lang/Common';
import { USBToggle } from './Peripherals';
import DebugControl from './DebugControl';

const Console = () => {
  const [display, setDisplay] = useContext(DisplayContext);
  const inputRef = useRef();

  const executeStart = (inputValue) => {
    // Create a deep copy of default display with some updated values
    let staticDisplay = DisplayContext.createCustomClone({
      ...DisplayContext.DEFAULT(),
      machine: display.machine,
      text: display.text,
      running: true,
      isDebugActive: display.isDebugActive,
      consoleHistory: [...display.consoleHistory, inputValue],
    });

    staticDisplay = compile(staticDisplay);

    // Render new display information
    setDisplay(DisplayContext.createCustomClone(staticDisplay));
  };

  const executeReset = (inputValue) => {
    // Reset to the default value but keep machine and text value
    setDisplay((prevDisplay) => ({
      ...DisplayContext.DEFAULT(),
      machine: prevDisplay.machine,
      text: prevDisplay.text,
      consoleHistory: [...prevDisplay.consoleHistory, inputValue],
    }));
  };

  const executeClear = (inputValue) => {
    setDisplay((prevDisplay) => ({
      ...prevDisplay,
      consoleHistory: [],
    }));
  };

  const executeWriteToMemory = (inputValue) => {
    // Create a deep copy of display
    const staticDisplay = DisplayContext.createCustomClone(display);

    // Save recent command to console history
    staticDisplay.consoleHistory.push(inputValue);
    staticDisplay.reading = false;

    if (staticDisplay.memory[staticDisplay.selected].content.length === 0) {
    // Get the keys of special memory cells
      const usbMemoryKey = staticDisplay.specialKeys.find((element) => element.specialContent === 'usb').key;
      if (staticDisplay.selected === usbMemoryKey) {
        USBToggle();
      } else {
        staticDisplay.memory[staticDisplay.selected].content = inputRef.current.value;
        staticDisplay.memory[staticDisplay.selected].type = 'string';
      }
      staticDisplay.reading = false;
      processInstrs(staticDisplay);
    } else {
      const errorReporter = new ErrorReporter(staticDisplay);
      errorReporter.generalError('Memory cell not empty');
    }

    // Render new display information
    setDisplay(DisplayContext.createCustomClone(staticDisplay));
  };

  const handleKey = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const inputValue = inputRef.current.value;
      if (display.reading) {
        executeWriteToMemory(inputValue);
      } else if (inputValue === 'start') {
        executeStart(inputValue);
      } else if (inputValue === 'reset') {
        executeReset(inputValue);
      } else if (inputValue === 'consoleClear') {
        executeClear(inputValue);
      } else {
        setDisplay((prevDisplay) => ({
          ...prevDisplay,
          consoleHistory: [...prevDisplay.consoleHistory, inputValue],
        }));
      }
      inputRef.current.value = '';
    }
  };

  const consoleHistoryList = display.consoleHistory.map((record) => (
    <div>{`> ${record}`}</div>
  ));

  return (
    <div id="console-wrapper">
      <div
        id="console"
        style={{
          backgroundColor: `${display.consoleStyle.bgColor}`,
          color: `${display.consoleStyle.txtColor}`,
          fontSize: `${display.consoleStyle.txtSize}`,
          textAlign: `${display.consoleStyle.txtAlign}`,
          fontWeight: `${display.consoleStyle.fontWeight}`,
          fontStyle: `${display.consoleStyle.fontStyle}`,
          textDecorationLine: `${display.consoleStyle.textDecorationLine}`,
        }}
        className="code highlightable-input"
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
      <DebugControl />
    </div>
  );
};

export default Console;
