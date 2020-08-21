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
      if (display.selected === 10) {
        NetToggle();
      } else if (display.selected === 11) {
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
      id="inputBar"
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
    <div contentEditable="false" id="outputArea">
      {display.output}
    </div>
  );
};

export {
  InputArea,
  OutputArea,
};
