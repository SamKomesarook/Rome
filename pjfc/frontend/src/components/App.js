import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Transition, animated } from "react-spring/renderprops";
import Header from "./layout/Header";
import Form from "./layout/Form";
import { Memory, USBMemory, NetMemory } from "./elements/Memory";
import { SignalIcon, USBIcon } from "./elements/Icon";
import TextArea from "./elements/TextArea";
import Slider from "./elements/Slider";
import Button from "./elements/Button";
import Tooltips from "./elements/Tooltips";
import BinaryString from "./elements/BinaryString";
import HelpButton from "./elements/HelpButton";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showWindowPortal: false,
	  showBinaryString:false
    };
	this.initiliazeBinaryString = this.initiliazeBinaryString.bind(this);
    this.toggleBinaryString = this.toggleBinaryString.bind(this);
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
  
  toggleBinaryString() {
    this.setState(state => ({
      ...state,
      showBinaryString: true
    }));
  }
  
    initiliazeBinaryString() {
    this.setState(state => ({
      ...state,
      showBinaryString: false
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
            <div className="col-sm-4">
             
              <TextArea />
              <div className="row slider-container">
                <div className="col-sm-8">
                  <Slider />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <Button name="Run" toggle={this.toggleBinaryString} />
                </div>
                <div className="col-sm-6">
                  <Button name="Stop" toggle={this.initiliazeBinaryString}/>
                </div>
                <div className="col-sm-2">
                  <HelpButton name="Help"/>
                </div>
              </div>
              <Form method={"GET"} />
              <Form method={"POST"} />
            </div>
			<div className="col-sm-3"  align="center">
              <div className="row">
				  <i className="fas fa-microchip fa-4x float-right"/>
				  <Transition
					native
					items={this.state.showBinaryString}
					from={{ opacity: 1, marginLeft: 0 }}
					enter={{ opacity: 1, marginLeft: 150}}
					leave={{ opacity: 0 }}
				  >
					{show =>
					 show &&
					(props => (
					<animated.div style={props}>
					  1011101
					</animated.div>
					))
					}
				  </Transition>
			  </div>
			</div>
            <div className="col-sm-5">
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
