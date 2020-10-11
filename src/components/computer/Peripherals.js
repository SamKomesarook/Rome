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
  const isAppRunningClass = display.running ? 'app-active' : '';

  return (
    <div>
      <svg className={`${isElementHidden} ${display.isDebugActive ? 'hidden' : ''} ${isAppRunningClass} app-status`} viewBox="0 0 24 24">
        <path fill="currentColor" d="M17,17H7V7H17M21,11V9H19V7C19,5.89 18.1,5 17,5H15V3H13V5H11V3H9V5H7C5.89,5 5,5.89 5,7V9H3V11H5V13H3V15H5V17A2,2 0 0,0 7,19H9V21H11V19H13V21H15V19H17A2,2 0 0,0 19,17V15H21V13H19V11M13,13H11V11H13M15,9H9V15H15V9Z" />
      </svg>
      <svg className={`${isElementHidden} ${!display.isDebugActive ? 'hidden' : ''} ${isAppRunningClass} app-status`} viewBox="0 0 24 24">
        <path fill="currentColor" d="M20,8H17.19C16.74,7.2 16.12,6.5 15.37,6L17,4.41L15.59,3L13.42,5.17C12.96,5.06 12.5,5 12,5C11.5,5 11.05,5.06 10.59,5.17L8.41,3L7,4.41L8.62,6C7.87,6.5 7.26,7.21 6.81,8H4V10H6.09C6.03,10.33 6,10.66 6,11V12H4V14H6V15C6,15.34 6.03,15.67 6.09,16H4V18H6.81C8.47,20.87 12.14,21.84 15,20.18C15.91,19.66 16.67,18.9 17.19,18H20V16H17.91C17.97,15.67 18,15.34 18,15V14H20V12H18V11C18,10.66 17.97,10.33 17.91,10H20V8M16,15A4,4 0 0,1 12,19A4,4 0 0,1 8,15V11A4,4 0 0,1 12,7A4,4 0 0,1 16,11V15M14,10V12H10V10H14M10,14H14V16H10V14Z" />
      </svg>
    </div>
  );
};

export {
  NetPeripheral,
  USBPeripheral,
  NetToggle,
  USBToggle,
  Processor,
};
