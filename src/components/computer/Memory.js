import React, { useContext } from 'react';
import { DisplayContext } from '../../state/DisplayState';
import { UiContext } from '../../state/UiContext';
import MemoryCell from './MemoryCell';

const Memory = () => {
  const [display, setDisplay] = useContext(DisplayContext);
  const [ui, setUi] = useContext(UiContext);
  const isElementHiddenClass = ui.ctxIsAppRunViewActive ? 'hidden' : '';

  // Construct an array of memory cells with [numCells] size
  const memoryCellList = (memorySize) => {
    const tempMemoryCellList = [];
    for (let i = 0; i < memorySize; i++) {
      tempMemoryCellList.push(<MemoryCell id={i} />);
    }
    return tempMemoryCellList;
  };

  return (
    <div className={`memory-section noselect code ${isElementHiddenClass}`}>
      {memoryCellList(display.memorySize)}
    </div>
  );
};

export default Memory;
