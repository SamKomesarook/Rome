import React, { Component } from "react";

import Button from "../elements/Button";

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

    var test = () => {
      fetch("http://localhost:8000/test")
        .then(function(response) {
          console.log(response);
          return response.json();
        })
        .then(function(myJson) {
          console.log("I AM HERE");
          console.log(JSON.stringify(myJson));
        });
    };

    var p = test();
    // console.log("response: " + p);

    return (
      <form action="test/" method={this.props.method}>
        Title: <input type="text" name="title" />
        <br />
        Content: <input type="text" name="content" />
        <Button name={buttonText} type="submit"/>
      </form>
    );
  }
}

export default Form;
