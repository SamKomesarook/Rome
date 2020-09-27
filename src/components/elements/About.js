import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Rome from '../../icons/Rome.svg';

const About = ({ isActive }) => {

  const content = "\nTon Binh On - Nick (programming)\nJiecong Zhang (programming)\nShujie Yang (programming)\nErina Ho (gorgeous logo)";

  const isActiveClass = isActive ? '' : ' hidden';

  return (
    <div id="about" className={`sidebar-about-pane${isActiveClass}`}>
      <div id="about-content">
        <span id="about-title">Rome-Education&nbsp;Julia Brown Schools&nbsp;&nbsp;</span> 
		<svg id="about-heart" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg>
		<span>&nbsp;&nbsp;</span>
		<img id="about-rome" src={Rome} width="125" height="125"/>
		<div id="about-thankTitle">
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		Special thanks to:
		</div>
		<div id="about-thank">
        {content}
		</div>
      </div>
    </div>
  );
};

About.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default About;
