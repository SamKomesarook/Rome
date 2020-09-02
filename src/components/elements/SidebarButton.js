import React from 'react';
import PropTypes from 'prop-types';

const SidebarButton = ({
  name, text, isPressed, icon, onClick,
}) => (
  <li className="sidebar-item">
    <button
      type="button"
      className="sidebar-btn toggle-btn"
      onClick={onClick}
      name={name}
      aria-pressed={isPressed}
    >
      <span className="sidebar-item-text">{text}</span>
      {icon}
    </button>
  </li>
);

SidebarButton.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isPressed: PropTypes.bool.isRequired,
  icon: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SidebarButton;
