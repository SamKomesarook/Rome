/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DistanceLearningContent from './DistanceLearningContent';
import DropdownField from '../elements/DropdownField';

const DistanceLearning = ({ isActive }) => {
  const DATA = [
    {
      id: 'dl-1', week: 'w1', level: 'kindergarten', title: 'Rome Intro', link: 'https://youtu.be/8QUjc-AZCFQ',
    },
    {
      id: 'dl-2', week: 'w1', level: 'kindergarten', title: 'Sidebar', link: 'https://youtu.be/2YlKh2BORyc',
    },
    {
      id: 'dl-3', week: 'w1', level: 'kindergarten', title: 'Start/End + Comment', link: 'https://youtu.be/_HxupX7lKKU',
    },
    {
      id: 'dl-4', week: 'w1', level: 'kindergarten', title: 'History + IO Area', link: 'https://youtu.be/MK1MASGa0cM',
    },
    {
      id: 'dl-5', week: 'w1', level: 'kindergarten', title: 'Import + IO + consoleWrite', link: 'https://youtu.be/jriMYvV05Zc',
    },
    {
      id: 'dl-6', week: 'w1', level: 'kindergarten', title: 'Program: Hello World', link: 'https://youtu.be/AbIzSvyvX2s',
    },
    {
      id: 'dl-7', week: 'w1', level: 'kindergarten', title: 'Program: Personalized Greeting', link: 'https://youtu.be/jYCoijtANVg',
    },
    {
      id: 'dl-8', week: 'w1', level: 'kindergarten', title: 'Style', link: 'https://youtu.be/M4SpLNmZtgQ',
    },
    {
      id: 'dl-9', week: 'w2', level: 'elementary', title: 'Computer Memory', link: 'https://youtu.be/w4t6F-lsuX4',
    },
    {
      id: 'dl-10', week: 'w2', level: 'elementary', title: 'Set + Types', link: 'https://youtu.be/wUbTFbgooR0',
    },
    {
      id: 'dl-11', week: 'w2', level: 'elementary', title: 'Write + Clear', link: 'https://youtu.be/3JwbKyFVu_k',
    },
  ];

  // Level options for dropdown field
  const LEVELS = [
    { id: 'all', name: 'All' },
    { id: 'toddler', name: 'Toddler' },
    { id: 'primary', name: 'Primary' },
    { id: 'kindergarten', name: 'Kindergarten' },
    { id: 'elementary', name: 'Elementary' },
  ];

  // Week options for dropdown field
  const WEEKS = [
    { id: 'all', name: 'All' },
    { id: 'w1', name: '1' },
    { id: 'w2', name: '2' },
  ];

  const [searchInput, setSearchInput] = useState('');
  const [level, setLevel] = useState('all');
  const [week, setWeek] = useState('all');

  // Filter content based on selectedItem
  const contentFilter = (filter, selectedItem) => {
    if (selectedItem === 'all') {
      return () => true;
    }

    return (content) => content[filter] === selectedItem;
  };

  const contentList = DATA
    .filter((content) => content.title.toLowerCase().includes(searchInput.toLowerCase()))
    .filter(contentFilter('level', level))
    .filter(contentFilter('week', week))
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
      <div className="control-group">
        <div className="control-container">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" /></svg>
          <input id="dis-search" type="text" placeholder="Search for names.." className="control" onKeyUp={handleSearchInput} />
        </div>
        <DropdownField id="levels" label="Level" options={LEVELS} handleChange={handleChangeLevel} />
        <DropdownField id="weeks" label="Week" options={WEEKS} handleChange={handleChangeWeek} />
      </div>
      <div className="list">
        {contentList}
      </div>
    </div>
  );
};

DistanceLearning.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default DistanceLearning;
