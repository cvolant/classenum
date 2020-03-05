import React, { MouseEvent, useState } from 'react';

import styled from 'styled-components';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

import useUser from '../../hooks/useUser';
import useScreen from '../../hooks/useScreen';
import Div from '../Div';
import Logo from '../Logo';
import Avatar from '../Avatar';
import UserMenu from './UserMenu';

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
  const user = useUser();
  const screen = useScreen();
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
          <Typography variant={screen.mdup ? 'h4' : 'h5'} component="h1">
            {title}
          </Typography>
        </Div>
        {user ? (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar
                color="secondary"
                size={screen.mdup ? 'large' : 'medium'}
                user={user}
              />
            </IconButton>
            <UserMenu
              anchorEl={anchorEl}
              handleClose={handleClose}
              open={open}
            />
          </div>
        ) : (
          <Button color="primary" disableElevation variant="contained">
            Connexion
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Header;
