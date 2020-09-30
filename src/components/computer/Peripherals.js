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

  const fill = display.running ? '#9583FF' : 'black';
  return (
    <svg id="chip" className={`periph-icon ${isElementHidden}`} alt="chip symbol" fill={fill} enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="m370 128h-228c-7.72 0-14 6.28-14 14v228c0 7.72 6.28 14 14 14h228c7.72 0 14-6.28 14-14v-228c0-7.72-6.28-14-14-14zm-201.98 232c-8.836 0-16.005-7.164-16.005-16s7.158-16 15.995-16h.01c8.836 0 16 7.164 16 16s-7.164 16-16 16zm0-176c-8.836 0-16.005-7.164-16.005-16s7.158-16 15.995-16h.01c8.836 0 16 7.164 16 16s-7.164 16-16 16zm176 176c-8.836 0-16.005-7.164-16.005-16s7.159-16 15.995-16h.01c8.837 0 16 7.164 16 16s-7.164 16-16 16zm0-176c-8.836 0-16.005-7.164-16.005-16s7.159-16 15.995-16h.01c8.837 0 16 7.164 16 16s-7.164 16-16 16z" />
        <path d="m496 208c8.837 0 16-7.164 16-16s-7.163-16-16-16h-24v-32h24c8.837 0 16-7.164 16-16s-7.163-16-16-16h-24v-26c0-25.364-20.636-46-46-46h-26v-24c0-8.836-7.163-16-16-16s-16 7.164-16 16v24h-32v-24c0-8.836-7.163-16-16-16s-16 7.164-16 16v24h-32v-24c0-8.836-7.163-16-16-16-8.836 0-16 7.164-16 16v24h-32v-24c0-8.836-7.164-16-16-16s-16 7.164-16 16v24h-32v-24c0-8.836-7.164-16-16-16s-16 7.164-16 16v24h-26c-25.364 0-46 20.636-46 46v26h-24c-8.836 0-16 7.164-16 16s7.164 16 16 16h24v32h-24c-8.836 0-16 7.164-16 16s7.164 16 16 16h24v32h-24c-8.836 0-16 7.164-16 16s7.164 16 16 16h24v32h-24c-8.836 0-16 7.164-16 16s7.164 16 16 16h24v32h-24c-8.836 0-16 7.164-16 16s7.164 16 16 16h24v26c0 25.364 20.636 46 46 46h26v24c0 8.836 7.164 16 16 16s16-7.164 16-16v-24h32v24c0 8.836 7.164 16 16 16s16-7.164 16-16v-24h32v24c0 8.836 7.164 16 16 16 8.837 0 16-7.164 16-16v-24h32v24c0 8.836 7.163 16 16 16s16-7.164 16-16v-24h32v24c0 8.836 7.163 16 16 16s16-7.164 16-16v-24h26c25.364 0 46-20.636 46-46v-26h24c8.837 0 16-7.164 16-16s-7.163-16-16-16h-24v-32h24c8.837 0 16-7.164 16-16s-7.163-16-16-16h-24v-32h24c8.837 0 16-7.164 16-16s-7.163-16-16-16h-24v-32zm-80 162c0 25.364-20.636 46-46 46h-228c-25.364 0-46-20.636-46-46v-228c0-25.364 20.636-46 46-46h228c25.364 0 46 20.636 46 46z" />
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
};