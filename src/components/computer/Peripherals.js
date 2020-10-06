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
  const isRunningHidden = ui.ctxIsDebugActive ? 'hidden' : '';

  const fill = display.running ? '#9583FF' : 'black';
  return (
    <div className={isRunningHidden}>
      <svg id="chip" className={`periph-icon ${isElementHidden}`} alt="chip symbol" fill={fill} enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="m370 128h-228c-7.72 0-14 6.28-14 14v228c0 7.72 6.28 14 14 14h228c7.72 0 14-6.28 14-14v-228c0-7.72-6.28-14-14-14zm-201.98 232c-8.836 0-16.005-7.164-16.005-16s7.158-16 15.995-16h.01c8.836 0 16 7.164 16 16s-7.164 16-16 16zm0-176c-8.836 0-16.005-7.164-16.005-16s7.158-16 15.995-16h.01c8.836 0 16 7.164 16 16s-7.164 16-16 16zm176 176c-8.836 0-16.005-7.164-16.005-16s7.159-16 15.995-16h.01c8.837 0 16 7.164 16 16s-7.164 16-16 16zm0-176c-8.836 0-16.005-7.164-16.005-16s7.159-16 15.995-16h.01c8.837 0 16 7.164 16 16s-7.164 16-16 16z" />
          <path d="m496 208c8.837 0 16-7.164 16-16s-7.163-16-16-16h-24v-32h24c8.837 0 16-7.164 16-16s-7.163-16-16-16h-24v-26c0-25.364-20.636-46-46-46h-26v-24c0-8.836-7.163-16-16-16s-16 7.164-16 16v24h-32v-24c0-8.836-7.163-16-16-16s-16 7.164-16 16v24h-32v-24c0-8.836-7.163-16-16-16-8.836 0-16 7.164-16 16v24h-32v-24c0-8.836-7.164-16-16-16s-16 7.164-16 16v24h-32v-24c0-8.836-7.164-16-16-16s-16 7.164-16 16v24h-26c-25.364 0-46 20.636-46 46v26h-24c-8.836 0-16 7.164-16 16s7.164 16 16 16h24v32h-24c-8.836 0-16 7.164-16 16s7.164 16 16 16h24v32h-24c-8.836 0-16 7.164-16 16s7.164 16 16 16h24v32h-24c-8.836 0-16 7.164-16 16s7.164 16 16 16h24v32h-24c-8.836 0-16 7.164-16 16s7.164 16 16 16h24v26c0 25.364 20.636 46 46 46h26v24c0 8.836 7.164 16 16 16s16-7.164 16-16v-24h32v24c0 8.836 7.164 16 16 16s16-7.164 16-16v-24h32v24c0 8.836 7.164 16 16 16 8.837 0 16-7.164 16-16v-24h32v24c0 8.836 7.163 16 16 16s16-7.164 16-16v-24h32v24c0 8.836 7.163 16 16 16s16-7.164 16-16v-24h26c25.364 0 46-20.636 46-46v-26h24c8.837 0 16-7.164 16-16s-7.163-16-16-16h-24v-32h24c8.837 0 16-7.164 16-16s-7.163-16-16-16h-24v-32h24c8.837 0 16-7.164 16-16s-7.163-16-16-16h-24v-32zm-80 162c0 25.364-20.636 46-46 46h-228c-25.364 0-46-20.636-46-46v-228c0-25.364 20.636-46 46-46h228c25.364 0 46 20.636 46 46z" />
        </g>
      </svg>
    </div>
  );
};

const Debuger = () => {
  const [display, setDisplay] = useContext(DisplayContext);
  const [ui, setUi] = useContext(UiContext);
  const isElementHidden = ui.ctxIsAppRunViewActive ? 'hidden' : '';

  const fill = display.debuging ? '#9583FF' : 'black';
  return (
    <svg id="debug" className={`periph-icon ${isElementHidden}`} fill={fill} enableBackground="new 0 0 512 512" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M20,8H17.19C16.74,7.2 16.12,6.5 15.37,6L17,4.41L15.59,3L13.42,5.17C12.96,5.06 12.5,5 12,5C11.5,5 11.05,5.06 10.59,5.17L8.41,3L7,4.41L8.62,6C7.87,6.5 7.26,7.21 6.81,8H4V10H6.09C6.03,10.33 6,10.66 6,11V12H4V14H6V15C6,15.34 6.03,15.67 6.09,16H4V18H6.81C8.47,20.87 12.14,21.84 15,20.18C15.91,19.66 16.67,18.9 17.19,18H20V16H17.91C17.97,15.67 18,15.34 18,15V14H20V12H18V11C18,10.66 17.97,10.33 17.91,10H20V8M16,15A4,4 0 0,1 12,19A4,4 0 0,1 8,15V11A4,4 0 0,1 12,7A4,4 0 0,1 16,11V15M14,10V12H10V10H14M10,14H14V16H10V14Z" />
      </g>
    </svg>
  );
};

export {
  NetPeripheral,
  USBPeripheral,
  NetToggle,
  USBToggle,
  Processor,
  Debuger,
};
