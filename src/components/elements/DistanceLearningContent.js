import React, { useContext } from 'react';
import { UiContext } from '../../state/UiContext';

const DistanceLearningContent = (props) => {
  const [ui, setUi] = useContext(UiContext);
  const youtubeContentID = props.link.split('=')[1];
  const embedSrc = `https://www.youtube-nocookie.com/embed/${youtubeContentID}`;

  const handleSelectVideo = (e) => {
    setUi((ui) => ({ ...ui, ctxIsVideoPlayerActive: true, ctxYoutubeContentID: youtubeContentID }));
  };

  //   const content = file_get_contents(`http://youtube.com/get_video_info?video_id=${youtubeContentID}`);
  // parse_str($content, $ytarr);
  // echo $ytarr['title'];
  // https://www.youtube.com/watch?v=qQ1oQJJn1nQ
  // <iframe width="560" height="315" src="https://www.youtube.com/embed/   " frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  return (
    <div>
      {/* <iframe width="560" height="315" src={embedSrc} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> */}
      <button type="button" className="dist-learn-content-result" onClick={handleSelectVideo}>
        {props.title}
        {/* <iframe src={embedSrc} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> */}
      </button>
    </div>
    //   <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/qQ1oQJJn1nQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  );
};

export default DistanceLearningContent;
