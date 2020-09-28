import React, { useContext } from 'react';
import { DisplayContext } from '../../state/DisplayState';
import { RVContext } from '../../state/RVContext';

const RVButton = () => {
  const [display, setDisplay] = useContext(DisplayContext);
  const [on, setOn] = useContext(RVContext);

  const runView = () => {
    setOn((prevUI) => ({ ...prevUI, show: false }));
  };

  return (
    <button
      id="run-view"
      type="button"
      className="std-btn run-view-btn"
      onClick={runView}
    >
      RunView
    </button>
  );
};

export default RVButton;
