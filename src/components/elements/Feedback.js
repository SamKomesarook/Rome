import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Feedback = ({ isActive }) => {
  const DATA = [
    {
      email: '12344@xxx.com', content: 'Wonderful app ever.',
    },
  ];

  const isActiveClass = isActive ? '' : ' hidden';
  
  
  return (
    <div id="feedback" className={`sidebar-item-pane${isActiveClass}`}>
      <div id="feedback-content">
        
      </div>
    </div>
  );
};

Feedback.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Feedback;
