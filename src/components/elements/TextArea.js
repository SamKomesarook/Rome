import { string } from 'prop-types';
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

  function updateEditor() {
    const sel = window.getSelection();
    const textSegments = getTextSegments(textArea.current);
    const textContent = textSegments.map(({ text }) => text).join('');
    let anchorIndex = null;
    let focusIndex = null;
    let currentIndex = 0;
    textSegments.forEach(({ text, node }) => {
      if (node === sel.anchorNode) {
        anchorIndex = currentIndex + sel.anchorOffset;
      }
      if (node === sel.focusNode) {
        focusIndex = currentIndex + sel.focusOffset;
      }
      currentIndex += text.length;
    });

    textArea.current.innerHTML = updateColor(textContent);

    restoreSelection(anchorIndex, focusIndex);
  }

  function restoreSelection(absoluteAnchorIndex, absoluteFocusIndex) {
    const sel = window.getSelection();
    const textSegments = getTextSegments(textArea.current);
    let anchorNode = textArea.current;
    let anchorIndex = 0;
    let focusNode = textArea.current;
    let focusIndex = 0;
    let currentIndex = 0;
    textSegments.forEach(({ text, node }) => {
      const startIndexOfNode = currentIndex;
      const endIndexOfNode = startIndexOfNode + text.length;
      if (startIndexOfNode <= absoluteAnchorIndex && absoluteAnchorIndex <= endIndexOfNode) {
        anchorNode = node;
        anchorIndex = absoluteAnchorIndex - startIndexOfNode;
      }
      if (startIndexOfNode <= absoluteFocusIndex && absoluteFocusIndex <= endIndexOfNode) {
        focusNode = node;
        focusIndex = absoluteFocusIndex - startIndexOfNode;
      }
      currentIndex += text.length;
    });

    sel.setBaseAndExtent(anchorNode, anchorIndex, focusNode, focusIndex);
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

  // const updateColor = () => {
  //   console.log('innerText', textArea.current.innerText);
  //   // const lines = textArea.current.innerText.split(/\r\n|\r|\n|\n\n|\r\r/);
  //   // const linesLevel1 = textArea.current.innerText.split(/\r<br>?\n<br>/);
  //   const linesLevel1 = textArea.current.innerText.split('\n<br>');
  //   // const lines = textArea.current.innerText.split('\n');
  //   console.log('lines split', linesLevel1);

  //   // return lines.join('join');
  //   const output = linesLevel1.map((lineLevel1) => {
  //     const linesLevel2 = lineLevel1.split(/\r?\n/);
  //     const outputLevel1 = linesLevel2.map((line) => {
  //       const words = line.split(' ');
  //       const lineOutput = words.map((word) => {
  //         if (word === 'start') {
  //           // return `<span style='color: ${colorCode.macroWrapper}'>${word}</span>`;
  //           return `<span style='color: red'>${word}</span>`;
  //         }
  //         return word;
  //       });

  //       return lineOutput.join('');
  //     });
  //     return outputLevel1.join('<br>');
  //   });

  //   // console.log('output', output);
  //   // if (output.length >= 3) {
  //   //   if (output[1] === '\n') {
  //   //     console.log('output 1 is new line');
  //   //   }
  //   //   if (output[1] === ''){
  //   //     console.log('output 1 is empty');
  //   //   }
  //   //   if (output[2] === '\n') {
  //   //     console.log('output 2 is new line');
  //   //   }
  //   //   if (output[2] === ''){
  //   //     console.log('output 2 is empty');
  //   //   }
  //   // }

  //   // output.push('</div');
  //   // output.unshift('<div>');
  //   // return output.join('</div><div>');
  //   return output.join('<br>');
  //   // textArea.current.innerHTML = output.join('<br>');
  // };
  const updateColor = () => {
    // const lines = textArea.current.innerText.split('\n');
    console.log('before replaced', textArea.current.innerHTML);
    console.log('replaced', textArea.current.innerHTML
      .replace(/<span...>/g, '')
      .replace(/<\/span>/g, ''));

    const lines = textArea.current.innerHTML
      .replace(/<span...>/g, '')
      .replace(/<\/span>/g, '')
      .replace(/<\/div>/g, '')
      .split('<div>');

    console.log('lines', lines);
    // return lines.join('join');
    const output = lines.map((line) => {
      const words = line.split(' ');
      const lineOutput = words.map((word) => {
        console.log('word', word);
        console.log('word.length', word.length);
        if (word == 'start') {
          console.log('word is start');
          // return `<div style='color: ${colorCode.macroWrapper}'>${word}</div>`;
          return `<span style='color: red'>${word}</span>`;
        }
        return word;
      });
      console.log('lineOutput', lineOutput);
      return `<div>${lineOutput.join('')}</div>`;
    });
    
    // if (output.join('<br>').slice(-8) !== '<br><br>') {
      //   return output.join('<br>').concat('<br>');
      // }
      console.log('output', output);
    // textArea.current.innerHTML = output.join('');
    return output.join('');
    // textArea.current.innerHTML = output.join('');
  };
  // const updateColor = () => {
  //   // const lines = textArea.current.innerText.split('\n');
  //   console.log('before replaced', textArea.current.innerHTML);
  //   console.log('replaced', textArea.current.innerHTML
  //     .replace(/<span...>/g, '')
  //     .replace(/<\/span>/g, '')
  //     .replace(/<div>/g, '')
  //     .replace(/<\/div>/g, ''));

  //   const lines = textArea.current.innerHTML
  //     .replace(/<span...>/g, '')
  //     .replace(/<\/span>/g, '')
  //     .replace(/<div>/g, '')
  //     .replace(/<\/div>/g, '')
  //     .split('<br>');

  //   console.log('lines', lines);
  //   // return lines.join('join');
  //   const output = lines.map((line) => {
  //     const words = line.split(' ');
  //     const lineOutput = words.map((word) => {
  //       if (word === 'start') {
  //         // return `< style='color: ${colorCode.macroWrapper}'>${word}</>`;
  //         return `<span style='color: red'>${word}</span>`;
  //       }
  //       return word;
  //     });
  //     return lineOutput.join('');
  //   });

  //   if (output.join('<br>').slice(-8) !== '<br><br>') {
  //     return output.join('<br>').concat('<br>');
  //   }
  //   return output.join('<br>');
  // };

  const diff = (newText, oldText) => {
    const getDiff = (long, short) => {
      // console.log('long', long);
      // console.log('short', short);
      return long.split(short).join('');
    };
    console.log('newText', newText);
    console.log('oldText', oldText)
    return newText.length > oldText.length ? getDiff(newText, oldText) : getDiff(oldText, newText);
  };

  function handleChange(event) {
    event.preventDefault();
    const txtDiff = diff(textArea.current.innerText, prevInput.current);
    console.log('txtDiff', txtDiff);
    if (txtDiff.replace(/\n/g, '').length > 0) {
      updateEditor();
      // updateColor();
    }
    console.log('innerHTML', textArea.current.innerHTML);
    const value = event.target.innerText;
    // TODO ensure the below includes newline breaks and shit...
    setDisplay((prevDisplay) => ({
      ...prevDisplay,
      text: value,
    }));

    prevInput.current = textArea.current.innerText;
  }

  // Init placeholder on DOM load
  // document.addEventListener('DOMContentLoaded', () => new TypeWriter(textArea.current, sample));

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
