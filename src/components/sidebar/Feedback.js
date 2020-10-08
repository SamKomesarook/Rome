import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './sidebar.css';

const Feedback = ({ isActive }) => {
  const isActiveClass = isActive ? '' : ' hidden';

  const [userEmail, setUserEmail] = useState('');
  const [feedbackContent, setFeedbackContent] = useState('');

  const submitFeedback = () => {
    // validate email input before jump to email to
    const atpos = userEmail.indexOf('@');
    const dotpos = userEmail.lastIndexOf('.');
    if (atpos >= 1 && dotpos >= atpos + 2 && dotpos + 1 < userEmail.length) {
      const mailToContent = `mailto:rome-education@protonmail.com?subject=Feedback&body=User Email: ${userEmail}%0d%0aFeedback Content: %0d%0a${feedbackContent}`;
      window.location.href = mailToContent;
    }
  };

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleContentChange = (e) => {
    setFeedbackContent(e.target.value);
  };

  return (
    <div id="feedback" className={`sidebar-item-pane${isActiveClass}`}>
      <form id="input-control">
        <div className="control-container">
          <span style={{ color: 'white' }}>Email:</span>
          <input type="email" onChange={handleEmailChange.bind(this)} id="feedbackEmail" name="feedbackEmail" placeholder="Please input your email" className="control" />
        </div>
        <div className="control-container" id="feedbackDirection">
          <div>
            <span style={{ color: 'white' }}>Feedback:</span>
          </div>
          <div>
            <textarea type="text" onChange={handleContentChange.bind(this)} form="input-control" id="feedbackContent" name="feedbackContent" placeholder="Please input your feedback for us" />
          </div>
        </div>
        <div>
          <input id="feedbackButton" type="submit" value="Submit" onClick={submitFeedback} />
        </div>
      </form>
    </div>
  );
};

Feedback.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Feedback;
