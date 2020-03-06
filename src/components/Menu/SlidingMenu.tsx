import React, { ReactNode, useState } from 'react';

import styled from 'styled-components';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import MenuButton from './MenuButton';

type ISlidingMenuProps = {
  children: ReactNode | ReactNode[];
};

const StyledSwipeableDrawer = styled(SwipeableDrawer)`
  & .MuiPaper-root {
    overflow-y: visible;
    color: ${({ theme }): string => theme.palette.text.secondary};
  }
`;

const SlidingMenu: React.FC<ISlidingMenuProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = (toOpen?: boolean) => (): void => {
    setOpen(typeof toOpen === 'boolean' ? toOpen : !open);
  };

  return (
    <>
      <MenuButton onClick={toggleMenu()} />
      <StyledSwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleMenu(false)}
        onOpen={toggleMenu(true)}
      >
        <>
          <MenuButton onClick={toggleMenu()} onDrawer upside={!open} />
          {children}
        </>
      </StyledSwipeableDrawer>
    </>
  );
};
export default SlidingMenu;
