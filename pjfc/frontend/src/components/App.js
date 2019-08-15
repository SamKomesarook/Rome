import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import Header from "./layout/Header";
import Form from "./layout/Form";
import { Memory, USBMemory, NetMemory } from "./elements/Memory";
import { SignalIcon, USBIcon } from "./elements/Icon";

export class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <div className="container">
          <div className="row">
            <div className="col-sm">
              <Form method={"GET"} />
              <Form method={"POST"} />
            </div>
            <div className="col-sm">
              <div className="row">
                <Memory selected={true} />
                <Memory selected={false} />
                <Memory selected={false} />
              </div>
              <div className="row">
                <Memory selected={false} />
                <Memory selected={false} />
                <Memory selected={false} />
              </div>
              <div className="row">
                <Memory selected={false} />
                <Memory selected={false} />
                <Memory selected={false} />
              </div>
              <div className="row">
                <Memory selected={false} />
                <Memory selected={false} />
                <Memory selected={false} />
              </div>
              <div className="row">
                <Memory selected={false} />
                <div>
                  <USBIcon />
                  <USBMemory selected={false} />
                </div>
                <div>
                  <SignalIcon />
                  <NetMemory selected={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
