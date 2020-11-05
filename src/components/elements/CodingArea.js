import React, { useContext, useRef, useEffect } from 'react';
import Cookies from 'js-cookie';
import { DisplayContext } from '../../state/DisplayState';

const CodingArea = () => {
  const [display, setDisplay] = useContext(DisplayContext);
  const codingAreaRef = useRef(null);

  function handleChange(event) {
    event.preventDefault();
    const { value } = event.target;
    // TODO ensure the below includes newline breaks and shit...
    setDisplay((prevDisplay) => ({
      ...prevDisplay,
      text: value,
    }));
    Cookies.set('history', value, { expires: 3 });
  }

  useEffect(() => {
    const codingArea = codingAreaRef.current;
    const savedCode = Cookies.get('history');
    if (savedCode) { // Only load when there is saved code
      codingArea.value = savedCode;
    }
  }, []);

  return (
    <div id="coding-area-wrapper" className="code highlightable-input">
      <textarea ref={codingAreaRef} id="coding-area" onChange={handleChange.bind(this)} spellCheck={false} />
    </div>
  );
};

export default CodingArea;
