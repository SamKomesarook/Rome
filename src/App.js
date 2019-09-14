import React, { Component, Fragment } from "react";
import { Transition, animated } from "react-spring/renderprops";
import Header from "./components/layout/Header";
// import Form from "./components/layout/Form";
import { Memory, USBMemory, NetMemory } from "./components/elements/Memory";
// import { SignalIcon, USBIcon } from "./components/elements/Icon";
import TextArea from "./components/elements/TextArea";
import Slider from "./components/elements/Slider";
import Button from "./components/elements/Button";
import Tooltips from "./components/elements/Tooltips";

// import MemoryBlock from "./entity/MemoryBlock";

// const memArr = [15];

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showWindowPortal: false,
      showBinaryString: false,
      showAnimationArea: false
      // memState: memArr
    };
    this.toggleAnimationArea = this.toggleAnimationArea.bind(this);
    this.initiliazeBinaryString = this.initiliazeBinaryString.bind(this);
    this.toggleBinaryString = this.toggleBinaryString.bind(this);
    this.toggleWindow = this.toggleWindowPortal.bind(this);
    this.closeWindow = this.closeWindowPortal.bind(this);

    this.memArr = this.constructMem();
    console.log("Memory Array: ", this.memArr);
    // this.memObjArr = this.constructMemObj();
    // console.log("Memory Object Array: ", this.memObjArr);
  }

  // constructMemObj() {
  //   var memObjArr = [];
  //   var memNum = 15;
  //   for (var i = 0; i < memNum; i++) {
  //     var tempMem;
  //     if (i === 13) {
  //       tempMem = new MemoryBlock(i, "USBMemory", false);
  //       memObjArr.push(tempMem);
  //     } else if (i === 14) {
  //       tempMem = new MemoryBlock(i, "NetMemory", false);
  //       memObjArr.push(tempMem);
  //     } else {
  //       tempMem = new MemoryBlock(i, "Memory", i === 0 ? true : false);
  //       memObjArr.push(tempMem);
  //     }
  //   }
  //   // this.setState({
  //   //   memObjArr: memObjArr
  //   // });
  //   return memObjArr;
  // }

  constructMem() {
    var memArr = [];
    var memLen = 15;
    for (var i = 0; i < memLen; i++) {
      if (i === 13) {
        memArr.push(
          <USBMemory
            selected={false}
            id={i}
            content={"USBMemory"}
            contentType={"letters"}
          />
        );
      } else if (i === 14) {
        memArr.push(
          <NetMemory
            selected={false}
            id={i}
            content={"NetMemory"}
            contentType={"letters"}
          />
        );
      } else {
        memArr.push(
          <Memory
            selected={i === 0 ? true : false}
            id={i}
            content={"Memory"}
            contentType={"letters"}
          />
        );
      }
    }
    return memArr;
  }

  updateContentType(id, newMem) {
    console.log("Before Update: ", this.memArr[id].props);
    switch (newMem.type) {
      case "Memory":
        this.memArr[id] = (
          <Memory
            selected={newMem.selected}
            id={id}
            content={newMem.content}
            contentType={newMem.contentType}
          />
        );
        break;
      case "NetMemory":
        this.memArr[id] = (
          <NetMemory
            selected={newMem.selected}
            id={id}
            content={newMem.content}
            contentType={newMem.contentType}
          />
        );
        break;
      case "USBMemory":
        this.memArr[id] = (
          <USBMemory
            selected={newMem.selected}
            id={id}
            content={newMem.content}
            contentType={newMem.contentType}
          />
        );
        break;
      default:
    }
    console.log("Afte update: ", this.memArr[id].props);
  }

  componentDidMount() {
    window.addEventListener("beforeunload", () => {
      this.closeWindowPortal();
    });
  }

  toggleAnimationArea() {
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
              <Button name="Hide/Show" toggle={this.toggleAnimationArea} />
            </div>
          </div>
          <div className="row">
            <div
              className={
                this.state.showAnimationArea ? "col-sm-4" : "col-sm-12"
              }
            >
              <TextArea />
              <div className="row slider-container">
                <Slider />
              </div>
              <div className="row">
                <div
                  className={
                    this.state.showAnimationArea ? "col-sm-4" : "col-sm-2"
                  }
                >
                  <Button
                    name="Run"
                    toggle={this.toggleBinaryString}
                    memArr={this.memArr}
                    updateContentType={this.updateContentType}
                  />
                </div>
                <div
                  className={
                    this.state.showAnimationArea ? "col-sm-4" : "col-sm-2"
                  }
                >
                  <Button name="Stop" toggle={this.initiliazeBinaryString} />
                </div>
                <div
                  className={
                    this.state.showAnimationArea ? "col-sm-4" : "col-sm-2"
                  }
                >
                  <Button name="Help" />
                </div>
              </div>
              {/* <Form method={"GET"} />
              <Form method={"POST"} /> */}
            </div>
            {this.state.showAnimationArea && (
              <div className="col-sm-3" align="center">
                <div className="row">
                  <i className="fas fa-microchip fa-4x float-right" />
                  <Transition
                    native
                    items={this.state.showBinaryString}
                    from={{ opacity: 1, marginLeft: 0 }}
                    enter={{ opacity: 1, marginLeft: 150 }}
                    leave={{ opacity: 0 }}
                  >
                    {show =>
                      show &&
                      (props => (
                        <animated.div style={props}>1011101</animated.div>
                      ))
                    }
                  </Transition>
                </div>
              </div>
            )}
            {this.state.showAnimationArea && (
              <div className="col-sm-5" id="memory">
                <div className="row">
                  <div className="col">{this.memArr[0]}</div>
                  <div className="col">{this.memArr[1]}</div>
                  <div className="col">{this.memArr[2]}</div>
                </div>
                <div className="row">
                  <div className="col">{this.memArr[3]}</div>
                  <div className="col">{this.memArr[4]}</div>
                  <div className="col">{this.memArr[5]}</div>
                </div>
                <div className="row">
                  <div className="col">{this.memArr[6]}</div>
                  <div className="col">{this.memArr[7]}</div>
                  <div className="col">{this.memArr[8]}</div>
                </div>
                <div className="row">
                  <div className="col">{this.memArr[9]}</div>
                  <div className="col">{this.memArr[10]}</div>
                  <div className="col">{this.memArr[11]}</div>
                </div>
                <div className="row">
                  <div className="col">{this.memArr[12]}</div>
                  <div className="col">{this.memArr[13]}</div>
                  <div className="col">{this.memArr[14]}</div>
                </div>
              </div>
            )}
          </div>
        </div>
        <Tooltips />,{" "}
      </Fragment>
    );
  }
}

export default App;
