import React from 'react';
import PropTypes from 'prop-types';
import Rome from '../../icons/Rome.svg';

const About = ({ isActive }) => {
  const thankContent = 'Ton Binh On (Nick)\nJiecong Zhang\nShujie Yang\nErina Ho';
  const thankTitle = 'special thanks to:';

  const isActiveClass = isActive ? '' : ' hidden';

  return (
    <div id="about" className={`sidebar-item-pane${isActiveClass}`}>
      <div id="about-content">
        <div id="about-title">
          <span>Rome-Education + Julia Brown Schools +&nbsp;</span>
          <svg viewBox="0 0 16 16" className="bi bi-heart-fill" fill="red" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" /></svg>
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
