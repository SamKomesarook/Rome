import React, { Component } from "react";

export class Button extends Component {
  state = { class: "btn btn-primary", clickFunc: null };

  componentDidMount() {
    if (this.props.name === "Run") {
      this.setState({
        class: "btn btn-primary",
        clickFunc: this.runCode
      });
    } else if (this.props.name === "Stop") {
      this.setState({
        class: "btn btn-danger",
        clickFunc: this.stopCode
      });
    }
  }

  // TODO: stop button function
  stopCode = () => {
    console.log("STOP Clicked!");
  };

  runCode = () => {
    console.log("RUN Clicked!");
  }

  render() {
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
            //onClick={this.props.toggle}
            data-tip
            data-for="ButtonTips"
          >
            {this.props.name}
          </button>
        </div>
      );
    }
  }
}

export default Button;
