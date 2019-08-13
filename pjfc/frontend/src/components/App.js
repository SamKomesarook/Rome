import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import Header from "./layout/Header";
import Form from "./layout/Form";

export class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Header />
        </div>
        <div className="container">
          <Form method={"GET"} />
          <Form method={"POST"} />
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
