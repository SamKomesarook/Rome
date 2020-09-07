import React, { useContext } from 'react';
import { UiContext } from '../../state/UiContext';

const VideoPlayer = () => {
  const [ui, setUi] = useContext(UiContext);

  const className = ui.ctxIsVideoPlayerActive ? '' : 'hidden';
  const embedSrc = `https://www.youtube-nocookie.com/embed/${ui.ctxYoutubeContentID}`;

  const closeVideoPlayer = () => {
    setUi((prevUI) => ({ ...prevUI, ctxIsVideoPlayerActive: false, ctxYoutubeContentID: '' }));
  };

  return (
    <div id="video-player" className={className}>
      <iframe title="Distance-learning-video" src={embedSrc} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        <p>
          <a href={`https://www.youtube.com/watch?v=${ui.ctxYoutubeContentID}`}>
            Fallback link for browsers that don't support iframes
          </a>
        </p>
      </iframe>
      <button type="button" onClick={closeVideoPlayer}>
        {/* TODO: Nick - May need some kind of alt-text for accessibility */}
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" className="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
      </button>
    </div>
  );
};

export default VideoPlayer;