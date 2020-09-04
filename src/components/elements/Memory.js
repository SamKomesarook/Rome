import React, { useContext } from 'react';
import { DisplayContext } from '../../state/DisplayState';
import '../styles/styles.css';

const Memory = () => {
  const [display] = useContext(DisplayContext);

  const getMemory = (id) => {
    const selectedMemoryCell = id === display.selected ? ' selected-memory-cell' : '';

    return (
      <div
        className={`memory-cell${selectedMemoryCell}`}
        key={display.memory[id].key}
        style={{
          'background-color': `${display.memory[id].bgColor}`,
          color: `${display.memory[id].txtColor}`,
          'font-size': `${display.memory[id].txtSize}`,
          'text-align': `${display.memory[id].txtAlign}`,
          'font-weight': `${display.memory[id].bold}`,
          'font-style': `${display.memory[id].italic}`,
          'text-decoration-line': `${display.memory[id].underline}`,
        }}
      >
        {display.memory[id].content}
      </div>
    );
  };

  const memoryCellList = (numCells) => {
    const tempMemoryCellList = [];
    for (let i = 0; i < numCells; i++) {
      tempMemoryCellList.push(getMemory(i));
    }
    return tempMemoryCellList;
  };

  return (
    <div className="memory-section">
      {memoryCellList(12)}
    </div>
  );
};

export default Memory;
