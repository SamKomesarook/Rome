import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Challenge = ({ isActive }) => {
  const DATA = [
    {
      topic: 'Challenge Title', content: 'Challenge content and solusion',
    },
    {
      topic: 'Calculator', content: 'Create a program that asks a user for two numbers, then adds them together and displays the result.',
    }, 
  ];

  const [topic, setTopic] = useState('Challenge Title');

  const { content: contents } = DATA.find((element) => element.topic === topic);

  const handleChangeTopic = (e) => {
    setTopic(e.target.value);
  };

  const isActiveClass = isActive ? '' : ' hidden';

  return (
    <div id="challenge" className={`sidebar-item-pane${isActiveClass}`}>
      <div id="filter-control">
        <div className="control-container">
          <label htmlFor="topics">
            <select name="topics" id="topics" className="control" onChange={handleChangeTopic}>
              <option value="Challenge Title">Challenge Title</option>
              <option value="Calculator">Calculator</option>
              
            </select>
          </label>
        </div>
      </div>
      <div id="challenge-content">
        {contents}
      </div>
    </div>
  );
};

Challenge.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Challenge;
