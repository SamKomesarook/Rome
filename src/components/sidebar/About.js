import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Rome from '../../icons/Rome.svg';

const About = ({ isActive }) => {
  const thankContent = 'Ton Binh On (Nick)\nJiecong Zhang\nShujie Yang\nErina Ho';
  const thankTitle = 'special thanks to:';
  const FILLED = "filled";
  const UNFILLED = "unfilled";
  
  const heartIcon = [
      {keyword: FILLED, icon: <svg width="30" height="30" viewBox="0 0 16 16" className="bi bi-heart-fill" fill="red" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" /></svg>},
      {keyword: UNFILLED, icon: <svg width="30" height="30" viewBox="0 0 16 16" className="bi bi-heart-unfill" fill="red" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" /></svg>},
  ]
  
  const [keyword, setKeyword] = useState('filled');
  const { icon: currentIcon } = heartIcon.find((element) => element.keyword === keyword);
  
  const isActiveClass = isActive ? '' : ' hidden';

  const heartChange = (e) =>{
	  if (keyword === "filled"){
	      setKeyword(UNFILLED);
	  } else {
		  setKeyword(FILLED);
	  }
  }
  
  return (
    <div id="about" className={`sidebar-item-pane${isActiveClass}`}>
      <div id="about-content">
        <div id="about-title">
          <span>Rome-Education + Julia Brown Schools +&nbsp;</span>
          <button onClick={heartChange} id="title-heart">
			{currentIcon}
          </button>
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
