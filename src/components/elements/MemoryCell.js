import React, { useContext, useState } from 'react';
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
  const [registeredContent, setRegisteredContent] = useState(''); // Register cell's content to track changes

  const generateBinaryView = () => {
    let binary = '';

    // Convert content to binary
    if (memoryCell.type === 'letters' || memoryCell.type === 'string' || memoryCell.type === 'char') { // TODO - Nick: Remove letters after data types are updated
      binary = BinaryUtil.text2Bin(memoryCell.content);
    } else if (memoryCell.type === 'numbers' || memoryCell.type === 'int') { // TODO - Nick: Remove numbers after data types are updated
      binary = BinaryUtil.dec2Bin(memoryCell.content);
    }

    const binaryCellList = binary.split('').map((bit, index) => (<div key={index}>{bit}</div>));
    setBinaryContent(binaryCellList);
  };

  // If the content in memory has been updated, then update the binary view
  if (registeredContent !== memoryCell.content) {
    generateBinaryView();
    setRegisteredContent(memoryCell.content);
  }

  const handleClickCell = () => {
    let newShouldBinaryDisplayed = !shouldBinaryDisplayed;

    // Check if there is content to switch to binary view
    if (newShouldBinaryDisplayed && memoryCell.type !== '') {
      if (memoryCell.type === 'letters' || memoryCell.type === 'string') { // TODO - Nick: Remove letters after data types are updated
        setByteCellClass(' memory-6-bytes-cell');
      } else if (memoryCell.type === 'numbers' || memoryCell.type === 'int') { // TODO - Nick: Remove numbers after data types are updated
        setByteCellClass(' memory-2-bytes-cell');
      } else if (memoryCell.type === 'char'){
        setByteCellClass(' memory-1-byte-cell');
      }
    } else {
      // Always switch off binary view when there is no content in cell
      newShouldBinaryDisplayed = false;
      setByteCellClass('');
    }

    setBinaryDisplayed(newShouldBinaryDisplayed);
  };

  return (
    <div id={`memory-${id}`} className={`memory-cell${selectedMemoryCell}${byteCellClass}`} key={memoryCell.key} onClick={handleClickCell}>
      {shouldBinaryDisplayed ? binaryContent : memoryCell.content}
    </div>
  );
};

MemoryCell.propTypes = {
  id: PropTypes.number.isRequired,
};

export default MemoryCell;
