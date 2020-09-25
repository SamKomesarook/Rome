import React, { useState } from 'react';
import DistanceLearning from './DistanceLearning';
import Help from './Help';
import Feedback from './Feedback';
import SidebarButton from './SidebarButton';
import HtmlElementUtil from '../../utils/HtmlElementUtil';

const Sidebar = () => {
  const [activeSidebarItem, setActiveSidebarItem] = useState('');
  const DISTANCE_LEARNING = 'Distance Learning';
  const HELP = 'Help';
  const FEEDBACK = 'Feedback';
  const SIDEBAR_ITEMS = [
    { name: DISTANCE_LEARNING, icon: <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" className="svg-inline--fa fa-youtube fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg> },
    { name: HELP, icon: <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-alt" className="svg-inline--fa fa-file-alt fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z" /></svg> },
	{ name: FEEDBACK, icon: <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clipboard" className="svg-inline--fa fa-clipboard fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21.04,12.13C21.18,12.13 21.31,12.19 21.42,12.3L22.7,13.58C22.92,13.79 22.92,14.14 22.7,14.35L21.7,15.35L19.65,13.3L20.65,12.3C20.76,12.19 20.9,12.13 21.04,12.13M19.07,13.88L21.12,15.93L15.06,22H13V19.94L19.07,13.88M19,3C20.1,3 21,3.9 21,5V9L11,19V21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3H9.18C9.6,1.84 10.7,1 12,1C13.3,1 14.4,1.84 14.82,3H19M12,3C11.45,3 11,3.45 11,4C11,4.55 11.45,5 12,5C12.55,5 13,4.55 13,4C13,3.45 12.55,3 12,3Z" /></svg> },
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
	  <Help isActive={activeSidebarItem === HELP} />
	  <Feedback isActive={activeSidebarItem === FEEDBACK} />
    </aside>
  );
};

export default Sidebar;
