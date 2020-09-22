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

    // TODO - Nick: Use bytes storage var after datatypes are updated
    // Convert content to binary
    if (memoryCell.type === 'letters' || memoryCell.type === 'string' || memoryCell.type === 'char') {
      binary = BinaryUtil.text2Bin(memoryCell.content, 6);
    } else if (memoryCell.type === 'char') {
      binary = BinaryUtil.text2Bin(memoryCell.content, 1);
    } else if (memoryCell.type === 'numbers' || memoryCell.type === 'int') {
      binary = BinaryUtil.num2Bin(memoryCell.content, 2);
    } else if (memoryCell.type === 'long') {
      binary = BinaryUtil.num2Bin(memoryCell.content, 4);
    } else if (memoryCell.type === 'float') {
      binary = BinaryUtil.dec2Bin(memoryCell.content, 4);
    }

    const binaryCellList = binary.split('').map((bit, index) => (<div key={index}>{bit}</div>));
    setBinaryContent(binaryCellList);
  };

  const generateBinaryGrid = (localShouldBinaryDisplayed) => {
    // TODO - Nick: Use bytes storage var after datatypes are updated
    if (memoryCell.type === '' || localShouldBinaryDisplayed === false) {
      setByteCellClass('');
    } else if (memoryCell.type === 'letters' || memoryCell.type === 'string') {
      setByteCellClass(' memory-6-bytes-cell');
    } else if (memoryCell.type === 'long' || memoryCell.type === 'float') {
      setByteCellClass(' memory-4-bytes-cell');
    } else if (memoryCell.type === 'numbers' || memoryCell.type === 'int') {
      setByteCellClass(' memory-2-bytes-cell');
    } else if (memoryCell.type === 'char') {
      setByteCellClass(' memory-1-byte-cell');
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
