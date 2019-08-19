import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import Header from "./layout/Header";
import Form from "./layout/Form";
import { Memory, USBMemory, NetMemory } from "./elements/Memory";
import { SignalIcon, USBIcon } from "./elements/Icon";
import TextArea from "./elements/TextArea";
import Slider from "./elements/Slider";
import Button from "./elements/Button";
import Tooltips from './elements/Tooltips';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showWindowPortal: false
    };

    this.toggleWindow = this.toggleWindowPortal.bind(this);
    this.closeWindow = this.closeWindowPortal.bind(this);
  }

  componentDidMount() {
    window.addEventListener("beforeunload", () => {
      this.closeWindowPortal();
    });
  }

  toggleWindowPortal() {
    this.setState(state => ({
      ...state,
      showWindowPortal: !state.showWindowPortal
    }));
  }

  closeWindowPortal() {
    this.setState({ showWindowPortal: false });
  }

  render() {
    return (
      <Fragment>
        <Header />

        <div className="row" />

        <div className="container">
          <div className="row">
            <div className="col-sm">
             
              <TextArea />
              <div className="row slider-container">
                <div className="col-sm-8">
                  <Slider />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <Button name="Run" />
                </div>
                <div className="col-sm-2">
                  <Button name="Stop" />
                </div>
              </div>
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
        <Tooltips/>
,      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
