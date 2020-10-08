import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Rome from '../../icons/Rome.svg';

const About = ({ isActive }) => {
  const thankContent = 'Ton Binh On (Nick)\nJiecong Zhang\nShujie Yang\nErina Ho';
  const thankTitle = 'special thanks to:';
  const [heartBurstClass, setHeartBurstClass] = useState('');
  const isActiveClass = isActive ? '' : ' hidden';

  const handleClickHeart = () => {
    heartBurstClass === '' ? setHeartBurstClass('animate') : setHeartBurstClass('');
  };

  return (
    <div id="about" className={`sidebar-item-pane${isActiveClass}`}>
      <div id="about-content">
        <div id="about-title">
          <span>Rome-Education + Julia Brown Schools +&nbsp;</span>
          <div
            className={`heart-animation ${heartBurstClass}`}
            onClick={handleClickHeart}
            onKeyPress={handleClickHeart}
            role="button"
            tabIndex="0"
            aria-label="heart icon"
          />
          <span>&nbsp;=&nbsp;</span>
        </div>
        <div id="image-container">
          <img id="about-rome" src={Rome} width="400" height="400" alt="rome logo" />
        </div>
        <div className="about-heading">
          {thankTitle}
        </div>
        <div className="about-paragraph">
          {thankContent}
        </div>
      </div>
    </div>
  );
};

About.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default About;
