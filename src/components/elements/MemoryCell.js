import React, { useContext, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { DisplayContext } from '../../state/DisplayState';
import BinaryUtil from '../../utils/BinaryUtil';

const MemoryCell = ({ id }) => {
  const [display, setDisplay] = useContext(DisplayContext);

  const memoryCell = display.memory[id];
  const selectedMemoryCell = id === display.selected ? ' selected-memory-cell' : '';

  const [shouldBinaryDisplayed, setBinaryDisplayed] = useState(false);
  const [byteCellClass, setByteCellClass] = useState(''); // Class that determines the gridlayout of binary view
  const [binaryContent, setBinaryContent] = useState('');
  const prevContent = useRef({ type: '', content: '' }); // Register cell's content to track changes

  const generateBinaryContent = () => {
    let binary = '';

    // Convert content to binary
    switch (memoryCell.type) {
      case 'string':
      case 'character':
        binary = BinaryUtil.text2Bin(memoryCell.content, memoryCell.size);
        break;
      case 'integer':
      case 'long':
        binary = BinaryUtil.num2Bin(memoryCell.content, memoryCell.size);
        break;
      case 'float':
        binary = BinaryUtil.dec2Bin(memoryCell.content, memoryCell.size);
        break;
      default:
    }

    const binaryCellList = binary.split('').map((bit, index) => (<div key={index}>{bit}</div>));
    setBinaryContent(binaryCellList);
  };

  const generateBinaryGrid = (localShouldBinaryDisplayed) => {
    
    if (memoryCell.type === '' || localShouldBinaryDisplayed === false) {
      setByteCellClass('');
    } else {
      setByteCellClass(` memory-${memoryCell.size}-bytes-cell`);
    }
  };

  // If the content in memory has been updated, then update the binary view
  if (prevContent.current.type !== memoryCell.type
    || prevContent.current.content !== memoryCell.content) {
    generateBinaryContent();
    generateBinaryGrid(shouldBinaryDisplayed);
    prevContent.current = ({ type: memoryCell.type, content: memoryCell.content });
  }

  const handleClickCell = () => {
    const newShouldBinaryDisplayed = !shouldBinaryDisplayed;
    // Show or hide the binary view based on newShouldBinaryDisplay
    generateBinaryGrid(newShouldBinaryDisplayed);
    setBinaryDisplayed(newShouldBinaryDisplayed);
  };

  return (
    <div id={`memory-${id}`} className={`memory-cell${selectedMemoryCell}${byteCellClass}`} key={memoryCell.key} onDoubleClick={handleClickCell}>
      {shouldBinaryDisplayed ? binaryContent : memoryCell.content}
    </div>
  );
};

MemoryCell.propTypes = {
  id: PropTypes.number.isRequired,
};

export default MemoryCell;
