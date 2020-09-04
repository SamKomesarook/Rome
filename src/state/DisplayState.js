import React, { useState } from 'react';

export const DisplayContext = React.createContext();

export const DisplayProvider = (props) => {
  const localMemorySize = 12;
  const localSpecialKeys = [
    { key: localMemorySize - 2, specialContent: 'usb' },
    { key: localMemorySize - 1, specialContent: 'net' },
  ];

  const createMemoryArray = () => {
    const memoryArray = [];
    for (let i = 0; i < localMemorySize; i++) {
      memoryArray.push({
        key: i, // Unique key
        type: '', // Type 'numbers or letters'
        content: '', // defined content
        special: '', //
        name: '', //
        bgColor: '', // Style: background color
        txtColor: '', // Style: text color
        txtSize: '', // Style: text size
        txtAlign: '', // Style: text alignment
        bold: '', // Style: bold font
        italic: '', // Style: italic font
        underline: '', // Style: underline font
      });
    }
    // Set special content for special memory cell
    for (const specialKey of localSpecialKeys) {
      memoryArray[specialKey.key].special = memoryArray[specialKey.key].specialContent;
    }
    return memoryArray;
  };

  const [display, setDisplay] = useState(
    {
      machine: false, // If the user is using the Machine language
      delay: 10, // Number of seconds of delay between command execution
      text: '', // Content of the programming section
      output: '', // Content of the output bar
      input: '', // Content of the input bar
      running: false, // If there is a program running
      reading: false, // If the program is reading user input
      errors: false, // If there are any runtime errors
      selected: 0, // The key of the selected memory
      commands: [], // The saved list of commands while the program is reading user input
      importIO: false, // If the user has imported the IO package
      importNet: false, // If the user has imported the Net package
      memorySize: localMemorySize,
      specialKeys: localSpecialKeys,
      memory: createMemoryArray(),
    },
  );

  return (
    <DisplayContext.Provider value={[display, setDisplay]}>
      {props.children}
    </DisplayContext.Provider>
  );
};
