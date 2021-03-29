import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import emailjs from 'emailjs-com';

const Feedback = ({ isActive }) => {
  const isActiveClass = isActive ? '' : ' hidden';
  const [status, setStatus] = useState('');
  const emailRef = useRef('');
  const nameRef = useRef('');
  const contentRef = useRef('');

  const submitFeedback = (e) => {
    e.preventDefault();
    setStatus('');

    // Requires information from emailjs account to work.
    emailjs.sendForm('service_sl5agbc', 'template_rerb5ej', e.target, 'user_TrwT24BsmBpPxIYEM92fD')
      .then((result) => {
        setStatus('success');
      }, (error) => {
        setStatus('fail');
        window.location.href = `mailto:sam@aecomposite.com?subject=Rome Feedback&body=User's name: ${nameRef.current.value}%0d%0aFeedback:%0d%0a${contentRef.current.value}`;
      });
  };

  return (
    <div id="feedback" className={`sidebar-item-pane${isActiveClass}`}>
      <form id="fb-form" onSubmit={submitFeedback}>
        <div className="control-container">
          <label htmlFor="fb-name">
            Name:
            <input type="text" id="fb-name" ref={nameRef} name="from_name" placeholder="Your name" className="control" />
          </label>
        </div>
        <div className="control-container">
          <label htmlFor="fb-email">
            Email:
            <input type="email" id="fb-email" ref={emailRef} name="from_email" placeholder="Your email" className="control" />
          </label>
        </div>
        <div className="control-container">
          <label htmlFor="fb-content" id="fb-content-label">
            Feedback:
            <textarea type="text" id="fb-content" ref={contentRef} form="fb-form" name="message" placeholder="Content of feedback" />
          </label>
        </div>
        <div className="hflex">
          <div className={status === 'success' ? '' : 'hidden'}>
            <svg viewBox="0 0 24 24"><path fill="currentColor" d="M21,13.34C20.37,13.12 19.7,13 19,13A6,6 0 0,0 13,19C13,19.34 13.03,19.67 13.08,20H3A2,2 0 0,1 1,18V6C1,4.89 1.89,4 3,4H19A2,2 0 0,1 21,6V13.34M23.5,17L18.5,22L15,18.5L16.5,17L18.5,19L22,15.5L23.5,17M3,6V8L11,13L19,8V6L11,11L3,6Z" /></svg>
            Successfully sent
          </div>
          <div className={status === 'fail' ? '' : 'hidden'} style={{ color: 'red' }}>
            <svg viewBox="0 0 24 24"><path fill="currentColor" d="M20.41 19L22.54 21.12L21.12 22.54L19 20.41L16.88 22.54L15.47 21.12L17.59 19L15.47 16.88L16.88 15.47L19 17.59L21.12 15.47L22.54 16.88L20.41 19M13 19C13 19.34 13.04 19.67 13.09 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.89 4 4 4H20C21.1 4 22 4.89 22 6V13.81C21.12 13.3 20.1 13 19 13C15.69 13 13 15.69 13 19M20 8V6L12 11L4 6V8L12 13L20 8Z" /></svg>
            Failed to send
          </div>
          <button type="submit" className="std-btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

Feedback.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Feedback;
