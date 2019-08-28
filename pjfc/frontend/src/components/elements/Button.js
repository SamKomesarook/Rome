import React, { Component } from "react";
import { Spring } from "react-spring";
const axios = require("axios");

export class Button extends Component {
  state = { class: "btn btn-primary" };

  componentDidMount() {
    if (this.props.name === "Run") {
      this.setState({
        class: "btn btn-primary"
      });
    } else if (this.props.name === "Stop") {
      this.setState({
        class: "btn btn-danger"
      });
    }
  }

  /* example code for front-end back-end communication */
  runCode = () => {
    var codeContent = document.getElementById("codingArea").value;
    axios
      .post("/run/", {
        code: codeContent
      })
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    if (this.props.type === "submit") {
      return (
        <a>
          <input
            type="submit"
            value={this.props.name}
            className={this.state.class}
          />
        </a>
      );
    } else {
      return (
        <div className="form-group shadow-textarea">
          <button
            type="button"
            className={this.state.class}
            onClick={this.runCode}
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
