import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Challenge = ({ isActive }) => {
  const DATA = [
    {
      topic: 'Adder', content: 'Create a program that asks a user for two numbers, then adds them together and displays the result.',
    },
    {
      topic: 'Rude program', content: 'Create a program that only greets users with the same name as you.',
    },
    {
      topic: 'Trusting program', content: 'Create a program that tells users a secret if they guess the secret password with 3 guesses.',
    },
    {
      topic: 'View mode', content: 'Ask the user if they want to use light or dark mode, then greet them with that style!',
    },
  ];

  const [topic, setTopic] = useState('Adder');

  const { content: contents } = DATA.find((element) => element.topic === topic);

  const optionList = DATA.map((item) => (
    <option value={item.topic}>{item.topic}</option>
  ));

  const handleChangeTopic = (e) => {
    setTopic(e.target.value);
  };

  const isActiveClass = isActive ? '' : ' hidden';

  return (
    <div id="challenge" className={`sidebar-item-pane${isActiveClass}`}>
      <div className="control-group">
        <div className="control-container">
          <label htmlFor="topics">
            Topic:
            <select name="topics" id="topics" className="control" onChange={handleChangeTopic}>
              {optionList}
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

Challenge.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Challenge;
