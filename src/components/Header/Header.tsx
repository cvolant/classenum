import React, { MouseEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

import useScreen from '../../hooks/useScreen';
import usePageData from '../../hooks/usePageData';
import useUser from '../../hooks/useUser';
import Div from '../elements/Div';
import Logo from '../elements/Logo';
import Avatar from '../elements/Avatar';
import UserMenu from './UserMenu';

const StyledTypography = styled(Typography)<TypographyProps>`
  font-variant: small-caps;
  line-height: 1;
`;

const Header: React.FC = () => {
  const theme = useTheme();
  const user = useUser();
  const screen = useScreen();
  const history = useHistory();
  const [{ title, subtitle }] = usePageData();

  const [anchorEl, setAnchorEl] = useState<MouseEvent['currentTarget'] | null>(null);
  const open = Boolean(anchorEl);

  const goHome = (): void => {
    history.push('/');
  };

  const handleMenu = (event: MouseEvent): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          aria-label="home"
          color="inherit"
          edge="start"
          onClick={goHome}
        >
          <Logo />
        </IconButton>
        <Div flex flexColumn flexGrow m={theme.spacing(2, 2)}>
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
              aria-controls="ResponsivePanel-appbar"
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
              title={user.name}
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
