import React, { useContext } from 'react';
import { DisplayContext } from '../../state/DisplayState';
import { processInstrs, ErrorReporter } from '../../lang/Common';

const InputArea = () => {
  const [display, setDisplay] = useContext(DisplayContext);

  const handleKey = (event) => {
    if (event.keyCode === 13) {
      // Create a deep copy of display
      const staticDisplay = DisplayContext.createCustomClone(display);
      const newMem = staticDisplay.memory;

      const { input } = staticDisplay;
      const errorReporter = new ErrorReporter(staticDisplay);
      const STRING_SIZE = staticDisplay.dataTypeSize.string;

      // Check if the memory has enough space to accomodate the new input
      const pos = staticDisplay.memory[staticDisplay.selected].key;
      if (input.length > (staticDisplay.memorySize * STRING_SIZE - pos * STRING_SIZE)) {
        errorReporter.generalError('Out of memory');
        return;
      }

      // Ensure one memory cell only contains 6 (string_size) letters of a string
      const base = Math.floor(input.length / STRING_SIZE);
      for (let i = 0; i < base + 1; i++) {
        staticDisplay.memory[pos + i * 1].content = input.substr(i * STRING_SIZE, STRING_SIZE);
        staticDisplay.memory[pos + i * 1].type = 'string';
        if (i > 0) {
          staticDisplay.selected += 1;
        }
      }

      staticDisplay.memory = newMem;
      staticDisplay.reading = false;
      processInstrs(staticDisplay);

      // Render new display information
      setDisplay(DisplayContext.createCustomClone(staticDisplay));
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setDisplay((prevDisplay) => ({
      ...prevDisplay,
      input: value,
    }));
  };

  return (
    <input
      id="input-bar"
      size="60"
      type="text"
      onKeyDown={handleKey}
      onChange={handleChange}
      disabled={!display.reading}
      value={!display.reading ? '' : display.input}
    />
  );
};

const OutputArea = () => {
  const [display] = useContext(DisplayContext);
  return (
    <div
      contentEditable="false"
      id="output-area"
      style={{
        backgroundColor: `${display.outputStyle.bgColor}`,
        color: `${display.outputStyle.txtColor}`,
        fontSize: `${display.outputStyle.txtSize}`,
        textAlign: `${display.outputStyle.txtAlign}`,
        fontWeight: `${display.outputStyle.bold}`,
        fontStyle: `${display.outputStyle.italic}`,
        textDecorationLine: `${display.outputStyle.underline}`,
      }}
    >
      {display.output}
    </div>
  );
};

export {
  InputArea,
  OutputArea,
};
