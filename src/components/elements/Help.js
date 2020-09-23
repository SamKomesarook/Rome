import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Help = ({ isActive }) => {
  const DATA = [
    {
      topic: 'general', content: 'All program must have start and end command.\n\nPlease select syntax keywords in the selection box for specification.',
    },
    {
      topic: 'loop', content: 'Loops the arguments in the curly brackets as many times as the argument in the round parenthesis indicates.\n\nExample 1:\nset(numbers)\nwrite(3)\nmove(next)\nloop(memory(1)){\nset(letters)\nwrite("content")\nmove(next)\n}\n\nExample 2:\nset(numbers)\nwrite(3)\nname("first")\nmove(next)\nloop(memory("first")){\nset(letters)\nwrite("content")\nmove(next)\n}',
    },
    {
      topic: 'if', content: 'Executes the arguments in the curly brackets if the condition is true.\nThe condition is made up of `is` / `not` + `equal` / `less` / `greater` + *int or string*.\n\nExample 1:\nset(numbers)\nwrite(3)\nif(is equal 3){\n//do something\n}\n\nExample 2:\nset(numbers)\nwrite(3)\nif(not less 3){\n//do something\n}\n\nExample 3:\nset(numbers)\nwrite(3)\nif(is greater 3){\n//do something\n}',
    },
    {
      topic: 'write', content: 'Writes arguments to the selected memory cell.\nArguments must be either numbers, or a string enclosed by parenthesis.\n\nExample:\nstart\nset(letters)\nwrite("write something here")\nend',
    },
    {
      topic: 'start', content: 'Indicates the start of the program.\nAll programs must begin with this command.\n\nExample:\nstart\n//do something\nend',
    },
    {
      topic: 'end', content: 'Indicates the end of the program.\nAll programs must end with this command.\n\nExample:\nstart\n//do something\nend',
    },
    {
      topic: 'move', content: 'Changes the selected memory cell to the immediate right `last` or left `next`.\n\nExample:',
    },
    {
      topic: 'set', content: 'Sets the type that can be written to the memory cell. the args are either `numbers` or `letters`.\n\nExample:\nstart\nset(letters)\nwrite("hello")\nfree\nwrite("world!")\nend',
    },
    {
      topic: 'free', content: 'Remove content saved in selected memory cell.\n\nExample:\nstart\nset(letters)\nwrite("hello")\nfree\nwrite("world!")\nend',
    },
    {
      topic: 'import', content: 'Import a library within the arguments.\n\nExample:\nstart\nimport(IO)\n//do something\nend',
    },
    {
      topic: 'keyboardRead', content: 'Read in a line of input from the input line. requires IO library.\n\nExample:\nstart\nimport(IO)\nkeyboardRead\nend',
    },
    {
      topic: 'consoleWrite', content: 'Print the argument to the console window. requires IO library.\n\nExample:\nstart\nimport(IO)\nconsoleWrite("Hello")\nend',
    },
    {
      topic: 'paint', content: 'Paint the background color of the console window. \n\nExample:\nstyle{\npaint(pink)\n} \n\nAvailable colors: black, white, blue, brown, gray, grey, green, orange, pink, purple, red, yellow',
    },
    {
      topic: 'text_color', content: 'Set the color of the text in console window. \n\nExample:\nimport(IO)\nconsoleWrite("Hello")\nstyle{\ntext_color(brown)\n} \n\nAvailable colors: black, white, blue, brown, gray, grey, green, orange, pink, purple, red, yellow',
    },
    {
      topic: 'text_size', content: 'Set the size of the text in console window. \n\nExample:\nimport(IO)\nconsoleWrite("Hello")\nstyle{\ntext_size(x-large)\n} \n\nAvailable size: xx-large, x-large, larger, large, medium, small, smaller, x-small, xx-small',
    },
    {
      topic: 'text_align', content: 'Set the align of the text in console window. \n\nExample:\nimport(IO)\nconsoleWrite("Hello")\nstyle{\ntext_align(right)\n} \n\nAvailable align: left, center, right',
    },
    {
      topic: 'bold', content: 'Bold the text in console window. \n\nExample:\nimport(IO)\nconsoleWrite("Hello")\nstyle{\nbold(true)\n}',
    },
    {
      topic: 'italic', content: 'Italic the text in console window. \n\nExample:\nimport(IO)\nconsoleWrite("Hello")\nstyle{\nitalic(true)\n}',
    },
    {
      topic: 'underline', content: 'Underline the text in console window. \n\nExample:\nimport(IO)\nconsoleWrite("Hello")\nstyle{\nunderline(true)\n}',
    },
  ];

  const [topic, setTopic] = useState('general');

  const { content: contents } = DATA.find((element) => element.topic === topic);

  const handleChangeTopic = (e) => {
    setTopic(e.target.value);
  };

  const isActiveClass = isActive ? '' : ' hidden';

  return (
    <div id="help" className={`sidebar-item-pane${isActiveClass}`}>
      <div id="filter-control">
        <div className="control-container">
          <label htmlFor="topics">
            <select name="topics" id="topics" className="control" onChange={handleChangeTopic}>
              <option value="general">general</option>
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
      <div id="help-content">
        {contents}
      </div>
    </div>
  );
};

Help.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Help;
