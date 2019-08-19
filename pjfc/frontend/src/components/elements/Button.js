import React, { Component } from "react";

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
          <button type="button" className={this.state.class} data-tip data-for="ButtonTips">
            {this.props.name}
          </button>
        </div>
      );
    }
  }
}

export default Button;
