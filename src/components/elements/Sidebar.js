import React, { useState } from 'react';
import DistanceLearning from './DistanceLearning';
import Help from './Help';
import Challenge from './Challenge';
import SidebarButton from './SidebarButton';
import HtmlElementUtil from '../../utils/HtmlElementUtil';

const Sidebar = () => {
  const [activeSidebarItem, setActiveSidebarItem] = useState('');
  const DISTANCE_LEARNING = 'Distance Learning';
  const HELP = 'Help';
  const CHALLENGE = 'Challenge';
  const SIDEBAR_ITEMS = [
    { name: DISTANCE_LEARNING, icon: <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" className="svg-inline--fa fa-youtube fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg> },
    { name: CHALLENGE, icon: <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="rocket" className="svg-inline--fa rocket fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M13.13,22.19L11.5,18.36C13.07,17.78 14.54,17 15.9,16.09L13.13,22.19M5.64,12.5L1.81,10.87L7.91,8.1C7,9.46 6.22,10.93 5.64,12.5M19.22,4C19.5,4 19.75,4 19.96,4.05C20.13,5.44 19.94,8.3 16.66,11.58C14.96,13.29 12.93,14.6 10.65,15.47L8.5,13.37C9.42,11.06 10.73,9.03 12.42,7.34C15.18,4.58 17.64,4 19.22,4M19.22,2C17.24,2 14.24,2.69 11,5.93C8.81,8.12 7.5,10.53 6.65,12.64C6.37,13.39 6.56,14.21 7.11,14.77L9.24,16.89C9.62,17.27 10.13,17.5 10.66,17.5C10.89,17.5 11.13,17.44 11.36,17.35C13.5,16.53 15.88,15.19 18.07,13C23.73,7.34 21.61,2.39 21.61,2.39M14.54,9.46C13.76,8.68 13.76,7.41 14.54,6.63C18.14,7.41 18.15,8.68 17.37,9.46C16.59,10.24 15.32,10.24 14.54,9.46M8.88,16.53L7.47,15.12L8.88,16.53M6.24,22L9.88,18.36C9.54,18.27 9.21,18.12 8.91,17.91L4.83,22H6.24M2,22H3.41L8.18,17.24L6.76,15.83L2,20.59V22M2,19.17L6.09,15.09C5.88,14.79 5.73,14.47 5.64,14.12L2,17.76V19.17Z" /></svg> },
    { name: HELP, icon: <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-alt" className="svg-inline--fa fa-file-alt fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z" /></svg> },
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
      </ul>
      <DistanceLearning isActive={activeSidebarItem === DISTANCE_LEARNING} />
      <Challenge isActive={activeSidebarItem === CHALLENGE} />
      <Help isActive={activeSidebarItem === HELP} />
    </aside>
  );
};

export default Sidebar;
