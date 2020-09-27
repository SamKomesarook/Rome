import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Help = ({ isActive }) => {
  const DATA = [
    {
      keyword: 'general', content: 'All program must have start and end command.\n\nPlease select syntax keywords in the selection box for specification.',
    },
    {
      keyword: 'loop', content: 'Loops the arguments in the curly brackets as many times as the argument in the round parenthesis indicates.\n\nExample 1:\nset(integer)\nwrite(3)\nmove(next)\nloop(memory(1)){\nset(string)\nwrite("content")\nmove(next)\n}\n\nExample 2:\nset(integer)\nwrite(3)\nname("first")\nmove(next)\nloop(memory("first")){\nset(string)\nwrite("content")\nmove(next)\n}',
    },
    {
      keyword: 'if', content: 'Executes the arguments in the curly brackets if the condition is true.\nThe condition is made up of `is` / `not` + `equal` / `less` / `greater` + *int or string*.\n\nExample 1:\nset(integer)\nwrite(3)\nif(is equal 3){\n//do something\n}\n\nExample 2:\nset(integer)\nwrite(3)\nif(not less 3){\n//do something\n}\n\nExample 3:\nset(integer)\nwrite(3)\nif(is greater 3){\n//do something\n}',
    },
    {
      keyword: 'write', content: 'Writes arguments to the selected memory cell.\nArguments must be either integer, or a string enclosed by parenthesis.\n\nExample:\nstart\nset(string)\nwrite("write something here")\nend',
    },
    {
      keyword: 'start', content: 'Indicates the start of the program.\nAll programs must begin with this command.\n\nExample:\nstart\n//do something\nend',
    },
    {
      keyword: 'end', content: 'Indicates the end of the program.\nAll programs must end with this command.\n\nExample:\nstart\n//do something\nend',
    },
    {
      keyword: 'move', content: 'Changes the selected memory cell to the immediate right `last` or left `next`.\n\nExample:',
    },
    {
      keyword: 'set', content: 'Sets the type that can be written to the memory cell. the args could be `integer`, `long`, `float`, `character` or `string`.\n\nExample:\nstart\nset(string)\nwrite("hello")\nfree\nwrite("world!")\nend',
    },
    {
      keyword: 'data type', content: 'The type which could use in `set` include `integer`, `long`, `float`, `character` or `string`.\nThe size of each type are:\n\ninteger - 2bytes\nlong - 4bytes\nfloat - 4bytes with integer and 2bytes for decimal\ncharacter - 1bytes\nstring - up to 6bytes for one memory cell(adjustable with memory)',
    },
    {
      keyword: 'free', content: 'Remove content saved in selected memory cell.\n\nExample:\nstart\nset(string)\nwrite("hello")\nfree\nwrite("world!")\nend',
    },
    {
      keyword: 'import', content: 'Import a library within the arguments.\n\nExample:\nstart\nimport(IO)\n//do something\nend',
    },
    {
      keyword: 'keyboardRead', content: 'Read in a line of input from the input line. requires IO library.\n\nExample:\nstart\nimport(IO)\nkeyboardRead\nend',
    },
    {
      keyword: 'consoleWrite', content: 'Print the argument to the console window. requires IO library.\n\nExample:\nstart\nimport(IO)\nconsoleWrite("Hello")\nend',
    },
    {
      keyword: 'paint', content: 'Paint the background color of the console window.\n\nExample:\nstyle{\npaint(pink)\n} \n\nAvailable colors: black, white, blue, brown, gray, grey, green, orange, pink, purple, red, yellow',
    },
    {
      keyword: 'text_color', content: 'Set the color of the text in console window.\n\nExample:\nimport(IO)\nconsoleWrite("Hello")\nstyle{\ntext_color(brown)\n} \n\nAvailable colors: black, white, blue, brown, gray, grey, green, orange, pink, purple, red, yellow',
    },
    {
      keyword: 'text_size', content: 'Set the size of the text in console window.\n\nExample:\nimport(IO)\nconsoleWrite("Hello")\nstyle{\ntext_size(x-large)\n} \n\nAvailable size: xx-large, x-large, larger, large, medium, small, smaller, x-small, xx-small',
    },
    {
      keyword: 'text_align', content: 'Set the alignment of the text in console window.\n\nExample:\nimport(IO)\nconsoleWrite("Hello")\nstyle{\ntext_align(right)\n} \n\nAvailable align: left, center, right',
    },
    {
      keyword: 'bold', content: 'Make the text bold in console window.\n\nExample:\nimport(IO)\nconsoleWrite("Hello")\nstyle{\nbold(true)\n}',
    },
    {
      keyword: 'italic', content: 'Make the text italic in console window.\n\nExample:\nimport(IO)\nconsoleWrite("Hello")\nstyle{\nitalic(true)\n}',
    },
    {
      keyword: 'underline', content: 'Make the text underline in console window.\n\nExample:\nimport(IO)\nconsoleWrite("Hello")\nstyle{\nunderline(true)\n}',
    },
  ];

  const [keyword, setKeyword] = useState('general');

  const { content: contents } = DATA.find((element) => element.keyword === keyword);

  const handleChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const isActiveClass = isActive ? '' : ' hidden';

  return (
    <div id="help" className={`sidebar-item-pane${isActiveClass}`}>
      <div id="filter-control">
        <div className="control-container">
          <label htmlFor="keywords">
            <select name="keywords" id="keywords" className="control" onChange={handleChangeKeyword}>
              <option value="general">general</option>
              <option value="start">start</option>
              <option value="end">end</option>
              <option value="set">set</option>
              <option value="data type">data type</option>
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
      <div className="dropdown-content">
        {contents}
      </div>
    </div>
  );
};

Help.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Help;
