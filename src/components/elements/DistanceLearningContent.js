import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { UiContext } from '../../state/UiContext';

const DistanceLearningContent = ({ title, link }) => {
  const [ui, setUi] = useContext(UiContext);
  const youtubeContentID = link.split('=')[1];

  const handleSelectVideo = () => {
    setUi((prevUI) => ({
      ...prevUI,
      ctxIsVideoPlayerActive: true,
      ctxYoutubeContentID: youtubeContentID,
    }));
  };

  return (
    <div>
      <button
        type="button"
        className="dist-learn-content-result"
        onClick={handleSelectVideo}
      >
        {title}
      </button>
    </div>
  );
};

DistanceLearningContent.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default DistanceLearningContent;
