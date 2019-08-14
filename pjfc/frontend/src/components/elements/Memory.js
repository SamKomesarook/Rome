import React, { Component } from "react";

export class Memory extends Component {
    render() {
        if (this.props.selected){
            return (
              <div className="shadow-lg p-3 mb-5 bg-white rounded">Larger shadow</div>
            );
        }else{
            return (
              <div className="shadow-none p-3 mb-5 bg-white rounded">Smaller shadow</div>
            );
        }
    }
}

export class NetMemory extends Component{
    render() {
        if (this.props.selected){
            return (
              <div className="shadow-lg p-3 mb-5 bg-brown rounded">Larger shadow</div>
            );
        }else{
            return (
              <div className="shadow-none p-3 mb-5 bg-brown rounded">Smaller shadow</div>
            );
        }
    }
}

export class USBMemory extends Component{
    render() {
        if (this.props.selected){
            return (
              <div className="shadow-lg p-3 mb-5 bg-blue rounded">Larger shadow</div>
            );
        }else{
            return (
              <div className="shadow-none p-3 mb-5 bg-blue rounded">Smaller shadow</div>
            );
        }
    }
}

export default {Memory, NetMemory, USBMemory};
