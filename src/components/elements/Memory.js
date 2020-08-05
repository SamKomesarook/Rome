import React, { useContext } from 'react';
import { DisplayContext } from '../../state/DisplayState';
import '../styles/styles.css';

const Memory = () => {
  const [display] = useContext(DisplayContext);

  const getMemory = (id) => {
    const memorySelected = id === display.selected ? ' memorySelected' : '';
    let memoryType = '';
    if (display.memory[id].type === 'letters') {
      memoryType = ' memoryLetters';
    } else if (display.memory[id].type === 'numbers') {
      memoryType = ' memoryNumbers';
    }

    return (
      <div
        className={`memory${memorySelected}${memoryType}`} // TODO add fields for special and name
        key={display.memory[id].key}
      >
        {display.memory[id].content}
      </div>
    );
  };

  return (
    <div className="memorySection">
      <div className="memoryRow">
        {getMemory(0)}
        {getMemory(4)}
        {getMemory(8)}
      </div>
      <div className="memoryRow">
        {getMemory(1)}
        {getMemory(5)}
        {getMemory(9)}
      </div>
      <div className="memoryRow">
        {getMemory(2)}
        {getMemory(6)}
        {getMemory(10)}
      </div>
      <div className="memoryRow">
        {getMemory(3)}
        {getMemory(7)}
        {getMemory(11)}
      </div>
    </div>
  );
};

export default Memory;
