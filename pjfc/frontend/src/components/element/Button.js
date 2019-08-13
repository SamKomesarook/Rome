import React, { Component } from "react";

export class Button extends Component {
  render() {
    return (
      <a>
        <input type="submit" value={this.props.buttonText} />
      </a>
    );
  }
}

export default Button;
