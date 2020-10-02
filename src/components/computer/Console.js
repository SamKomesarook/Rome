import React, { useContext } from 'react';
import { DisplayContext } from '../../state/DisplayState';
import { processInstrs } from '../../lang/Common';
import { NetToggle, USBToggle } from './Peripherals';

// const Console = () => {
//   const [display, setDisplay] = useContext(DisplayContext);

//   const handleKey = (event) => {
//     if (event.keyCode === 13) {
//       // Create a deep copy of display
//       const staticDisplay = DisplayContext.createCustomClone(display);
//       const newMem = staticDisplay.memory;

//       // Get the keys of special memory cells
//       const usbMemoryKey = staticDisplay.specialKeys.find((element) => element.specialContent === 'usb').key;
//       if (staticDisplay.selected === usbMemoryKey) {
//         USBToggle();
//       } else {
//         newMem[staticDisplay.selected].content = staticDisplay.input;
//         newMem[staticDisplay.selected].type = 'string';
//       }
//       staticDisplay.memory = newMem;
//       staticDisplay.reading = false;
//       processInstrs(staticDisplay);

//       // Render new display information
//       setDisplay(DisplayContext.createCustomClone(staticDisplay));
//     }
//   };

//   const handleChange = (event) => {
//     event.preventDefault();
//     const { value } = event.target;
//     setDisplay((prevDisplay) => ({
//       ...prevDisplay,
//       input: value,
//     }));
//   };

//   return (
//     <input
//       id="input-bar"
//       size="60"
//       type="text"
//       onKeyDown={handleKey}
//       onChange={handleChange}
//       disabled={!display.reading}
//       value={!display.reading ? '' : display.input}
//     />
//   );
// };

// const OutputArea = () => {
//   const [display] = useContext(DisplayContext);
//   return (
//     <div
//       contentEditable="false"
//       id="output-area"
//       style={{
//         'background-color': `${display.outputStyle.bgColor}`,
//         color: `${display.outputStyle.txtColor}`,
//         'font-size': `${display.outputStyle.txtSize}`,
//         'text-align': `${display.outputStyle.txtAlign}`,
//         'font-weight': `${display.outputStyle.bold}`,
//         'font-style': `${display.outputStyle.italic}`,
//         'text-decoration-line': `${display.outputStyle.underline}`,
//       }}
//     >
//       {display.output}
//     </div>
//   );
// };

const Console = () => {
  const [display, setDisplay] = useContext(DisplayContext);
  const [consoleHistory, setConsoleHistory] = useContext(DisplayContext);

  const handleKey = (event) => {
    if (event.keyCode === 13) {
      // Create a deep copy of display
      const staticDisplay = DisplayContext.createCustomClone(display);
      const newMem = staticDisplay.memory;

      // Get the keys of special memory cells
      const usbMemoryKey = staticDisplay.specialKeys.find((element) => element.specialContent === 'usb').key;
      if (staticDisplay.selected === usbMemoryKey) {
        USBToggle();
      } else {
        newMem[staticDisplay.selected].content = staticDisplay.input;
        newMem[staticDisplay.selected].type = 'string';
      }
      staticDisplay.memory = newMem;
      staticDisplay.reading = false;
      processInstrs(staticDisplay);

      // Render new display information
      setDisplay(DisplayContext.createCustomClone(staticDisplay));
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setDisplay((prevDisplay) => ({
      ...prevDisplay,
      input: value,
    }));
  };

  console.log('consoleHistory', display.consoleHistory)
  const consoleHistoryList = display.consoleHistory.map((record) => {
    console.log('record', record);
    return <div>{record}</div>;
  });

  return (
    <div
      id="console"
      style={{
        'background-color': `${display.outputStyle.bgColor}`,
        color: `${display.outputStyle.txtColor}`,
        'font-size': `${display.outputStyle.txtSize}`,
        'text-align': `${display.outputStyle.txtAlign}`,
        'font-weight': `${display.outputStyle.bold}`,
        'font-style': `${display.outputStyle.italic}`,
        'text-decoration-line': `${display.outputStyle.underline}`,
      }}
    >
      {consoleHistoryList}
      <div className="hflex">
        <span>{'>'}</span>
        <input
          id="console-input"
          type="text"
          onKeyDown={handleKey}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Console;
