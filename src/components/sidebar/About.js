import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Rome from '../../icons/Rome.png';

const About = ({ isActive }) => {
  const [heartBurstClass, setHeartBurstClass] = useState('');
  const isActiveClass = isActive ? '' : ' hidden';

  const handleClickHeart = () => {
    heartBurstClass === '' ? setHeartBurstClass('animate') : setHeartBurstClass('');
  };

  return (
    <div id="about" className={`sidebar-item-pane ${isActiveClass}`}>
      <div id="about-content">
        <div id="about-title">
          <span>
            <span id="about-company">Rome Education</span>
            &nbsp;+&nbsp;
            <span id="about-company">Julia Brown Schools</span>
            &nbsp;+&nbsp;
          </span>
          <button
            type="button"
            className={`heart-animation ${heartBurstClass}`}
            onClick={handleClickHeart}
            aria-label="heart icon"
          />
          <span>&nbsp;=&nbsp;</span>
        </div>
        <div id="image-container">
          <img id="about-rome" src={Rome} width="300" height="400" alt="rome logo" />
        </div>
        <div className="about-heading">
          special thanks to:
        </div>
        <div className="about-paragraph">
          <div>
            <div className="about-name">Erina Ho</div>
            for the pretty logo.
          </div>
          <div>
            <a
              href="https://github.com/nickon437"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none', color: 'inherit', alignItems: 'center', textAlign: 'center', marginHorizontal: '100px',
              }}
            >
              <div className="about-name">Ton Binh On (Nick)</div>
            </a>
            {' '}
            for his programming skills.

          </div>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default About;
