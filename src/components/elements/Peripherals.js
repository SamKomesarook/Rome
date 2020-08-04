import React from 'react';
import firss from '../../icons/firss.svg';
import fiusb from '../../icons/fiusb.svg';

const NetToggle = (event) => {
  const elem = document.getElementById('firss');
  const interval = setInterval(() => elem.hidden = !elem.hidden, Math.floor((Math.random() * 10)));
  setTimeout(() => {
    clearInterval(interval);
    setInterval(elem.hidden = false, 1000);
  }, 1000);
};

const NetPeripheral = () => (<img className="usbPeriph" src={firss} width="100" height="30" id="firss" alt="usb symbol" />);

const USBToggle = (event) => {
  const elem = document.getElementById('fiusb');
  const interval = setInterval(() => elem.hidden = !elem.hidden, Math.floor((Math.random() * 10)));
  setTimeout(() => {
    clearInterval(interval);
    setInterval(elem.hidden = false, 1000);
  }, 1000);
};

const USBPeripheral = () => (<img className="netPeriph" src={fiusb} width="100" height="30" id="fiusb" alt="usb symbol" />);

export {
  NetPeripheral,
  USBPeripheral,
  NetToggle,
  USBToggle,
};
