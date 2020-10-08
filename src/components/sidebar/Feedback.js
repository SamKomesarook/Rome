import React from 'react';
import PropTypes from 'prop-types';
import './sidebar.css';
import emailjs from 'emailjs-com';

const Feedback = ({ isActive }) => {
  const isActiveClass = isActive ? '' : ' hidden';

  const submitFeedback = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div id="feedback" className={`sidebar-item-pane${isActiveClass}`}>
      <form id="fb-form" onSubmit={submitFeedback}>
        <div className="control-container">
          <label htmlFor="fb-subject">
            Subject:
            <input type="text" id="fb-subject" name="subject" placeholder="Subject" className="control" />
          </label>
        </div>
        <div className="control-container">
          <label htmlFor="fb-content" id="fb-content-label">
            Feedback:
            <textarea type="text" id="fb-content" form="fb-form" name="message" placeholder="Content of feedback" />
          </label>
        </div>
        <div>
          <input id="feedbackButton" type="submit" value="Submit" className="std-btn" />
        </div>
      </form>
    </div>
  );
};

Feedback.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Feedback;
