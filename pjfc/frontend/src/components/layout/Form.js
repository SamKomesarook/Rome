import React, { Component } from "react";

import Button from "../element/Button";

export class Form extends Component {
  render() {
    var method = this.props.method;
    var buttonText = "";

    if (method === "GET") {
      console.log("GET HERE");
      buttonText = "GET REQUEST";
    } else {
      console.log("POST HERE");
      buttonText = "POST REQUEST";
    }

    return (
      <form action='test/' method={this.props.method}>
        Title: <input type="text" name="title" />
        <br />
        Content: <input type="text" name="content" />
        <Button buttonText={buttonText} />
      </form>
    );
  }
}

export default Form;
