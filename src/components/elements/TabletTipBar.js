import React from 'react';

const TabletTipBar = () => {
  const isTabletTipHidden = navigator.userAgent.match(/Tablet|iPad/i) ? '' : 'hidden';

  return (
    <div id="tablet-tip-bar" className={isTabletTipHidden}>
      Tip: Using a desktop or laptop will give you a better experience.
    </div>
  );
};

export default TabletTipBar;
