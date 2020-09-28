import React, { useContext } from 'react';
import { DisplayContext } from '../../state/DisplayState';

const Switch = () => {
  const [display, setDisplay] = useContext(DisplayContext);

  function onChange(event) {
    const value = display.machine;
    const newMem = display.memory;
    for (const mem of newMem) {
      !value ? mem.content = 0 : mem.content = '';
    }
    setDisplay((prevDisplay) => ({
      ...prevDisplay,
      machine: !value,
    }));
  }

  return (
    <div id="switch-container">
      <label className="switch" htmlFor="machine-language-switch">
        <input type="checkbox" id="machine-language-switch" onChange={onChange.bind(this)} disabled={display.running ? 'disabled' : ''} />
        <span className="slider round" />
      </label>
    </div>
  );
};

export default Switch;
