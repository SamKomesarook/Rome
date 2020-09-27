import React, { useContext } from 'react';
import { DisplayContext } from '../../state/DisplayState';
import { processInstrs } from '../../lang/Common';
import { USBToggle } from './Peripherals';

const InputArea = () => {
  const [display, setDisplay] = useContext(DisplayContext);

  const handleKey = (event) => {
    if (event.keyCode === 13) {
      // Create a deep copy of display
      const staticDisplay = DisplayContext.createCustomClone(display);
      const newMem = staticDisplay.memory;

      // Get the keys of special memory cells
      const usbMemoryKey = staticDisplay.specialKeys.find((element) => element.specialContent === 'usb').key;
      if (staticDisplay.selected === usbMemoryKey) {
        USBToggle();
      } else {
        newMem[staticDisplay.selected].content = staticDisplay.input;
        newMem[staticDisplay.selected].type = 'letters';
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
        'backgroundColor': `${display.outputStyle.bgColor}`,
        color: `${display.outputStyle.txtColor}`,
        'fontSize': `${display.outputStyle.txtSize}`,
        'textAlign': `${display.outputStyle.txtAlign}`,
        'fontWeight': `${display.outputStyle.bold}`,
        'fontStyle': `${display.outputStyle.italic}`,
        'textDecorationLine': `${display.outputStyle.underline}`,
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
