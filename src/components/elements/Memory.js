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
    // <div className="memory-section">
    //   <div className="memory-section-row">
    //     {getMemory(0)}
    //     {getMemory(1)}
    //     {getMemory(2)}
    //     {getMemory(3)}
    //   </div>
    //   <div className="memory-section-row">
    //     {getMemory(4)}
    //     {getMemory(5)}
    //     {getMemory(6)}
    //     {getMemory(7)}
    //   </div>
    //   <div className="memory-section-row">
    //     {getMemory(8)}
    //     {getMemory(9)}
    //     {getMemory(10)}
    //     {getMemory(11)}
    //   </div>
    // </div>
    // <div className="memory-section">
    //   <div className="memoryRow">
    //     {getMemory(0)}
    //     {getMemory(4)}
    //     {getMemory(8)}
    //   </div>
    //   <div className="memoryRow">
    //     {getMemory(1)}
    //     {getMemory(5)}
    //     {getMemory(9)}
    //   </div>
    //   <div className="memoryRow">
    //     {getMemory(2)}
    //     {getMemory(6)}
    //     {getMemory(10)}
    //   </div>
    //   <div className="memoryRow">
    //     {getMemory(3)}
    //     {getMemory(7)}
    //     {getMemory(11)}
    //   </div>
    // </div>
  );
};

export default Memory;
