import React, { ReactNode } from 'react';

import styled from 'styled-components';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import usePanel, { IPanelContext } from '../../hooks/usePanel';
import SlidingPanelButton from './SlidingPanelButton';

type ISlidingMenuProps = {
  children: ReactNode | ReactNode[];
};

const StyledSwipeableDrawer = styled(SwipeableDrawer)`
  ${({ theme }): string => `
    & .MuiPaper-root {
      overflow-y: visible;

      & > div + div {
        margin-top: ${theme.spacing(5)}px;
      }
    }
    & .MuiButton-label {
      justify-content: center;
    }
  `};
`;

const SlidingPanel: React.FC<ISlidingMenuProps> = ({ children }) => {
  const { togglePanel, panel: { open } } = usePanel() as IPanelContext;

  const toggleMenu = (toOpen?: boolean) => (): void => togglePanel(toOpen);

  return (
    <>
      <SlidingPanelButton onClick={toggleMenu()} />
      <StyledSwipeableDrawer
        anchor="bottom"
        open={open || false}
        onClose={toggleMenu(false)}
        onOpen={toggleMenu(true)}
      >
        <>
          <SlidingPanelButton onClick={toggleMenu()} onDrawer upside={!open} />
          {children}
        </>
      </StyledSwipeableDrawer>
    </>
  );
};

export default SlidingPanel;
