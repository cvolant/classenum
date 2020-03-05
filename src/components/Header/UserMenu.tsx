import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const menuItems = [
  {
    label: 'Mon compte',
    to: '/mon-compte',
  },
  {
    label: 'Préférences',
    onClick: (): void => { /* TODO: Implement prefereces */ },
  },
  {
    label: 'Déconnexion',
    onClick: (): void => { /* TODO: Implement log out */ },
  },
];

export type IUserMenuProps = {
  anchorEl: MouseEvent['currentTarget'] | null;
  open?: boolean;
  handleClose: () => void;
};

const UserMenu: React.FC<IUserMenuProps> = ({
  anchorEl, open = false, handleClose,
}) => (
  <Menu
    id="menu-appbar"
    anchorEl={anchorEl}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={open}
    onClose={handleClose}
  >
    {menuItems.map(({ label, onClick, to }) => (
      <MenuItem
        onClick={(): void => {
          if (onClick) onClick();
          handleClose();
        }}
        key={label}
      >
        {to ? <Link to={to}>{label}</Link> : label}
      </MenuItem>
    ))}
    <MenuItem onClick={handleClose}>My account</MenuItem>
  </Menu>
);

export default UserMenu;
