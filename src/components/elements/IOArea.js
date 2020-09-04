import React, { useContext } from 'react';
import { DisplayContext } from '../../state/DisplayState';
import { processInstrs } from '../../lang/Common';
import { NetToggle, USBToggle } from './Peripherals';

// TODO no updates use setDisplay. Should we?
const InputArea = () => {
  const [display, setDisplay] = useContext(DisplayContext);

  const handleKey = (event) => {
    if (event.keyCode === 13) {
      const newMem = display.memory;
      const netMemoryKey = display.specialMemoryCells.find((element) => element.specialContent === 'net').key;
      const usbMemoryKey = display.specialMemoryCells.find((element) => element.specialContent === 'usb').key;
      if (display.selected === netMemoryKey) {
        NetToggle();
      } else if (display.selected === usbMemoryKey) {
        USBToggle();
      } else {
        newMem[display.selected].content = display.input;
      }
      setDisplay((display) => ({
        ...display,
        memory: newMem,
        reading: false,
      }));
      processInstrs(display, setDisplay);
    }
  };

  const onChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setDisplay((display) => ({
      ...display,
      input: value,
    }));
  };

  return (
    <input
      id="input-bar"
      size="60"
      type="text"
      onKeyDown={handleKey}
      onChange={onChange}
      disabled={!display.reading}
      value={!display.reading ? '' : display.input}
    />
  );
};

const OutputArea = () => {
  const [display] = useContext(DisplayContext);
  return (
    <div contentEditable="false" id="output-area">
      {display.output}
    </div>
  );
};

export {
  InputArea,
  OutputArea,
};
