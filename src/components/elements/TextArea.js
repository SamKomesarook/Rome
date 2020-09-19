import React, { useContext, useRef } from 'react';
import Typed from 'react-typed';
import { DisplayContext } from '../../state/DisplayState';
// import TypingEffect from '../../utils/TypingEffect';
import TxtType from '../../utils/TypingEffect';
import TypeWriter from '../../utils/TypeWriter';

const TextArea = () => {
  const [display, setDisplay] = useContext(DisplayContext);
  const textArea = useRef();

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

  const options = {
    strings: sample,
    typeSpeed: 40,
    backSpeed: 30,
    attr: 'placeholder',
    loop: true,
    showCursor: true,
  };

  // const typed = new Typed('#coding-area', options);

  // const editor = document.getElementById('editor');
  // const selectionOutput = document.getElementById('selection');

  // const getTextSegments = (element) => {
  //   const textSegments = [];
  //   console.log('element', element);
  //   console.log('element.childNodes', element.childNodes);
  //   Array.from(element.childNodes).forEach((node) => {
  //     switch (node.nodeType) {
  //       case Node.TEXT_NODE:
  //         textSegments.push({ text: node.nodeValue, node });
  //         break;

  //       case Node.ELEMENT_NODE:
  //         textSegments.splice(textSegments.length, 0, ...(getTextSegments(node)));
  //         break;

  //       default:
  //         throw new Error(`Unexpected node type: ${node.nodeType}`);
  //     }
  //   });
  //   return textSegments;
  // };

  // // editor.addEventListener('input', updateEditor);

  // function updateEditor() {
  //   const sel = window.getSelection();
  //   const textSegments = getTextSegments(textArea.current);
  //   const textContent = textSegments.map(({ text }) => text).join('');
  //   let anchorIndex = null;
  //   let focusIndex = null;
  //   let currentIndex = 0;
  //   textSegments.forEach(({ text, node }) => {
  //     if (node === sel.anchorNode) {
  //       anchorIndex = currentIndex + sel.anchorOffset;
  //     }
  //     if (node === sel.focusNode) {
  //       focusIndex = currentIndex + sel.focusOffset;
  //     }
  //     currentIndex += text.length;
  //   });

  //   textArea.current.innerHTML = renderText(textContent);

  //   restoreSelection(anchorIndex, focusIndex);
  // }

  // function restoreSelection(absoluteAnchorIndex, absoluteFocusIndex) {
  //   const sel = window.getSelection();
  //   const textSegments = getTextSegments(textArea.current);
  //   let anchorNode = textArea.current;
  //   let anchorIndex = 0;
  //   let focusNode = textArea.current;
  //   let focusIndex = 0;
  //   let currentIndex = 0;
  //   textSegments.forEach(({ text, node }) => {
  //     const startIndexOfNode = currentIndex;
  //     const endIndexOfNode = startIndexOfNode + text.length;
  //     if (startIndexOfNode <= absoluteAnchorIndex && absoluteAnchorIndex <= endIndexOfNode) {
  //       anchorNode = node;
  //       anchorIndex = absoluteAnchorIndex - startIndexOfNode;
  //     }
  //     if (startIndexOfNode <= absoluteFocusIndex && absoluteFocusIndex <= endIndexOfNode) {
  //       focusNode = node;
  //       focusIndex = absoluteFocusIndex - startIndexOfNode;
  //     }
  //     currentIndex += text.length;
  //   });

  //   sel.setBaseAndExtent(anchorNode, anchorIndex, focusNode, focusIndex);
  // }

  // function renderText(text) {
  //   const words = text.split(/(\s+)/);
  //   const output = words.map((word) => {
  //     if (word === 'bold') {
  //       return `<strong>${word}</strong>`;
  //     }
  //     if (word === 'red') {
  //       return `<span style='color:red'>${word}</span>`;
  //     }

  //     return word;
  //   });
  //   return output.join('');
  // }

  // updateEditor();

  function handleChange(event) {
    // TypingEffect(textArea.current);
    event.preventDefault();
    // updateEditor();
    console.log('target', event.target);
    const value = event.target.innerText;
    // TODO ensure the below includes newline breaks and shit...
    setDisplay((prevDisplay) => ({
      ...prevDisplay,
      text: value,
    }));
  }

  //   if (textArea.current !== undefined) {
  //     console.log('textArea', textArea.current);
  //     // TypingEffect(textArea.current);
  // TxtType(textArea, [ "Hi, Im Si.", "I am Creative.", "I Love Design.", "I Love to Develop." ], 2000);
  //   }

  // Init App
  function init() {
  // const txtElement = document.querySelector('#coding-area');
    const words = JSON.parse(textArea.current.getAttribute('data-words'));
    const wait = textArea.current.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(textArea.current, words, wait);
  }
  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init);

  return (
    <div id="coding-area-wrapper">
      {/* <Typed
        strings={[
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
        ]}
        typeSpeed={40}
        backSpeed={30}
        attr="placeholder"
        loop
        showCursor
      > */}
      {/* <div ref={textArea} id="coding-area" className="typewriter" onInput={handleChange} spellCheck={false} contentEditable="true"
      data-period="2000"
      data-type='[ "Hi, Im Si.", "I am Creative.", "I Love Design.", "I Love to Develop." ]'>
        <span className="wrap"></span>
        </div> */}
      <div
        ref={textArea}
        id="coding-area"
        className="typewriter"
        onInput={handleChange}
        spellCheck={false}
        contentEditable="true"
        data-words='[ "Hi, Im Si.", "I am Creative.", "I Love Design.", "I Love to Develop." ]'
        data-wait="3000"
      >
        <span className="wrap" />
      </div>
      {/* </Typed> */}
    </div>
  );
};

export default TextArea;
