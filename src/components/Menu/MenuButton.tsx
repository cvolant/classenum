import React from 'react';

import styled from 'styled-components';
import useTheme from '@material-ui/core/styles/useTheme';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMore from '@material-ui/icons/ExpandMore';

import Div from '../Div';

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
      color="inherit"
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
        boxShadow={`25px 25px ${theme.palette.background.paper}`}
        color="inherit"
        h="50px"
        w="50px"
        noPointerEvents
      />
      <Div
        background={theme.palette.background.paper}
        borderRadius="50% 50% 0 0"
        color="inherit"
        zIndex={1}
      >
        <IconButton color="inherit" onClick={onClick}>
          {onDrawer && !upside ? <ExpandMore /> : <MenuIcon />}
        </IconButton>
      </Div>
      <StyledDiv
        background="transparent"
        borderRadius="0 0 0 50%;"
        boxShadow={`-25px 25px ${theme.palette.background.paper}`}
        color="inherit"
        h="50px"
        w="50px"
        noPointerEvents
      />
    </Div>
  );
};

export default MenuButton;
