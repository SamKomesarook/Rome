import React, { useContext } from 'react';
import firss from '../../icons/firss.svg';
import fiusb from '../../icons/fiusb.svg';
import chipActivated from '../../icons/chipActivated.svg';
import chipDormant from '../../icons/chipDormant.svg';
import { DisplayContext } from '../../state/DisplayState';

const NetToggle = (event) => {
  const elem = document.getElementById('firss');
  const interval = setInterval(() => elem.hidden = !elem.hidden, Math.floor((Math.random() * 10)));
  setTimeout(() => {
    clearInterval(interval);
    setInterval(elem.hidden = false, 1000);
  }, 1000);
};

const NetPeripheral = () => (<img className="periph-icon" src={firss} id="firss" alt="net symbol" />);

const USBToggle = (event) => {
  const elem = document.getElementById('fiusb');
  const interval = setInterval(() => elem.hidden = !elem.hidden, Math.floor((Math.random() * 10)));
  setTimeout(() => {
    clearInterval(interval);
    setInterval(elem.hidden = false, 1000);
  }, 1000);
};

const USBPeripheral = () => (<img className="periph-icon" src={fiusb} id="fiusb" alt="usb symbol" />);

const Processor = () => {
    const [display, setDisplay] = useContext(DisplayContext);

    return <img className="periph-icon" src={display.running ? chipActivated : chipDormant} id="chip" alt="chip symbol" />

};


export {
  NetPeripheral,
  USBPeripheral,
  NetToggle,
  USBToggle,
  Processor,
};
