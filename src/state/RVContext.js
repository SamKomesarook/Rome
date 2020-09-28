import React, { useState } from 'react';

export const RVContext = React.createContext();

export const RVProvider = (props) => {
  const [on, setOn] = useState({
    show: true,
  });

  return (
    <RVContext.Provider value={[on, setOn]}>
      {props.children}
    </RVContext.Provider>
  );
};
