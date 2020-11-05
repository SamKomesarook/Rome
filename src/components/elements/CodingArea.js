import React, { useContext } from 'react';
import Typed from 'react-typed';
import { DisplayContext } from '../../state/DisplayState';

const CodingArea = () => {
  const [display, setDisplay] = useContext(DisplayContext);

  function handleChange(event) {
    event.preventDefault();
    const { value } = event.target;
    // TODO ensure the below includes newline breaks and shit...
    setDisplay((prevDisplay) => ({
      ...prevDisplay,
      text: value,
    }));
  }

  return (
    <div id="coding-area-wrapper" className="code highlightable-input">
      <textarea id="coding-area" onChange={handleChange.bind(this)} spellCheck={false} />
    </div>
  );
};

export default CodingArea;
