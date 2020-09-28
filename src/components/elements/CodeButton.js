import React, { useContext } from 'react';
import { DisplayContext } from '../../state/DisplayState';
import { UiContext } from '../../state/UiContext';

const RVButton = () => {
  const [display, setDisplay] = useContext(DisplayContext);
  const [ui, setUi] = useContext(UiContext);
  //let flag = true;
  const handleCodeView = () => {
    setUi((prevUI) => ({
      ...prevUI,
      ctxIsTextAreaActive: true,
      ctxIsMemoryActive: true,
    }));
  };

  return (
    <button
      id="code-view-button"
      type="button"
      className="std-btn code-view-btn"
      onClick={handleCodeView}
    >
      Code Mode
    </button>
  );
};

export default RVButton;