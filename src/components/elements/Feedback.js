import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import { openDatabase } from 'react-native-sqlite-storage';
//import { Alert } from 'react-native';

const Feedback = ({ isActive }) => {
  const DATA = [
    {
      email: '12344@xxx.com', content: 'Wonderful app ever.',
    },
  ];

  const isActiveClass = isActive ? '' : ' hidden';
  
  let [userEmail, setUserEmail] = useState('');
  let [feedbackContent, setFeedbackContent] = useState('');
  
  /* 
  // email sending method test source code
  const nodemailer = require('nodemailer');

  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
         user: 'xxxx@gmail.com',
         pass: 'xxxxx'
      }
    });

   const mailOptions = {
      from: 'xxxx@gmail.com',
      to: 'xxxx@gmail.com',
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
  
  /*
  // sqlite database test source code
  // Can't resolve 'aws-sdk' error with sqlite3
  const submitFeedback = (e) => {
	  console.log("sqlite initial test");
	  const sqlite3 = require('sqlite3').verbose();
      let db = new sqlite3.Database(':memory:', (err) => {
      if (err) {
          return console.error(err.message);
      }
      console.log('Connected to the in-memory SQlite database.');
      });
  }
  */
  
  /* 
  // react native sqlite database test source code
  var db = openDatabase({ name: 'UserDatabase.db' });
  

  const submitFeedback = (e) => {
	  console.log("react native sqlite initial test");
      db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO feedback (user_email, feedback_content) VALUES (?,?)',
        [userEmail, feedbackContent],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'You are Registered Successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => e.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Registration Failed');
        }
      );
    });
  }
  */
  
  /*
  // csv method test source code
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
		
      console.log("hello");
	  
      //bug here
      csvWriter.writeRecords(records)// returns a promise
          .then(() => {
             console.log('...Done');
       });
      
  }
  */
  
  const submitFeedback = (e) => {
	  console.log("placeholder");
	  console.log(userEmail);
	  console.log(feedbackContent);
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
		    <textarea type="text" form="input-control" id="feedbackContent" name="feedbackContent" placeholder="Please input your feedback for us" />
          </div>
		</div>
		<div>
		  <input id="feedbackButton" type="submit" value="Submit" onClick={submitFeedback}/>
		</div>  
	  </form> 
    </div>
  );
};

Feedback.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Feedback;
