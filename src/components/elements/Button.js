import React, { Component } from "react";
import Interpreter from "../../interpreter/main";

export class Button extends Component {
  state = {
    name: this.props.name,
    class: "btn btn-primary",
    clickFunc: null,
    dataFor: "ButtonTips",
    memArr: null
  };

  componentWillMount() {
    if (this.props.name === "Run") {
      this.setState({
        class: "btn btn-primary",

        clickFunc: this.runCode,
        dataFor: "ButtonTips",
        memArr: this.props.memArr

      });
    } else if (this.props.name === "Stop") {
      this.setState({
        class: "btn btn-danger",
        clickFunc: this.stopCode,
        dataFor: "ButtonTips"
      });
    } else if (this.props.name === "Help") {
      this.setState({
        class: "btn btn-info",
        dataFor: "clickForHelp",
        dataEvent: "click",
        dataEventOff: "blur"
      });
    } else {
      this.setState({
        class: "btn btn-info",
        clickFunc: this.props.toggle
      });
    }
  }

  // TODO: stop button function
  stopCode = () => {
    console.log("STOP Clicked!");
  };

  

  

  //Highlight section loop through the text area ,delays every 2 seconds
  runHighlight = () => {    
    var textArea = document.getElementById("codingArea");
    var textValue = textArea.value;
    var textLines = textValue.split('\n');
    for(var i = 0; i < textLines.length ; i++){
      (function(i){
        setTimeout(function(){
          var lines = textLines;
          var index = textValue.indexOf(lines[i]);
          textArea.focus();
          textArea.selectionStart = index;
          textArea.selectionEnd = index + lines[i].length;
          //if(i > 0){
          //  lines[i-1] = lines[i-1].replace();
          //}
      }, 2000 * i)
     })(i);
      
    } 

  };

  runCode = () => {
    var code = document.getElementById("codingArea").value;
    new Interpreter(code, this.state.memArr);
    console.log("RUN Clicked!");
  };

  render() {
    // console.log(this.props.name);
    // console.log(this.state);
    if (this.props.type === "submit") {
      return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a>
          <input
            type="submit"
            value={this.props.name}
            className={this.state.class}
            href="#"
          />
        </a>
      );
    } else {
      return (
        <div className="form-group shadow-textarea">
          <button
            type="button"
            className={this.state.class}
            onClick={this.state.clickFunc}
            data-tip
            data-for={this.state.dataFor}
            data-event={this.state.dataEvent}
            data-event-off={this.state.dataEventOff}
          >
            {this.state.name}
          </button>
        </div>
      );
    }
  }
}

export default Button;
