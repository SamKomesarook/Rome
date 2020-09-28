import React, { useContext } from 'react';
import { DisplayContext } from '../../state/DisplayState';
import { UiContext } from '../../state/UiContext';

const Memory = () => {
  const [display, setDisplay] = useContext(DisplayContext);
  const [ui, setUi] = useContext(UiContext);

  //const className = ui.ctxIsMemoryActive ? '' : 'hidden';
  const className = ui.ctxIsTextAreaActive ? '' : 'hidden';
  
  const getMemory = (id) => {
    const selectedMemoryCell = id === display.selected ? ' selected-memory-cell' : '';
    return (
      <div id={`memory-${id}`} className={`memory-cell${selectedMemoryCell}`} key={display.memory[id].key}>
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
