import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import Header from "./layout/Header";
import Form from "./layout/Form";
import { Memory, USBMemory, NetMemory } from "./elements/Memory";
import { SignalIcon, USBIcon } from "./elements/Icon";
import RunButton from "./input-components/RunButton";
import StopButton from "./input-components/StopButton";
import TextArea from "./input-components/TextArea";
import Slider from "./input-components/Slider";
export class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />

		  <div class = "row">
            
		  </div>
	
        <div className="container">

          <div className="row">
            <div className="col-sm">
              <Form method={"GET"} />
              <Form method={"POST"} />
		      <TextArea />
		      <div class = "row slider-container">
		        <div class="col-sm-8">
		          <Slider />
		        </div>
		      </div>
		      <div class = "row">
		        <div class = "col-sm-2">
		         <RunButton/>
		        </div>
		        <div class = "col-sm-2">
		          <StopButton/>
		        </div>
		      </div>
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
