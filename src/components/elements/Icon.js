import React, { Component } from "react";

export class SignalIcon extends Component {
    render() {
        return (
          <i className="fas fa-wifi"></i>
        );
    }
}

export class USBIcon extends Component {
    render() {
        return (
          <i className="fab fa-usb"></i>
        );
    }
}

export default {SignalIcon, USBIcon};
