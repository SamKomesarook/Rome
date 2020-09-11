import React, { useContext } from 'react';
import { DisplayContext } from '../../state/DisplayState';
import '../styles/styles.css';

const Memory = () => {
  const [display] = useContext(DisplayContext);

  const getMemory = (id) => {
    const selectedMemoryCell = id === display.selected ? ' selected-memory-cell' : '';

    return (
      <div id={`memory-${id}`} className={`memory-cell${selectedMemoryCell}`} key={display.memory[id].key}>
        {display.memory[id].content}
      </div>
    );
  };

  return (
    <div className="memory-section">
      {getMemory(0)}
      {getMemory(1)}
      {getMemory(2)}
      {getMemory(3)}
      {getMemory(4)}
      {getMemory(5)}
      {getMemory(6)}
      {getMemory(7)}
      {getMemory(8)}
      {getMemory(9)}
      {getMemory(10)}
      {getMemory(11)}
    </div>
  );
};

export default Memory;
