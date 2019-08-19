import React, { Component } from "react";

export class TextArea extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="form-group shadow-textarea">
          <textarea
            data-tip data-for='TextAreaTips'
            className="form-control rounded-0 z-depth-1"
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
