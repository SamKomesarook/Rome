import React from 'react';
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

  const contentList = DATA.map((content) => (
    <DistanceLearningContent
      id={content.id}
      week={content.week}
      level={content.level}
      title={content.title}
      link={content.link}
    />
  ));

  const isActiveClass = props.isActive ? '' : ' hidden';

  return (
    <div id="distance-learning" className={`distance-learning-pane${isActiveClass}`}>
      <div id="filter-control">
        <input type="text" id="dist-learn-search-bar" placeholder="Search for names.." />
      </div>
      <div id="dist-learn-content-container">
        {contentList}
      </div>
    </div>
  );
};

export default DistanceLearning;
