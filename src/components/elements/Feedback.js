import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Feedback = ({ isActive }) => {
  const DATA = [
    {
      email: '12344@xxx.com', content: 'Wonderful app ever.',
    },
  ];

  const isActiveClass = isActive ? '' : ' hidden';
  
 /* email sending method source code
  const nodemailer = require('nodemailer');

  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
         user: 'sherryysj@gmail.com',
         pass: ''
      }
    });

   const mailOptions = {
      from: 'sherryysj@gmail.com',
      to: 'sherryysj@gmail.com',
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
   };
  
  const submitFeedback = (e) => {
	  console.log("hello");
	  transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
	   
  }
  */
  
  /* sqlite database source code
  // Can't resolve 'aws-sdk' error with sqlite3
  const submitFeedback = (e) => {
	  console.log("hello");
	  const sqlite3 = require('sqlite3').verbose();
      let db = new sqlite3.Database(':memory:', (err) => {
      if (err) {
          return console.error(err.message);
      }
      console.log('Connected to the in-memory SQlite database.');
      });
  }
  */
  
  /* csv method source code
  const submitFeedback = (e) => {
	  console.log("hello");

      const createCsvWriter = require('csv-writer').createArrayCsvWriter;
      const csvWriter = createCsvWriter({
          header: ['NAME', 'LANGUAGE'],
          path: './file.csv'
      });

      const records = [
          ['Bob', 'French, English'],
          ['Mary', 'English']
        ];
		
      //bug here
      csvWriter.writeRecords(records)// returns a promise
          .then(() => {
             console.log('...Done');
       });
      
  }
  */
  
  const submitFeedback = (e) => {
	  console.log("placeholder");
  }
 
  return (
    <div id="feedback" className={`sidebar-item-pane${isActiveClass}`}>
	  <form id="input-control">
	    <div className="control-container">
          <span style={{color:"white"}}>Email:</span>
          <input type="email" id="feedbackEmail" name="feedbackEmail" placeholder="Please input your email" className="control" />
        </div>
		<div className="control-container" id="feedbackDirection">
		  <div>
		    <span style={{color:"white"}}>Feedback:</span>
          </div>
		  <div>
		    <textArea type="text" form="input-control" id="feedbackContent" name="feedbackContent" placeholder="Please input your feedback for us" />
          </div>
		</div>
		<div>
		  <input id="feedbackButton" type="submit" value="Submit" onClick={submitFeedback("this.form")}/>
		</div>  
	  </form> 
    </div>
  );
};

Feedback.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Feedback;
