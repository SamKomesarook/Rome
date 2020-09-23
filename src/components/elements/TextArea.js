import React, { useContext, useRef } from 'react';
import { DisplayContext } from '../../state/DisplayState';
import TypeWriter from '../../utils/TypeWriter';

const TextArea = () => {
  const [display, setDisplay] = useContext(DisplayContext);
  const textArea = useRef();
  const prevInput = useRef('');

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

  const getTextSegments = (element) => {
    const textSegments = [];
    // console.log('textArea', element);
    Array.from(element.childNodes).forEach((node) => {
      // console.log('node', node);
      switch (node.nodeType) {
        case Node.TEXT_NODE:
          textSegments.push({ text: node.nodeValue, node });
          break;

        case Node.ELEMENT_NODE:
          textSegments.splice(textSegments.length, 0, ...(getTextSegments(node)));
          break;

        default:
          throw new Error(`Unexpected node type: ${node.nodeType}`);
      }
    });
    return textSegments;
  };

  function restoreSelection(absoluteAnchorIndex, absoluteSelSegmentIndex) {
    console.log('absoluteAnchorIndex', absoluteAnchorIndex);
    console.log('absoluteSelSegmentIndex', absoluteSelSegmentIndex);
    const sel = window.getSelection();
    const textSegments = getTextSegments(textArea.current);

    // console.log('textSegments', textSegments);
    // console.log('innerHTML after updated', textArea.current.innerHTML);
    // if (absoluteAnchorIndex === null) {
    //   absoluteAnchorIndex = 0;
    // }

    if (absoluteSelSegmentIndex === null) {
      absoluteSelSegmentIndex = textArea.current.innerHTML.match(/<div>/g).length - 1;
    }
    // console.log('update absoluteAnchorIndex', absoluteAnchorIndex);
    // console.log('update absoluteSelSegmentIndex', absoluteSelSegmentIndex);

    let anchorNode = textArea.current;
    let anchorIndex = 0;
    let currentIndex = 0;

    for (let i = 0; i < textSegments.length; i++) {
      const startIndexOfNode = currentIndex;
      const endIndexOfNode = startIndexOfNode + textSegments[i].text.length;

      // console.log('i', i);
      // console.log('anchorNode = textSegments[i].node', textSegments[i].node);
      // console.log('anchorIndex = absoluteAnchorIndex - startIndexOfNode', absoluteAnchorIndex - startIndexOfNode)
      // if (startIndexOfNode <= absoluteAnchorIndex
      //   && absoluteAnchorIndex <= endIndexOfNode
      //   && i === absoluteSelSegmentIndex) {
      if (i === absoluteSelSegmentIndex) {
        anchorNode = textSegments[i].node;
        anchorIndex = absoluteAnchorIndex === null ? 0 : absoluteAnchorIndex - startIndexOfNode;
        break;
      }

      currentIndex += textSegments[i].text.length;
    }

    console.log('setPos anchorNode', anchorNode);
    console.log('setPos anchorIndex', anchorIndex);
    sel.setPosition(anchorNode, anchorIndex);
  }

  function renderText(text) {
    const words = text.split(/(\s+)/);
    const output = words.map((word) => {
      if (word === 'bold') {
        return `<strong>${word}</strong>`;
      }
      if (word === 'red') {
        return `<span style='color:red'>${word}</span>`;
      }

      return word;
    });
    return output.join('');
  }

  const updateColor = () => {
    const lines = textArea.current.innerText.split('\n');
    let output = lines.map((line) => {
      const words = line.replace(/\u200C/g, '').split(' ');
      const lineOutput = words.map((word) => {
        if (word === 'start' || word === 'end') {
          return `<span style='color: ${colorCode.macroWrapper}'>${word}</span>`;
        }
        return word;
      });

      return `<div>${lineOutput.join('')}</div>`;
    });

    const lastLineIndex = output.length - 1;
    if (output[lastLineIndex] === output[lastLineIndex - 1] && output[lastLineIndex] === '<div></div>') {
      output = output.slice(0, -1);
      output[output.length - 1] = '<div>&zwnj;</div>';
    }

    return output.join('');
  };

  function updateEditor() {
    const sel = window.getSelection();
    const textSegments = getTextSegments(textArea.current);
    console.log('textSegments', textSegments);
    const textContent = textSegments.map(({ text }) => text).join('');

    let anchorIndex = null;
    let currentIndex = 0;
    let selSegmentIndex = null;

    for (let i = 0; i < textSegments.length; i++) {
      if (textSegments[i].node === sel.anchorNode) {
        anchorIndex = currentIndex + sel.anchorOffset;
        selSegmentIndex = i;
        break;
      }
      currentIndex += textSegments[i].text.length;
    }

    textArea.current.innerHTML = updateColor(textContent);

    restoreSelection(anchorIndex, selSegmentIndex);
  }

  const diff = (newText, oldText) => {
    // const getDiff = (long, short) => long.split(short).join('');
    // const getDiff = (long, short) => long.replace(short, '');
    // const getDiff = (long, short) => long.split(short);

    let isCharactersChanged = false;

    // if (newText.length > oldText.length) {
    //   newText.replace(oldText, '');
    // } else {
    // }
    const oldTextLines = oldText.split(/\n/);
    const newTextLines = newText.split(/\n/);

    if (newTextLines.length === oldTextLines.length) {
      isCharactersChanged = true;
    } else if (newTextLines.length > oldTextLines.length) {
      while (true) {
        let currentOldLine;
        do {
          currentOldLine = oldTextLines.shift();
        } while (currentOldLine !== undefined || currentOldLine === '');

        let currentNewLine;
        do {
          currentNewLine = newTextLines.shift();
        } while (currentNewLine !== undefined || currentNewLine === '');

        if (currentOldLine !== currentNewLine) {
          isCharactersChanged = true;
          break;
        } else if (currentNewLine === undefined || currentOldLine === undefined) {
          break;
        }
      }
    } else {
      // let isLeftToRight = true;
      // while (true) {
      //   let currentOldLine;
      //   do {
      //     currentOldLine = oldTextLines.shift();
      //   } while (currentOldLine !== undefined || currentOldLine === '');

      //   let currentNewLine;
      //   do {
      //     currentNewLine = newTextLines.shift();
      //   } while (currentNewLine !== undefined || currentNewLine === '');

      //   if (currentOldLine !== currentNewLine) {
      //     isCharactersChanged = true;
      //     break;
      //   } else if (currentNewLine === undefined || currentOldLine === undefined) {
      //     break;
      //   }
      // }
    }

    return isCharactersChanged;
    // return newText.length > oldText.length ? getDiff(newText, oldText) : getDiff(oldText, newText);
  };

  const handleChange = (event) => {
    event.preventDefault();
    // const txtDiff = diff(textArea.current.innerText, prevInput.current);
    // if (txtDiff.replace(/\n/g, '').length > 0) {
    //   updateEditor();
    //   // updateColor();
    // }

    // if (diff(textArea.current.innerText, prevInput.current)) {
      updateEditor();
    // }

    const value = event.target.innerText;
    // TODO ensure the below includes newline breaks and shit...
    setDisplay((prevDisplay) => ({
      ...prevDisplay,
      text: value,
    }));

    prevInput.current = textArea.current.innerText;
  };

  // Init placeholder on DOM load
  document.addEventListener('DOMContentLoaded', () => new TypeWriter(textArea.current, sample));

  return (
    <div id="coding-area-wrapper">
      <div
        ref={textArea}
        id="coding-area"
        onInput={handleChange}
        spellCheck={false}
        contentEditable="true"
        data-placeholder=""
      />
    </div>
  );
};

export default TextArea;
