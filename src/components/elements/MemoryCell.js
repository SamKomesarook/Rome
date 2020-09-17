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

  const handleClickCell = () => {
    let newShouldBinaryDisplayed = !shouldBinaryDisplayed;

    // Check if there is content to switch to binary view
    if (memoryCell.content.length > 0 && newShouldBinaryDisplayed) {
      let binary;

      if (memoryCell.type === 'letters') {
        binary = BinaryUtil.text2Bin(memoryCell.content);
      } else if (memoryCell.type === 'numbers') {
        binary = BinaryUtil.dec2Bin(memoryCell.content);
        setByteCellClass(' memory-2-byte-cell');
      }

      binaryCellList = binary.split('').map((bit) => (<div>{bit}</div>));
      setBinaryContent(binaryCellList);
    } else {
      newShouldBinaryDisplayed = false;
      setBinaryContent(memoryCell.content);
      setByteCellClass('');
    }

    setBinaryDisplayed((prevValue) => newShouldBinaryDisplayed);

    // if (shouldBinaryDisplayed) {
    //   setContentView(binaryCellList);
    // } else {
    //   setContentView(memoryCell.content);
    //   setByteCellClass('');
    // }
  };

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
