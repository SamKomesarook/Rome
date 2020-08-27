import React, { useState } from 'react';

const DistanceLearning = (props) => {
  const isActiveClass = props.isActive ? '' : ' hidden';

  return (
    <div id="distance-learning" className={`distance-learning-pane${isActiveClass}`}>
      <input type="text" id="dist-learn-search-bar" placeholder="Search for names.." />
    </div>
  );
};

export default DistanceLearning;
