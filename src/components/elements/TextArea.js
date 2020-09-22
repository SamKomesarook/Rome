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

    Array.from(element.childNodes).forEach((node) => {
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

  function restoreSelection(absolateAnchorNode, absoluteAnchorIndex, absoluteFocusNode, absoluteFocusIndex, absoluteSelSegmentIndex) {
    const sel = window.getSelection();
    const textSegments = getTextSegments(textArea.current);
    let anchorNode = textArea.current;
    let anchorIndex = 0;
    let focusNode = textArea.current;
    let focusIndex = 0;
    let currentIndex = 0;

    let hasAnchorIndex = false;
    let hasFocusIndex = false;
    let currentSegmentIndex = 0;
    // textSegments.forEach(({ text, node }) => {
    //   console.log('text in segment', text);
    //   console.log('node in segment', node);
    //   const startIndexOfNode = currentIndex;
    //   const endIndexOfNode = startIndexOfNode + text.length;
    //   if (startIndexOfNode <= absoluteAnchorIndex && absoluteAnchorIndex <= endIndexOfNode && currentSegmentIndex === absoluteSelSegmentIndex) {
    //     console.log('absoluteAnchorIndex is in range');
    //     anchorNode = node;
    //     anchorIndex = absoluteAnchorIndex - startIndexOfNode;
    //     // hasAnchorIndex = true;
    //   }
    //   if (startIndexOfNode <= absoluteFocusIndex && absoluteFocusIndex <= endIndexOfNode && currentSegmentIndex === absoluteSelSegmentIndex) {
    //     console.log('absoluteFocusIndex is in range');
    //     focusNode = node;
    //     focusIndex = absoluteFocusIndex - startIndexOfNode;
    //     // hasFocusIndex = true;
    //   }
    //   currentIndex += text.length;
    // });
    
    for (let i = 0; i < textSegments.length; i++) {
      console.log('text in segment', textSegments[i].text);
      console.log('node in segment', textSegments[i].node);
      const startIndexOfNode = currentIndex;
      const endIndexOfNode = startIndexOfNode + textSegments[i].text.length;
      if (startIndexOfNode <= absoluteAnchorIndex && absoluteAnchorIndex <= endIndexOfNode && i === absoluteSelSegmentIndex) {
        console.log('absoluteAnchorIndex is in range');
        anchorNode = textSegments[i].node;
        anchorIndex = absoluteAnchorIndex - startIndexOfNode;
        // hasAnchorIndex = true;
      }
      if (startIndexOfNode <= absoluteFocusIndex && absoluteFocusIndex <= endIndexOfNode && i === absoluteSelSegmentIndex) {
        console.log('absoluteFocusIndex is in range');
        focusNode = textSegments[i].node;
        focusIndex = absoluteFocusIndex - startIndexOfNode;
        // hasFocusIndex = true;
      }
      currentIndex += textSegments[i].text.length;
    }

    console.log('To focus: anchorNode', anchorNode);
    console.log('To focus: abosulateAnchorNode', absolateAnchorNode);
    console.log('To focus: anchorIndex', anchorIndex);
    console.log('To focus: focusNode', focusNode);
    console.log('To focus: focusIndex', focusIndex);
    console.log('To focus: absoluteFocusNode', absoluteFocusNode);

    console.log(`anchorNode and absoluteAnchorNode is the same ${anchorNode === absolateAnchorNode}`);
    sel.setBaseAndExtent(anchorNode, anchorIndex, focusNode, focusIndex);
    // sel.setBaseAndExtent(absolateAnchorNode, anchorIndex, absoluteFocusNode, focusIndex);
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

    console.log('lines', lines);
    const output = lines.map((line) => {
      const words = line.split(' ');
      console.log('words', words);
      const lineOutput = words.map((word) => {
        if (word === 'start') {
          // return `<div style='color: ${colorCode.macroWrapper}'>${word}</div>`;
          return `<span style='color: red'>${word}</span>`;
        }
        return word;
      });
      return `<div>${lineOutput.join('')}</div>`;
    });

    return output.join('');
  };

  function updateEditor() {
    console.log('window', window);
    const sel = window.getSelection();
    console.log('sel', sel);

    const textSegments = getTextSegments(textArea.current);
    console.log('textSegments', textSegments);

    const textContent = textSegments.map(({ text }) => text).join('');
    console.log('textContent', textContent);

    let anchorIndex = null;
    let focusIndex = null;
    let currentIndex = 0;

    let selSegmentIndex = 0;

    const anchorNode = sel.anchorNode;
    const focusNode = sel.focusNode;
    // anchorIndex = sel.anchorOffset;
    console.log('anchorNode', anchorNode);
    console.log('focusNode', focusNode);

    // textSegments.forEach(({ text, node }) => {
    //   if (node === sel.anchorNode) {
    //     anchorIndex = currentIndex + sel.anchorOffset;
    //     // break;
    //   }
    //   if (node === sel.focusNode) {
    //     focusIndex = currentIndex + sel.focusOffset;
    //   }
    //   currentIndex += text.length;

    //   selSegmentIndex++;
    // });
    for (let i = 0; i < textSegments.length; i++) {
      if (textSegments[i].node === sel.anchorNode) {
        anchorIndex = currentIndex + sel.anchorOffset;
        selSegmentIndex = i;
      }
      if (textSegments[i].node === sel.focusNode) {
        focusIndex = currentIndex + sel.focusOffset;
      }
      currentIndex += textSegments[i].text.length;
    }

    console.log('anchorIndex', anchorIndex);
    console.log('focusIndex', focusIndex);

    textArea.current.innerHTML = updateColor(textContent);

    
    // console.log('after anchorNode', anchorNode);
    // console.log('after anchorIndex', anchorIndex);
    // sel.setPosition(anchorNode, anchorIndex);
    // sel.setBaseAndExtent()
    // sel.setBaseAndExtent(anchorNode, sel.anchorOffset, focusNode, sel.focusOffset);
    restoreSelection(anchorNode, anchorIndex, focusNode, focusIndex, selSegmentIndex);
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

    if (diff(textArea.current.innerText, prevInput.current)) {
      updateEditor();
    }

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
