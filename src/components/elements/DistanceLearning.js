import React, { useState } from 'react';
import DistanceLearningContent from './DistanceLearningContent';

const DistanceLearning = (props) => {
  const DATA = [
    {
      id: 'dl-1', week: 1, level: 'toddler', title: 'Why are there Four Firefoxes?', link: 'https://www.youtube.com/watch?v=qQ1oQJJn1nQ',
    },
    {
      id: 'dl-2', week: 1, level: 'primary', title: 'Where do Browser Styles Come From?', link: 'https://www.youtube.com/watch?v=spK_S0HfzFw',
    },
  ];

  const [level, setLevel] = useState('all');

  const FILTER_MAP = {
    all: () => true,
    toddler: (content) => content.level === 'toddler',
    primary: (content) => content.level === 'primary',
    kindergarten: (content) => content.level === 'kindergarten',
    junior: (content) => content.level === 'junior',
  };

  const contentList = DATA
    .filter(FILTER_MAP[level])
    .map((content) => (
      <DistanceLearningContent
        id={content.id}
        week={content.week}
        level={content.level}
        title={content.title}
        link={content.link}
      />
    ));

  const isActiveClass = props.isActive ? '' : ' hidden';

  const handleChangeLevel = (e) => {
    setLevel(e.target.value);
  };

  return (
    <div id="distance-learning" className={`sidebar-item-pane${isActiveClass}`}>
      <div id="filter-control">
        <div className="control-container">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" /></svg>
          <input type="text" placeholder="Search for names.." className="control" />
        </div>
        {/* <div className="hflex"> */}
        <div className="control-container">
          <label forHtml="levels">Level:</label>
          <select name="levels" id="levels" className="control" onChange={handleChangeLevel}>
            <option value="all">All</option>
            <option value="toddler">Toddler</option>
            <option value="primary">Primary</option>
            <option value="kindergarten">Kindergarten</option>
            <option value="junior">Junior</option>
          </select>
        </div>
        <div className="control-container">
          <label forHtml="weeks">Week:</label>
          <select name="weeks" id="weeks" className="control">
            <option value="all">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        {/* </div> */}
      </div>
      <div id="dist-learn-content-container">
        {contentList}
      </div>
    </div>
  );
};

export default DistanceLearning;
