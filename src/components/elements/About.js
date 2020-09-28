import React from 'react';
import PropTypes from 'prop-types';
import Rome from '../../icons/Rome.svg';

const About = ({ isActive }) => {
  const thankContent = 'Ton Binh On - Nick (programming)\nJiecong Zhang (programming)\nShujie Yang (programming)\nErina Ho (gorgeous logo)';
  const thankTitle = 'Special thanks to:';

  const isActiveClass = isActive ? '' : ' hidden';

  return (
    <div id="about" className={`sidebar-item-pane${isActiveClass}`}>
      <div id="about-content">
        <div id="about-title">
          <span>Rome-Education + Julia Brown Schools +&nbsp;</span>
          <svg viewBox="0 0 16 16" className="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" /></svg>
          <span>&nbsp;=&nbsp;</span>
          <img id="about-rome" src={Rome} width="125" height="125" alt="rome logo" />
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
