import React, { Component } from "react";
import Typed from "react-typed";

export class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLineNumber: true,
      ref: this.props.compRef
    };
    this.toggleLineNumber = this.toggleLineNumber.bind(this);
  }

  toggleLineNumber() {
    this.setState(state => ({
      ...state,
      showLineNumber: !state.showLineNumber
    }));
  }

  render() {
    const wrapperStyle = {
      display: "inline-block",
      position: "relative"
    };

    const lineNumberStyle = {
      display: "block",
      background: "url(http://i.imgur.com/2cOaJ.png)",
      backgroundAttachment: "local",
      backgroundRepeat: "no-repeat",
      borderColor: "#ccc",
      paddingLeft: "35px",
      paddingTop: "12px",
      lineHeight: "16px"
    };

    const defaultStyle = {
      display: "block",
      paddingTop: "12px",
      lineHeight: "16px"
    };

    const buttonStyle = {
      size:"10%",
      position:"absolute",
      bottom:"10px",
      right:"20px"
    };

    var textAreaStyle;
    if (this.state.showLineNumber) {
      textAreaStyle = lineNumberStyle;
    } else {
      textAreaStyle = defaultStyle;
    }

    return (
      <div className="wrapper" data-tip data-for='TextAreaTips' ref={this.state.ref}>
        <div className="form-group shadow-textarea" style={wrapperStyle} >
          {/* <textarea
            data-tip
            data-for="TextAreaTips"
            className="form-control rounded-0 z-depth-1"
            cols="50"
            id="codingArea"
            rows="28"
            placeholder="Coding area"
            style={textAreaStyle}
            // onChange={this.checkCode}
          />
          <button
            className="btn btn-light"
            style={buttonStyle}
            onClick={this.toggleLineNumber}
          >
            toggle
          </button> */}

          <Typed
            strings={[
              "start\nset(numbers)\nwrite(4)\nprint\nend",
              "start\nset(letters)\nwrite(“Hello!”)\nprint\nend",
              "start\nmove(right)\nmove(left)\nend",
		"start\nloop(4){\nmove(right)\n}\nend",
		    "start\nset(numbers)\nwrite(4)\nif(is equal 4){\nloop(memory(1))\n{\nmove(right)\n}\nend}"
            ]}
            typeSpeed={40}
            backSpeed={30}
            attr="placeholder"
            loop
            showCursor={false}
          >
            <textarea
              className="form-control rounded-0 z-depth-1"    
              cols="50"
              id="codingArea"
              rows="28"
              style = {textAreaStyle}
            />
          </Typed>
          <button className="btn btn-light" style={buttonStyle} onClick={this.toggleLineNumber}>toggle</button>
        </div>
      </div>
    );
  }
}

export default TextArea;
