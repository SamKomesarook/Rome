import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { UiContext } from '../../state/UiContext';

const DistanceLearningContent = ({ title, link }) => {
  const [ui, setUi] = useContext(UiContext);
  const youtubeContentID = link.replace('https://www.youtube.com/watch?v=', '').replace('https://youtu.be/', '');

  const handleSelectVideo = () => {
    setUi((prevUI) => ({
      ...prevUI,
      ctxIsVideoPlayerActive: true,
      ctxYoutubeContentID: youtubeContentID,
    }));
  };

  return (
    <button
      type="button"
      className="list-item"
      onClick={handleSelectVideo}
    >
      {title}
    </button>
  );
};

DistanceLearningContent.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default DistanceLearningContent;
