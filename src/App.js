import React, { Component, Fragment } from "react";
import { Transition, animated } from "react-spring/renderprops";
import Header from "./components/layout/Header";
// import Form from "./components/layout/Form";
import { Memory, USBMemory, NetMemory } from "./components/elements/Memory";
import { SignalIcon, USBIcon } from "./components/elements/Icon";
import TextArea from "./components/elements/TextArea";
import Slider from "./components/elements/Slider";
import Button from "./components/elements/Button";
import Tooltips from "./components/elements/Tooltips";


export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showWindowPortal: false,
	    showBinaryString:false,
      showAnimationArea:false
    };
    this.toggleAnimationArea = this.toggleAnimationArea.bind(this);
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

  toggleAnimationArea(){
    this.setState(state => ({
      ...state,
      showAnimationArea: !state.showAnimationArea
    }));
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
              <Button name="Hide/Show" toggle={this.toggleAnimationArea}/>  
            </div>
          </div> 
          <div className="row">
            <div className={this.state.showAnimationArea ?"col-sm-4" :"col-sm-12"}>
              <TextArea />
              <div className="row slider-container">
                  <Slider />
              </div>
              <div className="row">
                <div className={this.state.showAnimationArea ?"col-sm-4" :"col-sm-2"}>
                  <Button name="Run" toggle={this.toggleBinaryString} />
                </div>
                <div className={this.state.showAnimationArea ?"col-sm-4" :"col-sm-2"}>
                  <Button name="Stop" toggle={this.initiliazeBinaryString}/>
                </div>
                <div className={this.state.showAnimationArea ?"col-sm-4" :"col-sm-2"}>
                  <Button name="Help"/>
                </div>
              </div>
              {/* <Form method={"GET"} />
              <Form method={"POST"} /> */}
            </div>
            {this.state.showAnimationArea &&
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
            }
            {this.state.showAnimationArea &&
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
            }
          </div>
        </div>
        <Tooltips/>
,      </Fragment>
    );
  }
}


export default App;
