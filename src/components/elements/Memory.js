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
        // style={{ background: `${display.memory[id].backgroundColor}` }}
        style={{
          'background-color': `${display.memory[id].bgColor}`,
          color: `${display.memory[id].txtColor}`,
          'font-size': `${display.memory[id].txtSize}`,
          'text-align': `${display.memory[id].txtAlign}`,
          'font-weight': `${display.memory[id].bold}`,
          'font-style': `${display.memory[id].italic}`,
          'text-decoration': `${display.memory[id].underline}`,
        }}
      >
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
