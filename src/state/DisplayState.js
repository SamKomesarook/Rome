import React, { useState } from 'react';

export const DisplayContext = React.createContext();

export const DisplayProvider = (props) => {
  const [display, setDisplay] = useState(DisplayContext.DEFAULT);

  return (
    <DisplayContext.Provider value={[display, setDisplay]}>
      {props.children}
    </DisplayContext.Provider>
  );
};

// The default value of Display Context
DisplayContext.DEFAULT = () => {
  const localMemorySize = 12;
  const localSpecialKeys = [
    { key: localMemorySize - 1, specialContent: 'usb' },
  ];

  const createMemoryArray = () => {
    const memoryArray = [];
    for (let i = 0; i < localMemorySize; i++) {
      memoryArray.push({
        key: i, // Unique key
        type: '', // Type 'integer, long, float, string or character'
        content: '', // defined content
        special: '', //
        name: '', //
      });
    }
    // Set special content for special memory cell
    for (const specialKey of localSpecialKeys) {
      memoryArray[specialKey.key].special = specialKey.specialContent;
    }
    return memoryArray;
  };

  const initialDisplay = {
    machine: false, // If the user is using the Machine language
    delay: 10, // Number of seconds of delay between command execution
    text: '', // Content of the programming section
    consoleHistory: [],
    running: false, // If there is a program running
    isDebugAcive: false, // Is the debug mode is active
    reading: false, // If the program is reading user input
    errors: false, // If there are any runtime errors
    selected: 0, // The key of the selected memory
    commands: [], // The saved list of commands while the program is reading user input
    importIO: false, // If the user has imported the IO package
    importMath: false, // If the user has imported the math package
    consoleStyle: {
      bgColor: '', // Style: background color
      txtColor: '', // Style: text color
      txtSize: '', // Style: text size
      txtAlign: '', // Style: text alignment
      fontWeight: '', // Style: e.g. bold font
      fontStyle: '', // Style: e.g. italic font
      textDecorationLine: '', // Style: e.g. underline font
    },
    dataTypeSize: { // The available space taken of each data types
      character: 1,
      integer: 2,
      float: 4,
      long: 4,
      string: 6,
    },
    memorySize: localMemorySize,
    specialKeys: localSpecialKeys,
    memory: createMemoryArray(),
  };

  return initialDisplay;
};

DisplayContext.createCustomClone = (display) => {
  const deepClone = {
    ...display,
    consoleStyle: { ...display.consoleStyle },
    memory: JSON.parse(JSON.stringify(display.memory)),
  };

  return deepClone;
};
