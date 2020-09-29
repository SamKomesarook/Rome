import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Help = ({ isActive }) => {
  const DATA = [
    {
      keyword: 'loop',
      content: 'Loops the arguments in the curly brackets as many times as the argument in the round parenthesis indicates.',
      argument: [{
        name: 'number',
        desc: 'The number of times to execute the loop',
      }],
      codeArg: true,
      example: ['start\n#Selects the memory cell 3 spots away\nloop(3){\nmove(next)\n}\nend',
        'start\n#Reads 3 input strings from the user\nimport(IO)\nloop(3){\nkeyboardRead\nmove(next)\n}\nend',
      ],
    }, { // TODO this needs to be fixed!
      keyword: 'if',
      content: 'Executes the arguments in the curly brackets if the condition is true.',
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
      example: ['start\n#Only greets the user if his or her name is '],
    }, {
      keyword: 'write',
      content: 'Writes arguments to the selected memory cell.\nArguments must be either numbers, or a string enclosed by parenthesis.\n\nExample:\nstart\nset(letters)\nwrite("write something here")\nend',
      example: ['hello', 'goodbye'],
      argument: [{
        name: 'contents',
        desc: 'Numbers, charaters, or string,',
      }],
    }, {
      keyword: 'start',
      content: 'Indicates the start of the program.\nAll programs must begin with this command.',
      example: ['hello', 'goodbye'],
    }, {
      keyword: 'end',
      content: 'Indicates the end of the program.\nAll programs must end with this command.\n\nExample:\nstart\n//do something\nend',
      example: ['hello', 'goodbye'],
    }, {
      keyword: 'move',
      content: 'Changes the selected memory cell to the immediate right `last` or left `next`.\n\nExample:',
      example: ['hello', 'goodbye'],
    }, {
      keyword: 'set',
      content: 'Sets the type that can be written to the memory cell. the args are either `numbers` or `letters`.\n\nExample:\nstart\nset(letters)\nwrite("hello")\nfree\nwrite("world!")\nend',
      example: ['hello', 'goodbye'],
    }, {
      keyword: 'free',
      content: 'Remove content saved in selected memory cell.\n\nExample:\nstart\nset(letters)\nwrite("hello")\nfree\nwrite("world!")\nend',
      example: ['hello', 'goodbye'],
    }, {
      keyword: 'import',
      content: 'Import a library within the arguments.\n\nExample:\nstart\nimport(IO)\n//do something\nend',
      example: ['hello', 'goodbye'],
    }, {
      keyword: 'keyboardRead',
      content: 'Read in a line of input from the input line. requires IO library.\n\nExample:\nstart\nimport(IO)\nkeyboardRead\nend',
      example: ['hello', 'goodbye'],
    }, {
      keyword: 'consoleWrite',
      content: 'Print the argument to the console window. requires IO library.\n\nExample:\nstart\nimport(IO)\nconsoleWrite("Hello")\nend',
      example: ['hello', 'goodbye'],
    }, {
      keyword: 'paint',
      content: 'Paint the background color of the console window.\n\nExample:\nstyle{\npaint(pink)\n} \n\nAvailable colors: black, white, blue, brown, gray, grey, green, orange, pink, purple, red, yellow',
      example: ['hello', 'goodbye'],
    }, {
      keyword: 'text_color',
      content: 'Set the color of the text in console window.\n\nExample:\nimport(IO)\nconsoleWrite("Hello")\nstyle{\ntext_color(brown)\n} \n\nAvailable colors: black, white, blue, brown, gray, grey, green, orange, pink, purple, red, yellow',
      example: ['hello', 'goodbye'],
    }, {
      keyword: 'text_size',
      content: 'Set the size of the text in console window.\n\nExample:\nimport(IO)\nconsoleWrite("Hello")\nstyle{\ntext_size(x-large)\n} \n\nAvailable size: xx-large, x-large, larger, large, medium, small, smaller, x-small, xx-small',
      example: ['hello', 'goodbye'],
    }, {
      keyword: 'text_align',
      content: 'Set the alignment of the text in console window.\n\nExample:\nimport(IO)\nconsoleWrite("Hello")\nstyle{\ntext_align(right)\n} \n\nAvailable align: left, center, right',
      example: ['hello', 'goodbye'],
    }, {
      keyword: 'bold',
      content: 'Make the text bold in console window.\n\nExample:\nimport(IO)\nconsoleWrite("Hello")\nstyle{\nbold(true)\n}',
      example: ['hello', 'goodbye'],
    }, {
      keyword: 'italic',
      content: 'Make the text italic in console window.\n\nExample:\nimport(IO)\nconsoleWrite("Hello")\nstyle{\nitalic(true)\n}',
      example: ['hello', 'goodbye'],
    }, {
      keyword: 'underline',
      content: 'Make the text underline in console window.\n\nExample:\nimport(IO)\nconsoleWrite("Hello")\nstyle{\nunderline(true)\n}',
      example: ['hello', 'goodbye'],
    },
  ];

  const [keyword, setKeyword] = useState('start');

  const { content: contents } = DATA.find((element) => element.keyword === keyword);
  const { example: examples } = DATA.find((element) => element.keyword === keyword);
  const { argument: args } = DATA.find((element) => element.keyword === keyword);
  const { codeArg: codeArgs } = DATA.find((element) => element.keyword === keyword);

  const handleChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const isActiveClass = isActive
    ? ''
    : ' hidden';

  return (
    <div id="help" className={`sidebar-item-pane${isActiveClass}`}>
      <div id="filter-control">
        <div className="control-container">
          <label htmlFor="keywords">
            <select name="keywords" id="keywords" className="control" onChange={handleChangeKeyword}>
              <option value="start">start</option>
              <option value="end">end</option>
              <option value="set">set</option>
              <option value="write">write</option>
              <option value="free">free</option>
              <option value="loop">loop</option>
              <option value="if">if</option>
              <option value="import">import</option>
              <option value="keyboardRead">keyboardRead</option>
              <option value="consoleWrite">consoleWrite</option>
              <option value="paint">paint</option>
              <option value="text_color">text_color</option>
              <option value="text_size">text_size</option>
              <option value="text_align">text_align</option>
              <option value="bold">bold</option>
              <option value="italic">italic</option>
              <option value="underline">underline</option>
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
                {','}
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
        </div>
        {args && args.map((item) => (
          <div>
            <div className="argument-desc">
              {item.name}
              {' '}
              -
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
      </div>
    </div>
  );
};

Help.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Help;
