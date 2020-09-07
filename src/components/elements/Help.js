import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HelpContent from './HelpContent';

const Help = ({ isActive }) => {
  const DATA = [
    {
      id: 'dl-1', topic: 'general', link: 'https://www.youtube.com/watch?v=qQ1oQJJn1nQ',
    },
    {
      id: 'dl-2', topic: 'loop', link: 'https://www.youtube.com/watch?v=spK_S0HfzFw',
    },
  ];

  const [searchInput, setSearchInput] = useState('');
  const [topic, setTopic] = useState('General');

  const Topic_FILTER_MAP = {
    all: () => true,
    general: (content) => content.topic === 'general',
    loop: (content) => content.topic === 'loop',
    kindergarten: (content) => content.topic === 'kindergarten',
    junior: (content) => content.topic === 'junior',
  };
  /*
  const contentList = DATA
    .filter((content) => content.topic.toLowerCase().includes(searchInput.toLowerCase()))
    .filter(Topic_FILTER_MAP[topic])
	.map((content) => (
      <HelpContent
        id={content.id}
        key={content.id}
        topic={content.topic}
        link={content.link}
      />
    ));
  */
  const handleChangeTopic = (e) => {
    setTopic(e.target.value);
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const isActiveClass = isActive ? '' : ' hidden';

  return (
    <div id="help" className={`sidebar-item-pane${isActiveClass}`}>
      <div id="filter-control">
        <div className="control-container">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" /></svg>
          <input type="text" placeholder="Search for topic.." className="control" onKeyUp={handleSearchInput} />
        </div>
        <div className="control-container">
          <label htmlFor="topics">
            Topic:
            <select name="topics" id="topics" className="control" onChange={handleChangeTopic}>
			  <option value="general">General</option>
              <option value="loop">Loop</option>
              <option value="primary">xxxx</option>
              <option value="kindergarten">xxxx</option>
              <option value="junior">xxxx</option>
            </select>
          </label>
        </div>
		
      </div>

    </div>
  );
};

Help.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Help;
