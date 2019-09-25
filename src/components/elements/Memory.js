import React, { Component } from "react";
import '../styles/styles.css';

export class Memory extends Component {

  render() {

    if (this.props.selected) {
      return (
        <div
          className="shadow-lg mb-5 bg-white rounded memory"
          id={this.props.id}
          data-tip
          data-for="MemoryTips"
        >
          {this.props.content}
          
        </div>
      );
    } else {
      return (
        <div
          className={"memory shadow-none mb-5 rounded " + ((this.props.contentType == 'letters')? "bg-lightGray" : "bg-lightBlue")}
          id={this.props.id}
          data-tip
          data-for="MemoryTips"
        >
          {this.props.content}
        </div>
      );
    }
  }
}

export class NetMemory extends Component {
  render() {
    if (this.props.selected) {
      return (
        <div
          className="memory shadow-lg mb-5 bg-brown rounded border border-info"
          id={this.props.id}
          data-tip
          data-for="NetMemoryTips"
        >
          {this.props.content}
        </div>
      );
    } else {
      return (
        <div
          className={"memory shadow-none mb-5 rounded border border-info " + ((this.props.contentType == 'letters')? "bg-lightGray" : "bg-lightBlue")}
          id={this.props.id}
          data-tip
          data-for="NetMemoryTips"
        >
          {this.props.content}
          
        </div>
      );
    }
  }
}

export class USBMemory extends Component {
  render() {


    if (this.props.selected) {
      return (
        <div
          className="memory shadow-lg mb-5 bg-blue rounded border border-dark"
          id={this.props.id}
          data-tip
          data-for="USBMemoryTips"
        >
          {this.props.content}
        </div>
      );
    } else {
      return (
        <div
          className={"memory shadow-none mb-5 rounded border border-dark " + ((this.props.contentType == 'letters')? "bg-lightGray" : "bg-lightBlue")}
          id={this.props.id}
          data-tip
          data-for="USBMemoryTips"
        >
          {this.props.content}
        </div>
      );
    }
  }
}

export default { Memory, NetMemory, USBMemory };
