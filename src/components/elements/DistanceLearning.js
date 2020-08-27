import React, { useState } from 'react';

const DistanceLearning = (props) => {
  const isActiveClass = props.isActive ? '' : ' hidden';

  return (
    <div className={`distance-learning-pane${isActiveClass}`}>
      <input type="text" id="dl-search-bar" placeholder="Search for names.." />
    </div>
  );
};

export default DistanceLearning;
