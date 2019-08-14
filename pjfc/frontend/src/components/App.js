import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import Header from "./layout/Header";
import {Memory, USBMemory, NetMemory} from "./elements/Memory";

export class App extends Component {
  render() {

    return (
      <Fragment>
      <div>
        <Memory selected={true}/>
        <Memory selected={false}/>
        <Memory selected={false}/>
      </div>
      <div>
        <Memory selected={false}/>
        <Memory selected={false}/>
        <Memory selected={false}/>
      </div>
      <div>
        <Memory selected={false}/>
        <Memory selected={false}/>
        <Memory selected={false}/>
      </div>
      <div>
        <Memory selected={false}/>
        <Memory selected={false}/>
        <Memory selected={false}/>
      </div>
      <div>
        <Memory selected={false}/>
        <USBMemory selected={false}/>
        <NetMemory selected={false}/>
      </div>
      </Fragment>
    );
  }
}

/*
<Memory selected={true}/>
<Memory selected={false}/>
<Memory selected={false}/>
{"\n"}
<Memory selected={false}/>
<Memory selected={false}/>
<Memory selected={false}/>
{"\n"}
<Memory selected={false}/>
<Memory selected={false}/>
<Memory selected={false}/>
{"\n"}
<Memory selected={false}/>
<NetMemory selected={false}/>
<USBMemory selected={false}/>
*/

ReactDOM.render(<App />, document.getElementById("app"));
