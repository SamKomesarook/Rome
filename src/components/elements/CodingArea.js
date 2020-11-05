import React, { useContext } from 'react';
import React, { useContext, useRef, useEffect } from 'react';
import Cookies from 'js-cookie';
import { DisplayContext } from '../../state/DisplayState';

const CodingArea = () => {
  const [display, setDisplay] = useContext(DisplayContext);
  const codingAreaWrapperRef = useRef(null);

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
    // Because of Typed library, CodingAreaRef cannot be assigned directly, thus, this workaround
    const codingArea = codingAreaWrapperRef.current.children[0].children[0];
    const savedCode = Cookies.get('history');
    if (savedCode) { // Only load when there is saved code
      codingArea.value = savedCode;
    }
  }, [codingAreaWrapperRef]);

  return (
    <div id="coding-area-wrapper" className="code highlightable-input">
      <textarea id="coding-area" onChange={handleChange.bind(this)} spellCheck={false} />
    </div>
  );
};

export default CodingArea;
