import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Debug = ({ isActive }) => {
  const DATA = [
    {
      topic: 'Challenge Title', content: 'Challenge content and solution',
    },
    {
      topic: 'Calculator', content: 'Create a program that asks a user for two numbers, then adds them together and displays the result.',
    },
  ];

  const isActiveClass = isActive ? '' : ' hidden';

  return (
    <div id="Debug" className={`sidebar-item-pane${isActiveClass}`}>
      <h1>feedback</h1>
    </div>
  );
};

Debug.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Debug;
