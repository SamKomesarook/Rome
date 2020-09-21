import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Challenge = ({ isActive }) => {
  const DATA = [
    {
      topic: 'Challenge Title', content: 'Challenge content and solusion',
    },
    {
      topic: 'Level 2', content: 'Level 2 content',
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
              <option value="Challenge Title">Challenge Level - Title</option>
              <option value="Level 2">Level 2 - xxx</option>
              
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
