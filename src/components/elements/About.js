import React, { useState } from 'react';
import PropTypes from 'prop-types';

const About = ({ isActive }) => {

  const content = "Rome-Education + Julia Brown Schools + (heart sign) = (rome logo)(will update this later) \n\nSpecial thanks to:\nTon Binh On - Nick (programming)\nJiecong Zhang (programming)\nShujie Yang (programming)\nErina Ho (gorgeous logo)";

  const isActiveClass = isActive ? '' : ' hidden';

  return (
    <div id="help" className={`sidebar-about-pane${isActiveClass}`}>
      <div id="help-content">
        {content}
      </div>
    </div>
  );
};

About.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default About;
