import React, { useContext, useRef } from 'react';
import { DisplayContext } from '../../state/DisplayState';
import { processInstrs, compile, ErrorReporter } from '../../lang/Common';
import { USBToggle } from './Peripherals';
import DebugControl from './DebugControl';

const Console = () => {
  const [display, setDisplay] = useContext(DisplayContext);
  const inputRef = useRef(null);

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
    const errorReporter = new ErrorReporter(staticDisplay);

    // Save recent command to console history
    staticDisplay.consoleHistory.push(inputValue);
    staticDisplay.reading = false;

    const initPos = staticDisplay.memory[staticDisplay.selected].key;
    const numOfSpecialKeys = staticDisplay.specialKeys.length;
    const numUsableCells = staticDisplay.memorySize - numOfSpecialKeys;
    const stringSize = staticDisplay.dataTypeSize.string;
    const availableLength = numUsableCells * stringSize - initPos * stringSize;

    // Check if the memory has enough space to accomodate the input
    if (inputValue.length > availableLength) {
      errorReporter.generalError('Out of memory');
    } else if (staticDisplay.memory[staticDisplay.selected].content.length !== 0) {
      errorReporter.generalError('Memory cell not empty');
    } else {
      // Get the keys of special memory cells
      const usbMemoryKey = staticDisplay.specialKeys.find((element) => element.specialContent === 'usb').key;
      if (staticDisplay.selected === usbMemoryKey) {
        USBToggle();
      } else {
        const requiredCells = inputValue.length / stringSize;

        // Ensure one memory cell only contains the defined number of letter
        for (let i = 0; i < requiredCells + 1; i++) {
          const curPos = initPos + i;
          staticDisplay.memory[curPos].content = inputValue.substr(i * stringSize, stringSize);
          staticDisplay.memory[curPos].type = 'string';
          if (i + 1 < requiredCells) {
            staticDisplay.selected += 1;
          }
        }
      }

      // Continue execute the remaining commands
      processInstrs(staticDisplay);
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
      } else if (inputValue === '') {
        setDisplay((prevDisplay) => ({
          ...prevDisplay,
          consoleHistory: [
            ...prevDisplay.consoleHistory,
            inputValue,
          ],
        }));
      } else {
        setDisplay((prevDisplay) => ({
          ...prevDisplay,
          consoleHistory: [
            ...prevDisplay.consoleHistory,
            inputValue,
            `ERROR: "${inputValue}" is not recognized as a command.`,
          ],
        }));
      }
      inputRef.current.value = '';
    }
  };

  const consoleHistoryList = display.consoleHistory.map((record) => {
    if (record.substring(0, 5) === 'ERROR') {
      return (
        <div>
          {'> '}
          <span style={{ color: 'red' }}>{record}</span>
        </div>
      );
    }
    return <div>{`> ${record}`}</div>;
  });

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
          <span>{'> '}</span>
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
