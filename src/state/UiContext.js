import React, { useState, useRef } from 'react';

export const UiContext = React.createContext();

export const UiProvider = (props) => {
  const [ui, setUi] = useState({
    ctxIsVideoPlayerActive: false,
    ctxYoutubeContentID: '',
    ctxIsAppRunViewActive: false,
    ctxUsbRef: useRef(),
  });

  return (
    <UiContext.Provider value={[ui, setUi]}>
      {props.children}
    </UiContext.Provider>
  );
};
