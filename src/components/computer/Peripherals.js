import React, { useContext } from 'react';
import firss from '../../icons/firss.svg';
import fiusb from '../../icons/fiusb.svg';
import { DisplayContext } from '../../state/DisplayState';
import { UiContext } from '../../state/UiContext';

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
  const [ui, setUi] = useContext(UiContext);
  const isElementHidden = ui.ctxIsAppRunViewActive ? 'hidden' : '';
  const isAppRunningClass = display.running ? 'processor-active' : '';

  return (
    <svg className={`${isElementHidden} ${isAppRunningClass} processor `} viewBox="0 0 24 24">
      <path fill="currentColor" d="M17,17H7V7H17M21,11V9H19V7C19,5.89 18.1,5 17,5H15V3H13V5H11V3H9V5H7C5.89,5 5,5.89 5,7V9H3V11H5V13H3V15H5V17A2,2 0 0,0 7,19H9V21H11V19H13V21H15V19H17A2,2 0 0,0 19,17V15H21V13H19V11M13,13H11V11H13M15,9H9V15H15V9Z" />
    </svg>
  );
};

export {
  NetPeripheral,
  USBPeripheral,
  NetToggle,
  USBToggle,
  Processor,
};
