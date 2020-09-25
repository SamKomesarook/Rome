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
      <div className="control-container">
	      Email: <input id="emailInput" type="text" placeholder="input your email" className="control"/>
	  </div>
	  <div className="control-container">
	      Feedback: <input id="feedbackInput" type="text" placeholder="input your feedback for us" className="control"/>
      </div>
	  <div id="feedback-content">
         12345
      </div>
    </div>
  );
};

Feedback.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Feedback;
