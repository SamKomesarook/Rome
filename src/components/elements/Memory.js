import React, { useContext } from 'react';
import { DisplayContext } from '../../state/DisplayState';

const Memory = () => {
  const [display, setDisplay] = useContext(DisplayContext);

  const getMemory = (id) => {
    const selectedMemoryCell = id === display.selected ? ' selected-memory-cell' : '';
    return (
      <div className={`memory-cell${selectedMemoryCell}`} key={display.memory[id].key}>
        {display.memory[id].content}
      </div>
    );
  };

  // Construct an array of memory cells with [numCells] size
  const memoryCellList = (memorySize) => {
    const tempMemoryCellList = [];
    for (let i = 0; i < memorySize; i++) {
      tempMemoryCellList.push(getMemory(i));
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
