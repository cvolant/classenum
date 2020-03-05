import React from 'react';

import useTheme from '@material-ui/core/styles/useTheme';

import useScreen from '../../hooks/useScreen';
import Div from '../Div';
import FixedMenu from './FixedMenu';
import MenuContent from './MenuContent';
import SlidingMenu from './SlidingMenu';

const Menu: React.FC = () => {
  const screen = useScreen();
  const theme = useTheme();

  return (
    <Div
      background={theme.palette.background.paper}
      color={theme.palette.text.secondary}
    >
      {screen.mdup ? (
        <FixedMenu>
          <MenuContent />
        </FixedMenu>
      ) : (
        <SlidingMenu>
          <MenuContent center />
        </SlidingMenu>
      )}
    </Div>
  );
};
export default Menu;
