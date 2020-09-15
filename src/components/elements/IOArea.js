import React, { useContext } from 'react';
import { DisplayContext } from '../../state/DisplayState';
import { processInstrs } from '../../lang/Common';
import { NetToggle, USBToggle } from './Peripherals';

const InputArea = () => {
  const [display, setDisplay] = useContext(DisplayContext);

  const handleKey = (event) => {
    if (event.keyCode === 13) {
      const newMem = display.memory;

      // Get the keys of special memory cells
      const usbMemoryKey = display.specialKeys.find((element) => element.specialContent === 'usb').key;
      if (display.selected === usbMemoryKey) {
        USBToggle();
      } else {
        newMem[display.selected].content = display.input;
      }
      setDisplay((prevDisplay) => ({
        ...prevDisplay,
        memory: newMem,
        reading: false,
      }));
      processInstrs(display, setDisplay);
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
        'background-color': `${display.outputStyle.bgColor}`,
        color: `${display.outputStyle.txtColor}`,
        'font-size': `${display.outputStyle.txtSize}`,
        'text-align': `${display.outputStyle.txtAlign}`,
        'font-weight': `${display.outputStyle.bold}`,
        'font-style': `${display.outputStyle.italic}`,
        'text-decoration-line': `${display.outputStyle.underline}`,
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
