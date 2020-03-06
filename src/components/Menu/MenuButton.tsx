import React from 'react';

import styled from 'styled-components';
import useTheme from '@material-ui/core/styles/useTheme';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMore from '@material-ui/icons/ExpandMore';

import Div from '../elements/Div';

type IMenuButtonProps = {
  onClick: () => void;
  onDrawer?: boolean;
  upside?: boolean;
};

const StyledDiv = styled(Div)`
`;

const MenuButton: React.FC<IMenuButtonProps> = ({ onClick, onDrawer, upside }) => {
  const theme = useTheme();

  return (
    <Div
      absolute={onDrawer}
      color={theme.palette.text.secondary}
      fixed={!onDrawer}
      flex
      overflow="hidden"
      left="50%"
      bottom={!onDrawer ? '0' : undefined}
      top={onDrawer ? '0' : undefined}
      transform={`translate(-50%${upside ? ', -100%' : ''})`}
      transition={theme.transitions.create('transform')}
    >
      <StyledDiv
        background="transparent"
        borderRadius="0 0 50%;"
        boxShadow={`25px 25px ${upside || !onDrawer
          ? theme.palette.secondary.main
          : theme.palette.background.paper}`}
        color="inherit"
        h="50px"
        w="50px"
        noPointerEvents
      />
      <Div
        background={upside || !onDrawer
          ? theme.palette.secondary.main
          : theme.palette.background.paper}
        borderRadius="50% 50% 0 0"
        boxShadow={!onDrawer ? theme.shadows[5] : undefined}
        color={upside || !onDrawer
          ? theme.palette.secondary.contrastText
          : 'inherit'}
        transition={theme.transitions.create(['background-color', 'color'])}
        zIndex={1}
      >
        <IconButton color="inherit" onClick={onClick}>
          {onDrawer && !upside ? <ExpandMore /> : <MenuIcon />}
        </IconButton>
      </Div>
      <StyledDiv
        background="transparent"
        borderRadius="0 0 0 50%;"
        boxShadow={`-25px 25px ${upside || !onDrawer
          ? theme.palette.secondary.main
          : theme.palette.background.paper}`}
        color="inherit"
        h="50px"
        w="50px"
        noPointerEvents
      />
    </Div>
  );
};

export default MenuButton;
