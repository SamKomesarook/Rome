import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DistanceLearningContent from './DistanceLearningContent';

const DistanceLearning = ({ isActive }) => {
  const DATA = [
    {
      id: 'dl-1', week: 'w1', level: 'toddler', title: 'Why are there Four Firefoxes?', link: 'https://www.youtube.com/watch?v=qQ1oQJJn1nQ',
    },
    {
      id: 'dl-2', week: 'w1', level: 'primary', title: 'Where do Browser Styles Come From?', link: 'https://www.youtube.com/watch?v=spK_S0HfzFw',
    },
  ];

  const [searchInput, setSearchInput] = useState('');
  const [level, setLevel] = useState('all');
  const [week, setWeek] = useState('all');

  const LEVEL_FILTER_MAP = {
    all: () => true,
    toddler: (content) => content.level === 'toddler',
    primary: (content) => content.level === 'primary',
    kindergarten: (content) => content.level === 'kindergarten',
    junior: (content) => content.level === 'junior',
  };

  const WEEK_FILTER_MAP = {
    all: () => true,
    w1: (content) => content.week === 'w1',
    w2: (content) => content.week === 'w2',
    w3: (content) => content.week === 'w3',
    w4: (content) => content.week === 'w4',
  };

  const contentList = DATA
    .filter((content) => content.title.toLowerCase().includes(searchInput.toLowerCase()))
    .filter(LEVEL_FILTER_MAP[level])
    .filter(WEEK_FILTER_MAP[week])
    .map((content) => (
      <DistanceLearningContent
        id={content.id}
        key={content.id}
        week={content.week}
        level={content.level}
        title={content.title}
        link={content.link}
      />
    ));

  const handleChangeLevel = (e) => {
    setLevel(e.target.value);
  };

  const handleChangeWeek = (e) => {
    setWeek(e.target.value);
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const isActiveClass = isActive ? '' : ' hidden';

  return (
    <div id="distance-learning" className={`sidebar-item-pane${isActiveClass}`}>
      <div id="filter-control">
        <div className="control-container">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" /></svg>
          <input type="text" placeholder="Search for names.." className="control" onKeyUp={handleSearchInput} />
        </div>
        <div className="control-container">
          <label htmlFor="levels">
            Level:
            <select name="levels" id="levels" className="control" onChange={handleChangeLevel}>
              <option value="all">All</option>
              <option value="toddler">Toddler</option>
              <option value="primary">Primary</option>
              <option value="kindergarten">Kindergarten</option>
              <option value="junior">Junior</option>
            </select>
          </label>
        </div>
        <div className="control-container">
          <label htmlFor="weeks">
            Week:
            <select name="weeks" id="weeks" className="control" onChange={handleChangeWeek}>
              <option value="all">All</option>
              <option value="w1">1</option>
              <option value="w2">2</option>
              <option value="w3">3</option>
              <option value="w4">4</option>
            </select>
          </label>
        </div>
      </div>
      <div id="dist-learn-content-container">
        {contentList}
      </div>
    </div>
  );
};

DistanceLearning.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default DistanceLearning;
