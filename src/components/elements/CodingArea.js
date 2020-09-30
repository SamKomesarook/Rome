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
    <div id="coding-area-wrapper">
      <Typed
        strings={[
          'start\nmove(next)\nmove(last)\nend',
          'start\nset(string)\nwrite("hello!")\nend',
          'start\nset(integer)\nwrite(4)\nend',
          'start\nset(string)\nwrite("hello")\nfree\nwrite("world!")\nend',
          'start\nloop(3){\nset(string)\nwrite("content")\nmove(next)\n}\nend',
          'start\nset(integer)\nwrite(3)\nmove(next)\nloop(memory(1)){\nset(string)\nwrite("content")\nmove(next)\n}\nend',
          'start\nset(integer)\nwrite(3)\nname("first")\nmove(next)\nloop(memory("first")){\nset(string)\nwrite("content")\nmove(next)\n}\nend',
          'start\nset(integer)\nwrite(3)\nif(is equal 3){\nmove(next)\nset(string)\nwrite("is equal to 3!")\n}\nend',
          'start\nset(integer)\nwrite(3)\nif(not less 3){\nmove(next)\nset(string)\nwrite("is not less than 3!")\n}\nend',
          'start\nset(integer)\nwrite(3)\nif(is greater 3){\nmove(next)\nset(string)\nwrite("is greater than 3!")\n}\nend',
          'start\nimport(IO)\nkeyboardRead\nend',
          'start\nimport(IO)\nconsoleWrite("hello!")\nend',
        ]}
        typeSpeed={40}
        backSpeed={30}
        attr="placeholder"
        loop
        showCursor={false}
      >
        <textarea id="coding-area" onChange={handleChange.bind(this)} spellCheck={false} />
      </Typed>
    </div>
  );
};

export default CodingArea;
