import React, {Component, useContext} from 'react';
import "../styles/styles.css";
import {DisplayContext} from '../../state/DisplayState'

const Switch = () => {

    const [display, setDisplay] = useContext(DisplayContext);

    function onChange(event) {
        var value = display.machine
        setDisplay(display => ({
            ...display,
            machine: !value //TODO this does not seem to update fast enough
        }))
    }

  return (
    <>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        onChange={onChange.bind(this)}
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;
