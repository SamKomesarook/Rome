import React, { useContext } from 'react';
import { DisplayContext } from '../../state/DisplayState';
import MemoryCell from './MemoryCell';

const Memory = () => {
  const [display, setDisplay] = useContext(DisplayContext);

  // Construct an array of memory cells with [numCells] size
  const memoryCellList = (memorySize) => {
    const tempMemoryCellList = [];
    for (let i = 0; i < memorySize; i++) {
      tempMemoryCellList.push(<MemoryCell id={i} />);
    }
    return tempMemoryCellList;
  };

  return (
    <div className="memory-section noselect">
      {memoryCellList(display.memorySize)}
    </div>
  );
};

export default Memory;
