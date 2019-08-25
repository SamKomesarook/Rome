import React, { Component } from "react";

export class TextArea extends Component {
  
  
  
  
  render() {
    const mystyle = {
      background: "url(http://i.imgur.com/2cOaJ.png)",
      backgroundAttachment: "local",
      backgroundRepeat: "no-repeat",
      paddingLeft: "35px",
      paddingTop: "10px",
      borderColor:"#ccc"
    };
  

    return (
      <div className="wrapper">
        <div className="form-group shadow-textarea">
          <textarea
            data-tip data-for='TextAreaTips'
            className="form-control rounded-0 z-depth-1"
            style={mystyle}
            cols="50"
            id="codingArea"
            rows="20"
            placeholder="Coding area"
          />
        </div>
      </div>
    );
  }
}

export default TextArea;
