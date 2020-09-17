import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { DisplayContext } from '../../state/DisplayState';
import BinaryUtil from '../../utils/BinaryUtil';

const MemoryCell = ({ id }) => {
  const [display, setDisplay] = useContext(DisplayContext);

  const memoryCell = display.memory[id];
  const selectedMemoryCell = id === display.selected ? ' selected-memory-cell' : '';

  const [shouldBinaryDisplayed, setBinaryDisplayed] = useState(false);
  const [byteCellClass, setByteCellClass] = useState('');

  let binaryCellList;
  const [binaryContent, setBinaryContent] = useState('');

  const [registeredContent, setRegisteredContent] = useState('');

  const handleClickCell = () => {
    let newShouldBinaryDisplayed = !shouldBinaryDisplayed;

    console.log('content length', memoryCell.content.length);
    console.log('type', memoryCell.type);

    // Check if there is content to switch to binary view
    if (newShouldBinaryDisplayed) {
      if (memoryCell.type === 'letters') {
      } else if (memoryCell.type === 'numbers') {
        setByteCellClass(' memory-2-byte-cell');
      }
    } else {
    //   newShouldBinaryDisplayed = false;
      setByteCellClass('');
    }

    console.log('newShouldBinaryDisplayed', newShouldBinaryDisplayed);
    setBinaryDisplayed(newShouldBinaryDisplayed);
  };

  const generateBinaryView = () => {
    let binary = '';

    if (memoryCell.type === 'letters') {
      binary = BinaryUtil.text2Bin(memoryCell.content);
    } else if (memoryCell.type === 'numbers') {
      binary = BinaryUtil.dec2Bin(memoryCell.content);
    }

    binaryCellList = binary.split('').map((bit, index) => (<div key={index}>{bit}</div>));
    setBinaryContent(binaryCellList);
  };

  if (registeredContent !== memoryCell.content) {
    generateBinaryView();
    setRegisteredContent(memoryCell.content);
  }

  return (
    <div id={`memory-${id}`} className={`memory-cell${selectedMemoryCell}${byteCellClass}`} key={memoryCell.key} onClick={handleClickCell}>
      {/* {shouldBinaryDisplayed ? binaryCellLists : memoryCell.content} */}
      {shouldBinaryDisplayed ? binaryContent : memoryCell.content}
      {/* {memoryCellDisplay} */}
      {/* {contentView} */}
    </div>
  );
};

MemoryCell.propTypes = {
  id: PropTypes.number.isRequired,
};

export default MemoryCell;
