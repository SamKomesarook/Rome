import React, { Component } from "react";
import Interpreter from "../../interpreter/main";

export class Button extends Component {
  state = {
    name: this.props.name,
    class: "btn btn-primary",
    clickFunc: null,
    dataFor: null,
    icon: null,
    ref: this.props.compRef
  };

  componentWillMount() {
    switch (this.props.name) {
      case "Run":
        this.setState({
          class: "btn btn-primary btn-sm hvr-icon-spin button",
          clickFunc: this.runCode,
          dataFor: "ButtonRun",
          icon: "fas fa-cog hvr-icon",
          memArr: this.props.memArr
        });
        break;
      case "Stop":
        this.setState({
          class: "btn btn-danger btn-sm hvr-icon-pulse-grow button",
          clickFunc: this.stopCode,
          dataFor: "ButtonStop",
          icon: "far fa-stop-circle hvr-icon"
        });
        break;
      case "Help":
        this.setState({
          class: "btn btn-info btn-sm hvr-icon-up button",
          dataFor: "ButtonHelp",
          dataEvent: "click",
          dataEventOff: "mouseout",
          icon: "far fa-question-circle hvr-icon"
        });
        break;
      case "Info":
        this.setState({
          class: "btn btn-warning btn-sm hvr-icon-grow button",
          clickFunc: this.props.toggle,
          dataFor: "ButtonInfo",
          icon: "fas fa-info-circle hvr-icon"
        });
        break;
      default:
        this.setState({
          class: "btn btn-info btn-sm",
          clickFunc: this.props.toggle,
          dataFor: "ButtonHideShow"
        });
        break;
    }
  }

  //Highlight section loop through the text area ,delays every 2 seconds
  runHighlight = () => {
    var textArea = document.getElementById("codingArea");
    var textValue = textArea.value;
    var textLines = textValue.split("\n");
    for (var i = 0; i < textLines.length; i++) {
      (function(i) {
        setTimeout(function() {
          var lines = textLines;
          var index = textValue.indexOf(lines[i]);
          textArea.focus();
          textArea.selectionStart = index;
          textArea.selectionEnd = index + lines[i].length;
        }, 2000 * i);
      })(i);
    }
  };

  /**
   * Once run button is clicked, create Interperter and start parsing code
   */
  runCode = () => {
    const code = document.getElementById("codingArea").value;
	  const delay = document.getElementById("Slider").value;
	  //console.log(delay);
    var interpreter = new Interpreter(
      code,
      this.props.memArr,
      this.props.updateContentType,
      this.props.moveMem,
      this.props.writeContent,
      this.props.freeMem,
      this.props.sendMemAnimation,
      this.props.readMemAnimation,
      this.props.toggle,
      this.props.printAnimation,
	delay
    );
    var validCode = interpreter.start(code);
    // only disable run button when the code is valid
    if (validCode) {
      this.props.toggleButton(this.props.runClicked);
    }
    console.log("RUN Clicked!");
  };

  /**
   * Stop code from running and reset memory area and output window area
   */
  stopCode = () => {
    this.props.toggle();
    this.props.toggleButton(this.props.runClicked);
    console.log("STOP Clicked!");
  };

  render() {
    if (this.state.name === "Run" || this.state.name === "Stop") {
      return (
        <button
          type="button"
          className={this.state.class}
          onClick={this.state.clickFunc}
          data-tip
          data-for={this.state.dataFor}
          data-event={this.state.dataEvent}
          data-event-off={this.state.dataEventOff}
          ref={this.state.ref}
          disabled={
            this.state.name === "Run"
              ? this.props.runClicked
              : !this.props.runClicked
          }
        >
          <i className={this.state.icon}></i> {this.state.name}
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className={this.state.class}
          onClick={this.state.clickFunc}
          data-tip
          data-for={this.state.dataFor}
          data-event={this.state.dataEvent}
          data-event-off={this.state.dataEventOff}
          ref={this.state.ref}
        >
          <i className={this.state.icon}></i> {this.state.name}
        </button>
      );
    }
  }
}

export default Button;
