import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

const Challenge = ({ isActive }) => {
  const recent = Cookies.get('history');
  const save = Cookies.get('save');
  let isRecentEmpty = true;
  let isSaveEmpty = true;
  if (typeof recent === 'string') {
    isRecentEmpty = false;
  }
  if (typeof save === 'string') {
    isSaveEmpty = false;
  }
  const recentContent = isRecentEmpty ? 'you have not typed any code yet' : recent;
  const saveContent = isSaveEmpty ? 'you have not save any code yet' : save;
  const DATA = [
    {
      topic: 'Recent', content: recentContent,
    },
    {
      topic: 'Save', content: saveContent,
    },
  ];

  const [topic, setTopic] = useState('Recent');

  const { content: contents } = DATA.find((element) => element.topic === topic);

  const optionList = DATA.map((item) => (
    <option value={item.topic}>{item.topic}</option>
  ));

  const handleChangeTopic = (e) => {
    setTopic(e.target.value);
  };

  const isActiveClass = isActive ? '' : ' hidden';

  return (
    <div id="save" className={`sidebar-item-pane${isActiveClass}`}>
      <div className="control-group">
        <div className="control-container">
          <label htmlFor="topics">
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
