import React, { useContext } from 'react';
import '../styles/styles.css';
import { DisplayContext } from '../../state/DisplayState';

const Switch = () => {
  const [display, setDisplay] = useContext(DisplayContext);

  function onChange(event) {
    const value = display.machine;
    const newMem = display.memory;
    for (const mem of newMem) {
      !value ? mem.content = 0 : mem.content = '';
    }
    setDisplay((display) => ({
      ...display,
      machine: !value,
    }));
  }

  return (
    <div>
      <input
        className="react-switch-checkbox"
        id="react-switch-new"
        type="checkbox"
        onChange={onChange.bind(this)}
        disabled={display.running ? 'disabled' : ''}
      />
      <label
        style={{ background: display.machine && '#06D6A0' }}
        className="react-switch-label"
        htmlFor="react-switch-new"
      >
        <span className="react-switch-button" />
      </label>
    </div>
  );
};

export default Switch;
