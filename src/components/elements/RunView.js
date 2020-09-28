import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RunView = ({ isActive }) => {
  const DATA = [
    {
      topic: 'runview'
    }
  ];


  const isActiveClass = isActive ? '' : ' hidden';

  return (
    <div id="help" className={`sidebar-item-pane${isActiveClass}`}>
        <h1> runview </h1>
    </div>
  );
};

RunView.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default RunView;
