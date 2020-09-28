import React, { useContext } from 'react';
import { DisplayContext } from '../../state/DisplayState';
import { UiContext } from '../../state/UiContext';

const RVButton = () => {
  const [display, setDisplay] = useContext(DisplayContext);
  const [ui, setUi] = useContext(UiContext);
  //let flag = true;
  const handleRunView = () => {
    setUi((prevUI) => ({
      ...prevUI,
      ctxIsTextAreaActive: false,
      ctxIsMemoryActive: false,
    }));
  };

  return (
    <button
      id="run-view-button"
      type="button"
      className="std-btn run-view-btn"
      onClick={handleRunView}
    >
      Run View
    </button>
  );
};

export default RVButton;
