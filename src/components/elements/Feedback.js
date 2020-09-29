import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Feedback = ({ isActive }) => {
  const DATA = [
    {
      email: '12344@xxx.com', content: 'Wonderful app ever.',
    },
  ];

  const isActiveClass = isActive ? '' : ' hidden';
  
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
		
/*bug here
      csvWriter.writeRecords(records)// returns a promise
          .then(() => {
             console.log('...Done');
       });
*/  
  }
  
  
  return (
    <div id="feedback" className={`sidebar-item-pane${isActiveClass}`}>
	  <form id="input-control">
	    <div className="control-container">
          <span style={{color:"white"}}>Email:</span>
          <input type="email" id="feedbackEmail" name="feedbackEmail" placeholder="input your email" className="control" />
        </div>
		<div className="control-container">
		  <div>
		    <span style={{color:"white"}}>Feedback:</span>
          </div>
		  <div>
		    <textArea type="text" form="input-control" id="feedbackContent" name="feedbackContent" placeholder="input your feedback for us" />
          </div>
		</div>
		<div id="feedbackSubmit">
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
