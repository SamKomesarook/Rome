import React, { Component, Fragment } from "react";
import { Transition, animated } from "react-spring/renderprops";
import ReactTooltip from 'react-tooltip'
import Header from "./components/layout/Header";
import { Memory, USBMemory, NetMemory } from "./components/elements/Memory";
import TextArea from "./components/elements/TextArea";
import Slider from "./components/elements/Slider";
import Button from "./components/elements/Button";
import Tooltips from "./components/elements/Tooltips";
import InputOutputArea from "./components/elements/InputOutputArea";
import './components/styles/hover-min.css';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showWindowPortal: false,
      showBinaryString: false,
      showAnimationArea: true,
      showTextArea:true,
      showIOWindow:true,
      loopAnimation:false
    };
    this.toggleIOWindow = this.toggleIOWindow.bind(this);
    this.toggleTextArea = this.toggleTextArea.bind(this);
    this.toggleAnimationArea = this.toggleAnimationArea.bind(this);
    this.initiliazeBinaryString = this.initiliazeBinaryString.bind(this);
    this.toggleBinaryString = this.toggleBinaryString.bind(this);
    this.toggleWindow = this.toggleWindowPortal.bind(this);
    this.closeWindow = this.closeWindowPortal.bind(this);
    this.loopAnimation = this.loopAnimation.bind(this);
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
  
  /** 
   * Function for print the errMessage to dashboard area in red color 
   * @param {string} errMessage - The message that will be printed in red color on dashboard
   */
  errorAnimation(errMessage){
     var errMessageDiv = "<span style='color:red'>"+errMessage+"</span><br/>";
     var oldMessage = document.getElementById("outputArea").innerHTML;
     oldMessage += errMessageDiv;
     document.getElementById("outputArea").innerHTML=oldMessage;
  }
  
  /**
  *Function for print the message received to dashboard area 
  *@param {string} argument - The message that will be printed on dashboard
  */
  printAnimation(argument){
    var argumentDiv = "<span>"+argument+"</span><br/>";
    var oldMessage = document.getElementById("outputArea").innerHTML;
    oldMessage += argumentDiv;
    document.getElementById("outputArea").innerHTML=oldMessage;
  }

  componentDidMount() {
    window.addEventListener("beforeunload", () => {
      this.closeWindowPortal();
    });
  }
  
  /**
  *function used to show/hide the IO window
  */
  toggleIOWindow() {
    this.setState(state => ({
      ...state,
      showIOWindow: !state.showIOWindow
    }));
  }
  
  /*function used to show/hide the animation area and the memory board*/
  toggleAnimationArea() {
    this.setState(state => ({
      ...state,
      showAnimationArea: !state.showAnimationArea
    }));
  }
  
  /*function used to show/hide the coding area*/
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
  
  /*function used to display the animated binary string*/
  toggleBinaryString() {
    this.setState(state => ({
      ...state,
      showBinaryString: true
    }));
  }
  
 /*function used to hide the animated binary string*/
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
    for(var i=0; i < this.ref.length; i++) {
      // console.log(this.testRef[i]);
      ReactTooltip.show(this.ref[i]);
    }

    setTimeout(() => ReactTooltip.hide(), 1000);
  }

  /* Function for Loop Animation */
  loopAnimation() {
    this.setState(state => ({
      ...state,
      loopAnimation: !state.loopAnimation
    }));
  }

  render() {
    return (
      <Fragment>
        <Header />
        
        <div className="container-fluid">
          <div className = "row">
            <div className="col-sm-2" data-tip data-for="ComponentArea" ref={ el => this.ref.push(el)}>

              <span className="btnToggle">
                <button className="btn btn-dark btn-circle"><i className="far fa-caret-square-right"></i></button>
                <div className="btn-group-vertical btnGroup" role="group">
                  <Button name="Coding Area" toggle={this.toggleTextArea}/>
                  <Button name="Animation Area" toggle={this.toggleAnimationArea}/>
                  <Button name="IO Window" toggle={this.toggleIOWindow}/>
                </div>
              </span>
            </div>
            <div className="col">
              <div className="row">
                {this.state.showTextArea ? 
                <div
                  className={
                    this.state.showAnimationArea ? "col-sm-4" : "col-sm-6"
                  }
                >
                  <TextArea compRef={ el => this.ref.push(el)}/>
                  <div className="row slider-container">
                    <Slider compRef={ el => this.ref.push(el)}/>
                  </div>
                  <div className="row">
                    <div
                      className={
                        this.state.showAnimationArea ? "col-sm-3" : "col-sm-2"
                      }
                    >
                      <Button
                        name="Run"
                        toggle={this.toggleBinaryString}
                        memArr={this.memArr}
                        compRef={ el => this.ref.push(el)}
                        updateContentType={this.updateContentType}
                      />
                    </div>
                    <div
                      className={
                        this.state.showAnimationArea ? "col-sm-3" : "col-sm-2"
                      }
                    >
                      <Button name="Stop" toggle={this.initiliazeBinaryString} compRef={ el => this.ref.push(el)}/>
                    </div>
                    
                    <div
                      className={
                        this.state.showAnimationArea ? "col-sm-3" : "col-sm-2"
                      }
                    >
                      <Button name="Info" toggle={this.toggleRef}/>
                    </div>

                    <div
                      className={
                        this.state.showAnimationArea ? "col-sm-3" : "col-sm-2"
                      }
                    >
                      <Button name="Help" />
                    </div>
                  </div>
                </div>
                : null
                }
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
                  <div className={this.state.showAnimationArea ?( "col-sm-5 " + ((this.state.loopAnimation)? "memory-border" : "")):"col-sm-5"} id="memory" data-tip data-for="AnimationArea" ref={ el => this.ref.push(el)}>
                  {this.state.showAnimationArea && (
                    <div className="row-sm-6">
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
                    {this.state.showIOWindow &&(
                    <div className="row">	
                      <div className="col-sm-12">	
                        <InputOutputArea 
                          compRef={ el => this.ref.push(el)}
                        />	
                      </div>	
                    </div>
                    )}	
                  </div>
                
              </div>
            </div>
          </div>
        </div>

        <Tooltips />{" "}

      </Fragment>
    );
  }
}

export default App;
