import { NavLink } from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const Sidebar = ({ menuItems }) => (
  <div className="sidebar">
    {menuItems.map((menuItem, i) => (
      <MenuItem key={menuItem.icon} menuItem={menuItem} />
    ))}
  </div>
);

const MenuItem = ({ menuItem }) => (
  <NavLink
    exact
    to={menuItem.url}
    className="button menuButton"
    activeClassName="active"
  >
    <Icon name={menuItem.icon} />
  </NavLink>
);

export default Sidebar;
