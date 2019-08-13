import React, { Component } from "react";

import Button from "../element/Button";

export class Form extends Component {
  render() {
    return (
      <form action="test/" method="GET">
        Title: <input type="text" name="title" />
        <br />
        Content: <input type="text" name="content" />
        <Button />
      </form>
    );
  }
}

export default Form;
