import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Help = ({ isActive }) => {
  const DATA = [
    {
      keyword: 'start',
      content: 'Indicates the start of the program.\nAll programs must begin with this command.',
      example: ['start\n#The simplest possible program!\nend'],
    }, {
      keyword: 'end',
      content: 'Indicates the end of the program.\nAll programs must end with this command.',
      example: ['start\n#The simplest possible program!\nend'],
    }, {
      keyword: 'loop',
      content: 'Loops the arguments in the curly brackets as many times as the argument in the round parenthesis indicates.',
      argument: [{
        name: 'number',
        desc: 'The number of times to execute the loop\n if the ',
      }],
      codeArg: true,
      example: ['start\n#Selects the memory cell 3 spots away\nloop(3){\nmove(next)\n}\nend',
        'start\n#Reads 3 input strings from the user\nimport(IO)\nloop(3){\nkeyboardRead\nmove(next)\n}\nend',
      ],
      error: ['Error "Non-number loop argument": \n loop should not processed with non number argument'],
    }, {
      keyword: 'if',
      content: 'Executes the arguments in the curly brackets if the condition is true.',
      codeArg: true,
      argument: [{
        name: 'confirm',
        desc: '\'is\' or \'not\'',
      }, {
        name: 'measure',
        desc: '\'greater\' or \'less\' or \'equal\'',
      }, {
        name: 'argument',
        desc: 'The argument',
      },
      ],
      example: ['start\n#Only greets the user is his or her name is Mark\nimport(IO)\nconsoleWrite("What is your name”)\nkeyboardRead\nif(is equal "Mark”){\nconsoleWrite(“Hello Mark!”)\n}\nif(not equal "Mark”){\nconsoleWrite(“I’m waiting for\nsomeone else…”)\n}\nend'],
    }, {
      keyword: 'write',
      content: 'Writes arguments to the selected memory cell.\nArguments must be either numbers, or a string enclosed by parenthesis.',
      example: ['hello', 'goodbye'],
      argument: [{
        name: 'contents',
        desc: 'Numbers, charaters, or string,',
      }],
      error: ['Error "Memory cell not empty": \n write into a memory which already has data',
        'Error "Memory type not set": \n write with empty memory type',
        'Error "Wrong memory type for writing": \n write content not match with memory type',
        'Error "Out of memory": \n write in data exceed the maximum memory'],
    }, {
      keyword: 'move',
      content: 'Changes the selected memory cell.',
      example: ['start\n#Selects the memory cell in the right direction\nmove(next)\nend'],
      argument: [{
        name: 'direction',
        desc: '\'next\' for the memory cell in the right direction, \'last\' for the memory cell in the left direction.',
      }],
      error: ['Error "No more memory": \n program execute to special memory'],
    }, {
      keyword: 'set',
      content: 'Sets the type that can be written to the memory cell.',
      argument: [{
        name: 'type',
        desc: '\'integer\', \'long\', \'character\', \'string\', or \'float\'.',
      }],
      example: ['start\nset(string)\nwrite("hello")\nset(integer)\nwrite(4)\nend'],
    }, {
      keyword: 'free',
      content: 'Remove content saved in selected memory cell.',
      example: ['start\nset(string)\nwrite("hello")\nfree\nwrite("world!")\nend'],
    }, {
      keyword: 'import',
      content: 'Import a library within the arguments.',
      example: ['start\nimport(IO)\nend'],
      argument: [{
        name: 'library name',
        desc: '\'IO\', \'math\'.',
      }],
    }, {
      keyword: 'keyboardRead',
      content: 'Read in a line of input from the input line. Requires IO library.',
      example: ['start\nimport(IO)\nkeyboardRead\nend'],
      error: ['Error "Unknown function "keyboardRead"": \n libeary keyboardRead not found'],
    }, {
      keyword: 'consoleWrite',
      content: 'Print the argument to the console window. Requires IO library.',
      example: ['start\nimport(IO)\nconsoleWrite("Hello")\nend'],
      argument: [{
        name: 'argument',
        desc: 'string or memory referance.',
      }],
      error: ['Error "Unknown function "keyboardRead"": \n libeary consoleWrite not found'],
    },
    {
      keyword: 'style',
      content: 'Style the console container.',
      example: ['start\n#Console with some fun style!\nimport(IO)\nstyle{\nunderline(true)\nitalic(true)\ntext_align(center)\npaint(blue)\n}\nconsoleWrite("Hello!")\nend'],
      argument: [{
        name: 'style',
        desc: 'Style the console window.\nunderline - Make the text underlined in console window.\nitalic - Make the text italisized in console window.\nbold - Make the text bold in console window.\ntext_align : left, center, or right - Set the alignment of the text in console window.\ntext_size : xx-large, x-large, larger, large, medium, small, smaller, x-small or xx-small - Set the size of the text in console window.\ntext_color : black, white, blue, brown, gray, grey, green, orange, pink, purple, red, yellow - Set the color of the text in console window.\npaint : black, white, blue, brown, gray, grey, green, orange, pink, purple, red, yellow - Paint the background color of the console window.',
      }],
    }, {
      keyword: 'rand',
      content: 'Writes a random number from 0-n(excluded) into the currently selected memory cell.',
      argument: [{
        name: 'integer',
        desc: 'The number range for selecting random number',
      }],
      example: ['start\n#Import math package for random number function\nimport(math)\nrand(10)\nend'],
      error: ['Error "Require import(math) for random number function": \n libeary math not found',
        'Error "Memory cell not empty": \n selected memory already has data',
        'Error "Please input a positive number for random number function": \n random argument can not be negative number',
        'Error "Please input a number which is not bigger than 65535, otherwise the random number will be out of memory": \n random argument exceed maximum memory'],
    },
  ];

  const [keyword, setKeyword] = useState('start');

  const { content: contents } = DATA.find((element) => element.keyword === keyword);
  const { example: examples } = DATA.find((element) => element.keyword === keyword);
  const { argument: args } = DATA.find((element) => element.keyword === keyword);
  const { codeArg: codeArgs } = DATA.find((element) => element.keyword === keyword);
  const { error: errors } = DATA.find((element) => element.keyword === keyword);

  const handleChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const isActiveClass = isActive
    ? ''
    : ' hidden';

  const optionList = DATA.map((item) => (
    <option value={item.keyword}>{item.keyword}</option>
  ));

  return (
    <div id="help" className={`sidebar-item-pane${isActiveClass}`}>
      <div className="control-group">
        <div className="control-container">
          <label htmlFor="keywords">
            <select name="keywords" id="keywords" className="control" onChange={handleChangeKeyword}>
              {optionList}
            </select>
          </label>
        </div>
      </div>
      <div className="style-content">
        <div>
          {contents && contents}
        </div>
        <div className="argument-container">
          {keyword}
          {keyword !== 'style' && (
          <>
            {args && '('}
            {args && args.map((item, index) => {
              if (index === args.length - 1) {
                return (
                  <div className="argument-name">
                    {item.name}
                  </div>
                );
              }
              return (
                <div className="argument-name">
                  {item.name}
                  {keyword !== 'if' && ','}
                  &nbsp;
                </div>
              );
            })}
            {args && ')'}
            {codeArgs && '{'}
            {codeArgs && (
            <div className="argument-name">
              <br />
              code
              <br />
            </div>
            )}
            {codeArgs && '}'}
          </>
          )}
          {keyword === 'style' && '{'}
          {keyword === 'style' && (
            <div className="argument-name">
              <br />
              style
              <br />
            </div>
          )}
          {keyword === 'style' && '}'}
        </div>
        {args && args.map((item) => (
          <div>
            <div className="argument-desc">
              {item.name}
              {' '}
              -
              {' '}
              {item.desc}
            </div>
          </div>
        ))}
        {examples && examples.map((item) => (
          <div>
            <div className="dropdown-example">
              {item}
            </div>
          </div>
        ))}
        {errors && errors.map((item) => (
          <div>
            <div className="error">
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Help.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Help;
