import React, { useContext, useState } from 'react';
import { DisplayContext } from '../../state/DisplayState';
import BinaryUtil from '../../utils/BinaryUtil';

const Memory = () => {
  const [display, setDisplay] = useContext(DisplayContext);

  const MemoryCell = (id) => {
    const selectedMemoryCell = id === display.selected ? ' selected-memory-cell' : '';
    const memoryCell = display.memory[id];
    let shouldBinaryDisplayed = false;
    let binaryArray;
    // let byteCellClass = '';
    const [byteCellClass, setByteCellClass] = useState('');

    let binaryCellList;

    let memoryCellDisplay = memoryCell.content;
    const [contentView, setContentView] = useState('');

    const handleClickCell = (e) => {
      shouldBinaryDisplayed = !shouldBinaryDisplayed;
      if (memoryCell.content.length > 0) {
        let binary;
        console.log('type', memoryCell.type);
        if (memoryCell.type === 'letters') {
          binary = BinaryUtil.text2Bin(memoryCell.content);
          console.log('binary', binary);
        } else if (memoryCell.type === 'numbers') {
          binary = BinaryUtil.dec2Bin(memoryCell.content);
          // byteCellClass = ' memory-2-byte-cell';
          setByteCellClass(' memory-2-byte-cell');
          console.log('binary', binary);
        }

        binaryArray = binary.split('');
        console.log('binaryArray', binaryArray);

        // binaryCellLists = binaryArray.map((bit) => (
        //   <div>bit</div>
        // ));
        binaryCellList = [];
        for (let i = 0; i < binaryArray.length; i++) {
          binaryCellList.push(<div id={`bit-${i}`}>{binaryArray[i]}</div>);
        }

        console.log('binayrCellLists', binaryCellList);
      } else {
        shouldBinaryDisplayed = false;
      }
      console.log('shouldBinaryDisplayed', shouldBinaryDisplayed);
      // memoryCellDisplay = shouldBinaryDisplayed ? '123' : memoryCell.content;
      // console.log('memoryCellDisplay', memoryCellDisplay);
      // memoryCellDisplay = shouldBinaryDisplayed ? '123' : memoryCell.content;
      shouldBinaryDisplayed ? setContentView(binaryCellList) : setContentView(memoryCell.content);
      // console.log('memoryCellDisplay', memoryCellDisplay);


      console.log('byteCellClass', byteCellClass);
    };

    return (
      <div id={`memory-${id}`} className={`memory-cell${selectedMemoryCell}${byteCellClass}`} key={memoryCell.key} onClick={handleClickCell}>
        {/* {shouldBinaryDisplayed ? binaryCellLists : memoryCell.content} */}
        {/* {memoryCellDisplay} */}
        {contentView}
      </div>
    );
  };

  // Construct an array of memory cells with [numCells] size
  const memoryCellList = (memorySize) => {
    const tempMemoryCellList = [];
    for (let i = 0; i < memorySize; i++) {
      tempMemoryCellList.push(MemoryCell(i));
    }
    return tempMemoryCellList;
  };

  return (
    <div className="memory-section">
      {memoryCellList(display.memorySize)}
    </div>
  );
};

export default Memory;
