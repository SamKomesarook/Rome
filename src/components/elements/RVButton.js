import React, { useContext, useState } from 'react';
import { DisplayContext } from '../../state/DisplayState';
import { UiContext } from '../../state/UiContext';

const RVButton = () => {
  const [display, setDisplay] = useContext(DisplayContext);
  const [ui, setUi] = useContext(UiContext);

  const handleRunView = () => {
    setUi((prevUI) => ({
      ...prevUI,
      ctxIsTextAreaActive: !prevUI.ctxIsTextAreaActive,
      ctxIsMemoryActive: !prevUI.ctxIsMemoryActive,
      ctxIsSwitchActive: !prevUI.ctxIsSwitchActive,
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
