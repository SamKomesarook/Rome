import React, { Component } from "react";

export class Memory extends Component {
  // state = {
  //   content: this.props.content,
  // }

  render() {
    const memoryStyle = {
      height:"60px",
      maxHeight:"60px"
    }

    if (this.props.selected) {
      return (
        <div
          className="shadow-lg p-3 mb-5 bg-white rounded"
          id={this.props.id}
          data-tip
          data-for="MemoryTips"
          style={memoryStyle}
        >
          {this.props.content}
          
        </div>
      );
    } else {
      return (
        <div
          className={"shadow-none p-3 mb-5 rounded " + ((this.props.contentType == 'letters')? "bg-lightGray" : "bg-lightBlue")}
          id={this.props.id}
          data-tip
          data-for="MemoryTips"
          style={memoryStyle}
        >
          {this.props.content}
        </div>
      );
    }
  }
}

export class NetMemory extends Component {
  // state = {
  //   content: this.props.content
  // }
  render() {
    const memoryStyle = {
      height:"60px",
      maxHeight:"60px"
    }

    if (this.props.selected) {
      return (
        <div
          className="shadow-lg p-3 mb-5 bg-brown rounded border border-info"
          id={this.props.id}
          data-tip
          data-for="NetMemoryTips"
          style={memoryStyle}
        >
          {this.props.content}
        </div>
      );
    } else {
      return (
        <div
          className={"shadow-none p-3 mb-5 rounded border border-info " + ((this.props.contentType == 'letters')? "bg-lightGray" : "bg-lightBlue")}
          id={this.props.id}
          data-tip
          data-for="NetMemoryTips"
          style={memoryStyle}
        >
          {this.props.content}
          
        </div>
      );
    }
  }
}

export class USBMemory extends Component {
  // state = {
  //   content: this.props.content
  // }
  
  render() {
    const memoryStyle = {
      height:"60px",
      maxHeight:"60px"
    }

    if (this.props.selected) {
      return (
        <div
          className="shadow-lg p-3 mb-5 bg-blue rounded border border-dark"
          id={this.props.id}
          data-tip
          data-for="USBMemoryTips"
          style={memoryStyle}
        >
          {this.props.content}
        </div>
      );
    } else {
      return (
        <div
          className={"shadow-none p-3 mb-5 rounded border border-dark " + ((this.props.contentType == 'letters')? "bg-lightGray" : "bg-lightBlue")}
          id={this.props.id}
          data-tip
          data-for="USBMemoryTips"
          style={memoryStyle}
        >
          {this.props.content}
        </div>
      );
    }
  }
}

export default { Memory, NetMemory, USBMemory };
