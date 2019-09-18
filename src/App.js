import React, { Component, Fragment } from "react";
import { Transition, animated } from "react-spring/renderprops";
import ReactTooltip from "react-tooltip";
import Header from "./components/layout/Header";
// import Form from "./components/layout/Form";
import { Memory, USBMemory, NetMemory } from "./components/elements/Memory";
// import { SignalIcon, USBIcon } from "./components/elements/Icon";
import TextArea from "./components/elements/TextArea";
import Slider from "./components/elements/Slider";
import Button from "./components/elements/Button";
import Tooltips from "./components/elements/Tooltips";
import InputOutputArea from "./components/elements/InputOutputArea";

// import MemoryBlock from "./entity/MemoryBlock";

// import {
//   memObjToSymbol,
//   updateMem,
//   updateContentType,
//   moveMem
// } from "./MemFunc";

const memArr = [15];

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showWindowPortal: false,
      showBinaryString: false,
      memState: memArr,
      showAnimationArea: true,
      showTextArea: true,
      showIOWindow: true
    };
    this.toggleIOWindow = this.toggleIOWindow.bind(this);
    this.toggleTextArea = this.toggleTextArea.bind(this);
    this.toggleAnimationArea = this.toggleAnimationArea.bind(this);
    this.initiliazeBinaryString = this.initiliazeBinaryString.bind(this);
    this.toggleBinaryString = this.toggleBinaryString.bind(this);
    this.toggleWindow = this.toggleWindowPortal.bind(this);
    this.closeWindow = this.closeWindowPortal.bind(this);

    // bind function in order to reach callback
    this.moveMem = this.moveMem.bind(this);
    this.updateContentType = this.updateContentType.bind(this);
    this.writeContent = this.writeContent.bind(this);
    this.freeMem = this.freeMem.bind(this);

    this.memArr = this.constructMem();
    this.ref = [];
  }

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

  // map memory block object to react jsx
  memObjToSymbol(mem) {
    var type = mem.type;
    switch (type) {
      case "Memory":
        return (
          <Memory
            selected={mem.selected}
            id={mem.id}
            content={mem.content}
            contentType={mem.contentType}
          />
        );
      case "NetMemory":
        return (
          <NetMemory
            selected={mem.selected}
            id={mem.id}
            content={mem.content}
            contentType={mem.contentType}
          />
        );
      case "USBMemory":
        return (
          <USBMemory
            selected={mem.selected}
            id={mem.id}
            content={mem.content}
            contentType={mem.contentType}
          />
        );
      default:
        break;
    }
  }

  updateMem(id, mem) {
    this.memArr[id] = mem;
    this.setState({
      memState: this.memArr
    });
  }

  updateContentType(id, memObj) {
    var newMem = this.memObjToSymbol(memObj);
    this.updateMem(id, newMem);
  }

  moveMem(oldMemObj, newMemObj, direction) {
    var currId = oldMemObj.id;
    if (
      (currId === 0 && direction === "left") ||
      (currId === 14 && direction === "right")
    ) {
      alert("Invalide Move command!");
    } else {
      var oldMem = this.memObjToSymbol(oldMemObj);
      var newMem = this.memObjToSymbol(newMemObj);
      this.updateMem(oldMemObj.getId(), oldMem);
      this.updateMem(newMemObj.getId(), newMem);
    }
  }

  writeContent(memObj) {
    var id = memObj.id;
    var newMem = this.memObjToSymbol(memObj);
    this.updateMem(id, newMem);
  }

  freeMem(memObj) {
    var id = memObj.id;
    var newMem = this.memObjToSymbol(memObj);
    this.updateMem(id, newMem);
  }

  // set state before render
  componentWillMount() {
    this.setState({
      memState: this.memArr
    });
  }

  componentDidMount() {
    window.addEventListener("beforeunload", () => {
      this.closeWindowPortal();
    });
  }

  toggleIOWindow() {
    this.setState(state => ({
      ...state,
      showIOWindow: !state.showIOWindow
    }));
  }

  toggleAnimationArea() {
    this.setState(state => ({
      ...state,
      showAnimationArea: !state.showAnimationArea
    }));
  }

  toggleTextArea() {
    this.setState(state => ({
      ...state,
      showTextArea: !state.showTextArea
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

  toggleRef = () => {
    console.log(this.ref);
    for (var i = 0; i < this.ref.length; i++) {
      // console.log(this.testRef[i]);
      ReactTooltip.show(this.ref[i]);
    }

    setTimeout(() => ReactTooltip.hide(), 1000);
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-sm-2"
              data-tip
              data-for="ComponentArea"
              ref={el => this.ref.push(el)}
            >
              <div className="row">
                <div className="col">
                  <Button name="Coding Area" toggle={this.toggleTextArea} />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Button
                    name="Animation Area"
                    toggle={this.toggleAnimationArea}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Button name="IO Window" toggle={this.toggleIOWindow} />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                {this.state.showTextArea ? (
                  <div
                    className={
                      this.state.showAnimationArea ? "col-sm-4" : "col-sm-12"
                    }
                  >
                    <TextArea compRef={el => this.ref.push(el)} />
                    <div className="row slider-container">
                      <Slider compRef={el => this.ref.push(el)} />
                    </div>
                    <div className="row">
                      <div
                        className={
                          this.state.showAnimationArea ? "col-sm-3" : "col-sm-1"
                        }
                      >
                        <Button
                          name="Run"
                          toggle={this.toggleBinaryString}
                          memArr={this.memArr}
                          compRef={el => this.ref.push(el)}
                          updateContentType={this.updateContentType}
                          moveMem={this.moveMem}
                          writeContent={this.writeContent}
                          freeMem={this.freeMem}
                        />
                      </div>
                      <div
                        className={
                          this.state.showAnimationArea ? "col-sm-3" : "col-sm-1"
                        }
                      >
                        <Button
                          name="Stop"
                          toggle={this.initiliazeBinaryString}
                          compRef={el => this.ref.push(el)}
                        />
                      </div>

                      <div
                        className={
                          this.state.showAnimationArea ? "col-sm-3" : "col-sm-1"
                        }
                      >
                        <Button name="Info" toggle={this.toggleRef} />
                      </div>

                      <div
                        className={
                          this.state.showAnimationArea ? "col-sm-3" : "col-sm-1"
                        }
                      >
                        <Button name="Help" />
                      </div>
                    </div>
                    {/* <Form method={"GET"} />
                  <Form method={"POST"} /> */}
                  </div>
                ) : null}
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
                  <div
                    className="col-sm-5"
                    id="memory"
                    data-tip
                    data-for="AnimationArea"
                    ref={el => this.ref.push(el)}
                  >
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
          </div>
        </div>
        {this.state.showIOWindow && (
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <InputOutputArea compRef={el => this.ref.push(el)} />
              </div>
            </div>
          </div>
        )}
        <Tooltips />{" "}
      </Fragment>
    );
  }
}

export default App;
