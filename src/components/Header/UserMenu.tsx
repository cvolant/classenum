import React, { MouseEvent } from 'react';

import styled from 'styled-components';

import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Link from '../elements/Link';
import { IMenuItem } from '../../types/types';

export type IUserMenuProps = {
  anchorEl: MouseEvent['currentTarget'] | null;
  open?: boolean;
  handleClose: () => void;
  title?: string;
};

const menuItems: IMenuItem[] = [
  {
    label: 'Mon compte',
    labelVisible: true,
    to: '/mon-compte',
  },
  {
    label: 'Préférences',
    labelVisible: true,
  },
  {
    label: 'Déconnexion',
    labelVisible: true,
  },
];

const StyledMenu = styled(Menu)`
  & .MuiPaper-root {
    color: ${({ theme }): string => theme.palette.text.secondary};
  }
`;

const UserMenu: React.FC<IUserMenuProps> = ({
  anchorEl, open = false, handleClose, title,
}) => (
  <StyledMenu
    id="ResponsivePanel-appbar"
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
    {(title ? [
      (
        <MenuItem disabled key="name">
          {title}
        </MenuItem>
      ),
      <Divider light key="divider" />,
    ] : []).concat(menuItems.map(({
      label, onClick, to,
    }) => (
      <MenuItem
        disabled={!to && !onClick}
        key={label}
        onClick={(): void => {
          if (onClick) onClick();
          handleClose();
        }}
      >
        {to ? <Link to={to}>{label}</Link> : label}
      </MenuItem>
    )))}
  </StyledMenu>
);

export default UserMenu;
