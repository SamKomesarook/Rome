import React, { Component } from "react";

export class Memory extends Component {
    render() {
        if (this.props.selected){
            return (
              <div className="shadow-lg p-3 mb-5 bg-white rounded" data-tip data-for="MemoryTips">Larger shadow</div>
            );
        }else{
            return (
              <div className="shadow-none p-3 mb-5 bg-white rounded" data-tip data-for="MemoryTips">Smaller shadow</div>
            );
        }
    }
}

export class NetMemory extends Component{
    render() {
        if (this.props.selected){
            return (
              <div className="shadow-lg p-3 mb-5 bg-brown rounded border border-info" data-tip data-for="NetMemoryTips">Larger shadow</div>
            );
        }else{
            return (
              <div className="shadow-none p-3 mb-5 bg-brown rounded border border-info" data-tip data-for="NetMemoryTips">Smaller shadow</div>
            );
        }
    }
}

export class USBMemory extends Component{
    render() {
        if (this.props.selected){
            return (
              <div className="shadow-lg p-3 mb-5 bg-blue rounded border border-dark" data-tip data-for="USBMemoryTips">Larger shadow</div>
            );
        }else{
            return (
              <div className="shadow-none p-3 mb-5 bg-blue rounded border border-dark" data-tip data-for="USBMemoryTips">Smaller shadow</div>
            );
        }
    }
}

export default {Memory, NetMemory, USBMemory};
