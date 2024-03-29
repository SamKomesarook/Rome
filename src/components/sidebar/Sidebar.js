import React, { useContext, useState } from 'react';
import DistanceLearning from './DistanceLearning';
import Help from './Help';
import About from './About';
import Challenge from './Challenge';
import SidebarButton from './SidebarButton';
import Feedback from './Feedback';
import HtmlElementUtil from '../../utils/HtmlElementUtil';
import { UiContext } from '../../state/UiContext';
import './sidebar.css';

const Sidebar = () => {
  const [activeSidebarItem, setActiveSidebarItem] = useState('');
  const [ui, setUi] = useContext(UiContext);
  const DISTANCE_LEARNING = 'Distance Learning';
  const CHALLENGE = 'Challenge';
  const HELP = 'Help';
  const ABOUT = 'About';
  const FEEDBACK = 'Feedback';

  const SIDEBAR_ITEMS = [
    { name: DISTANCE_LEARNING, icon: <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" className="svg-inline--fa fa-youtube fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg> },
    { name: CHALLENGE, icon: <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="rocket" className="svg-inline--fa rocket fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M13.13,22.19L11.5,18.36C13.07,17.78 14.54,17 15.9,16.09L13.13,22.19M5.64,12.5L1.81,10.87L7.91,8.1C7,9.46 6.22,10.93 5.64,12.5M19.22,4C19.5,4 19.75,4 19.96,4.05C20.13,5.44 19.94,8.3 16.66,11.58C14.96,13.29 12.93,14.6 10.65,15.47L8.5,13.37C9.42,11.06 10.73,9.03 12.42,7.34C15.18,4.58 17.64,4 19.22,4M19.22,2C17.24,2 14.24,2.69 11,5.93C8.81,8.12 7.5,10.53 6.65,12.64C6.37,13.39 6.56,14.21 7.11,14.77L9.24,16.89C9.62,17.27 10.13,17.5 10.66,17.5C10.89,17.5 11.13,17.44 11.36,17.35C13.5,16.53 15.88,15.19 18.07,13C23.73,7.34 21.61,2.39 21.61,2.39M14.54,9.46C13.76,8.68 13.76,7.41 14.54,6.63C18.14,7.41 18.15,8.68 17.37,9.46C16.59,10.24 15.32,10.24 14.54,9.46M8.88,16.53L7.47,15.12L8.88,16.53M6.24,22L9.88,18.36C9.54,18.27 9.21,18.12 8.91,17.91L4.83,22H6.24M2,22H3.41L8.18,17.24L6.76,15.83L2,20.59V22M2,19.17L6.09,15.09C5.88,14.79 5.73,14.47 5.64,14.12L2,17.76V19.17Z" /></svg> },
    { name: HELP, icon: <svg viewBox="0 0 24 24"><path fill="currentColor" d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" /></svg> },
    { name: FEEDBACK, icon: <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clipboard" className="svg-inline--fa fa-clipboard fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21.04,12.13C21.18,12.13 21.31,12.19 21.42,12.3L22.7,13.58C22.92,13.79 22.92,14.14 22.7,14.35L21.7,15.35L19.65,13.3L20.65,12.3C20.76,12.19 20.9,12.13 21.04,12.13M19.07,13.88L21.12,15.93L15.06,22H13V19.94L19.07,13.88M19,3C20.1,3 21,3.9 21,5V9L11,19V21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3H9.18C9.6,1.84 10.7,1 12,1C13.3,1 14.4,1.84 14.82,3H19M12,3C11.45,3 11,3.45 11,4C11,4.55 11.45,5 12,5C12.55,5 13,4.55 13,4C13,3.45 12.55,3 12,3Z" /></svg> },
    { name: ABOUT, icon: <svg viewBox="0 0 24 24"><path fill="currentColor" d="M13.5,4A1.5,1.5 0 0,0 12,5.5A1.5,1.5 0 0,0 13.5,7A1.5,1.5 0 0,0 15,5.5A1.5,1.5 0 0,0 13.5,4M13.14,8.77C11.95,8.87 8.7,11.46 8.7,11.46C8.5,11.61 8.56,11.6 8.72,11.88C8.88,12.15 8.86,12.17 9.05,12.04C9.25,11.91 9.58,11.7 10.13,11.36C12.25,10 10.47,13.14 9.56,18.43C9.2,21.05 11.56,19.7 12.17,19.3C12.77,18.91 14.38,17.8 14.54,17.69C14.76,17.54 14.6,17.42 14.43,17.17C14.31,17 14.19,17.12 14.19,17.12C13.54,17.55 12.35,18.45 12.19,17.88C12,17.31 13.22,13.4 13.89,10.71C14,10.07 14.3,8.67 13.14,8.77Z" /></svg> },
  ];

  // If user clicks outside the sidebar and distance learning tab while the tab is opened then close it
  window.onclick = (e) => {
    if (activeSidebarItem !== ''
    && !(e.target.id === 'sidebar')
    && !HtmlElementUtil.hasParentWithId(e.target, 'sidebar')
    ) {
      setActiveSidebarItem('');
    }
  };

  const handleToggleBtn = (e) => {
    e.preventDefault();
    e.currentTarget.name === activeSidebarItem ? setActiveSidebarItem('') : setActiveSidebarItem(e.currentTarget.name);
  };

  const handleAppRunView = () => {
    setActiveSidebarItem('');
    setUi((prevUI) => ({
      ...prevUI,
      ctxIsAppRunViewActive: !prevUI.ctxIsAppRunViewActive,
    }));
  };

  const sidebarItemList = SIDEBAR_ITEMS.map((item) => (
    <SidebarButton
      key={item.name}
      name={item.name}
      isPressed={activeSidebarItem === item.name}
      icon={item.icon}
      onClick={handleToggleBtn}
    />
  ));

  return (
    <aside id="sidebar">
      <ul className="sidebar-item-list">
        { sidebarItemList }
        <li className="sidebar-item">
          <button
            type="button"
            className="sidebar-btn toggle-btn"
            onClick={handleAppRunView}
            name="App Run View"
            // aria-pressed={isPressed}
          >
            <span className="sidebar-item-text">App Run View</span>
            <svg viewBox="0 0 24 24"><path fill="currentColor" d="M9,6H5V10H7V8H9M19,10H17V12H15V14H19M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2" /></svg>
          </button>
        </li>
      </ul>
      <DistanceLearning isActive={activeSidebarItem === DISTANCE_LEARNING} />
      <Challenge isActive={activeSidebarItem === CHALLENGE} />
      <Help isActive={activeSidebarItem === HELP} />
      <Feedback isActive={activeSidebarItem === FEEDBACK} />
      <About isActive={activeSidebarItem === ABOUT} />
    </aside>
  );
};

export default Sidebar;
