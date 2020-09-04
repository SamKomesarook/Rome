import React, { useState } from 'react';

export const DisplayContext = React.createContext();

export const DisplayProvider = (props) => {
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
      memory: [ // Memory array
        {
          key: 0, // Unique key
          type: '', // Type 'numbers or letters'
          content: '', // defined content
          special: '', //
          name: '', //
          bgColor: '', // Style: background color
          txtColor: '', // Style: text color
        },
        {
          key: 1,
          type: '',
          content: '',
          special: '',
          name: '',
          bgColor: '',
          txtColor: '',
        },
        {
          key: 2,
          type: '',
          content: '',
          special: '',
          name: '',
          bgColor: '',
          txtColor: '',
        },
        {
          key: 3,
          type: '',
          content: '',
          special: '',
          name: '',
          bgColor: '',
          txtColor: '',
        },
        {
          key: 4,
          type: '',
          content: '',
          special: '',
          name: '',
          bgColor: '',
          txtColor: '',
        },
        {
          key: 5,
          type: '',
          content: '',
          special: '',
          name: '',
          bgColor: '',
          txtColor: '',
        },
        {
          key: 6,
          type: '',
          content: '',
          special: '',
          name: '',
          bgColor: '',
          txtColor: '',
        },
        {
          key: 7,
          type: '',
          content: '',
          special: '',
          name: '',
          bgColor: '',
          txtColor: '',
        },
        {
          key: 8,
          type: '',
          content: '',
          special: '',
          name: '',
          bgColor: '',
          txtColor: '',
        },
        {
          key: 9,
          type: '',
          content: '',
          special: '',
          name: '',
          bgColor: '',
          txtColor: '',
        },
        {
          key: 10,
          type: '',
          content: '',
          special: '',
          name: '',
          bgColor: '',
          txtColor: '',
        },
        {
          key: 11,
          type: '',
          content: '',
          special: 'usb',
          name: '',
          bgColor: '',
          txtColor: '',
        },
        {
          key: 12,
          type: '',
          content: '',
          special: 'net',
          name: '',
          bgColor: '',
          txtColor: '',
        },

      ],
    },
  );

  return (
    <DisplayContext.Provider value={[display, setDisplay]}>
      {props.children}
    </DisplayContext.Provider>
  );
};
