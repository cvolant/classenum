import React, { MouseEvent, useState } from 'react';

import styled from 'styled-components';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import Div from '../Div';
import Logo from '../Logo';

const StyledTypography = styled(Typography)<TypographyProps>`
  font-variant: small-caps;
  line-height: 1;
`;

export type IHeaderProps = {
  subtitle?: string;
  title?: string;
};

const Header: React.FC<IHeaderProps> = ({ subtitle, title }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<MouseEvent['currentTarget'] | null>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: MouseEvent): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="home">
          <Logo />
        </IconButton>
        <Div flex flexColumn flexGrow m={theme.spacing(1, 2)}>
          <StyledTypography>
            {subtitle}
          </StyledTypography>
          <Typography variant="h5" component="h1">
            {title}
          </Typography>
        </Div>
        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
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
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
