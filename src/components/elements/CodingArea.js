import React, { useContext, useRef } from 'react';
import { DisplayContext } from '../../state/DisplayState';
import TypeWriter from '../../utils/TypeWriter';

const CodingArea = () => {
  const [display, setDisplay] = useContext(DisplayContext);
  const codingAreaRef = useRef();
  const colorLayerRef = useRef();
  const sample = [  
    'start\nmove(next)\nmove(last)\nend',
    'start\nset(letters)\nwrite("hello!")\nend',
    'start\nset(numbers)\nwrite(4)\nend',
    'start\nset(letters)\nwrite("hello")\nfree\nwrite("world!")\nend',
    'start\nloop(3){\nset(letters)\nwrite("content")\nmove(next)\n}\nend',
    'start\nset(numbers)\nwrite(3)\nmove(next)\nloop(memory(1)){\nset(letters)\nwrite("content")\nmove(next)\n}\nend',
    'start\nset(numbers)\nwrite(3)\nname("first")\nmove(next)\nloop(memory("first")){\nset(letters)\nwrite("content")\nmove(next)\n}\nend',
    'start\nset(numbers)\nwrite(3)\nif(is equal 3){\nmove(next)\nset(letters)\nwrite("is equal to 3!")\n}\nend',
    'start\nset(numbers)\nwrite(3)\nif(not less 3){\nmove(next)\nset(letters)\nwrite("is not less than 3!")\n}\nend',
    'start\nset(numbers)\nwrite(3)\nif(is greater 3){\nmove(next)\nset(letters)\nwrite("is greater than 3!")\n}\nend',
    'start\nimport(network)\nn_write("hello!")\nend',
    'start\nimport(network)\nn_read\nend',
    'start\nimport(IO)\nk_read\nend',
    'start\nimport(IO)\nk_write("hello!")\nend',
  ];

  const colorCode = {
    macroWrapper: '#a3b1bf',
  };

  // function handleChange(event) {
  //   event.preventDefault();
  //   const { value } = event.target;
  //   // TODO ensure the below includes newline breaks and shit...
  //   setDisplay((prevDisplay) => ({
  //     ...prevDisplay,
  //     text: value,
  //   }));
  // }

  const updateColor = (lines) => {
    console.log('lines', lines);
    const styledLines = lines.map((line) => {
      if (line === '') {
        return '<br>';
      }
      return line.replace(/start/, `<span style='color: ${colorCode.macroWrapper}'>start</span>`);
    });
    styledLines.unshift('<div>');
    styledLines.push('</div>');
    const output = styledLines.join('</div><div>');
    console.log('output', output);
    return output;
  };

  const stripOffHTML = (innerHTML) => {
    const lines = innerHTML.split(/<\/div><div>/g);
    const textOnlyLines = lines.map((line) => line.replace(/<\/?div>|<span([A-Z]+)*<\/span>|<br>/g, ''));
    return textOnlyLines;
  };

  function handleChange(e) {
    e.preventDefault();
    const { innerHTML } = e.target;

    const lines = stripOffHTML(innerHTML);
    // console.log('e', e);
    // console.log('value', text);

    colorLayerRef.current.innerHTML = updateColor(lines);
    // console.log('colorLayerRef', colorLayerRef.current);

    // setDisplay((prevDisplay) => ({
    //   ...prevDisplay,
    //   text,
    // }));
  }

  // Init placeholder on DOM load
  document.addEventListener('DOMContentLoaded', () => new TypeWriter(codingAreaRef.current, sample));

  return (
    <div id="coding-area-wrapper" className="code highlightable-input">
      <div
        id="coding-area-color-layer"
        ref={colorLayerRef}
      />
      <div
        id="coding-area"
        ref={codingAreaRef}
        onInput={handleChange}
        // className="highlightable-input"
        spellCheck={false}
        contentEditable="true"
        data-placeholder=""
      />
    </div>
  );
};

export default CodingArea;
