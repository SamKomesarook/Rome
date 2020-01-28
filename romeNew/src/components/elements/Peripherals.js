import React, {Component, useContext} from "react";
import {DisplayContext} from '../../state/DisplayState';
import firss from '../../icons/firss.svg';
import fiusb from '../../icons/fiusb.svg'

function NetToggle(event) {
    let elem = document.getElementById("firss");
    var interval = setInterval(() => elem.hidden = !elem.hidden, Math.floor((Math.random() * 10)));
    var timerId = setTimeout(function() {
        clearInterval(interval);
        setInterval(elem.hidden = false, 1000)
    }, 1000);
}

const NetPeripheral = () => {
    return (<img className="usbPeriph" src={firss} width="100" height="30" id="firss"/>)
}

function USBToggle(event) {
    let elem = document.getElementById("fiusb");
    var interval = setInterval(() => elem.hidden = !elem.hidden, Math.floor((Math.random() * 10)));
    var timerId = setTimeout(function() {
        clearInterval(interval);
        setInterval(elem.hidden = false, 1000)
    }, 1000);
}

const USBPeripheral = () => {
    return (<img className="netPeriph" src={fiusb} width="100" height="30" id="fiusb"/>)
}

export {
    NetPeripheral,
    USBPeripheral,
    NetToggle,
    USBToggle
}
