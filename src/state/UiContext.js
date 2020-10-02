import React, { useState } from 'react';

export const UiContext = React.createContext();

export const UiProvider = (props) => {
  const [ui, setUi] = useState({
    ctxIsVideoPlayerActive: false,
    ctxYoutubeContentID: '',
    ctxIsAppRunViewActive: false,
    ctxDraggedItem: '',
  });

  return (
    <UiContext.Provider value={[ui, setUi]}>
      {props.children}
    </UiContext.Provider>
  );
};
