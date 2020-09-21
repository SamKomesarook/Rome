import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Challenge = ({ isActive }) => {
  const DATA = [
    {
      topic: 'Challenge Title', content: 'Challenge content and solusion',
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
      topic: 'k_read', content: 'Read in a line of input from the input line. requires IO library.\n\nExample:\nstart\nimport(IO)\nk_read\nend',
    },
    {
      topic: 's_write', content: 'Write the argument to the output window. requires IO library.\n\nExample:\nstart\nimport(IO)\nk_read\ns_write("write something here")\nend',
    },
  ];

  const [topic, setTopic] = useState('Challenge Title');

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
              <option value="Challenge Title">Challenge Title</option>
              <option value="start">start</option>
              <option value="end">end</option>
              <option value="set">set</option>
              <option value="write">write</option>
              <option value="free">free</option>
              <option value="loop">loop</option>
              <option value="if">if</option>
              <option value="import">import</option>
              <option value="k_read">k_read</option>
              <option value="s_write">s_write</option>
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

Challenge.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Challenge;
