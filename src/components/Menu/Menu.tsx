import React from 'react';

import useScreen from '../../hooks/useScreen';
import FixedMenu from './FixedMenu';
import MenuContent from './MenuContent';
import SlidingMenu from './SlidingMenu';
import { IMenuItem } from '../../types/types';

export type IMenuProps = {
  menuItems: IMenuItem[];
};

const Menu: React.FC<IMenuProps> = ({ menuItems }) => {
  const screen = useScreen();

  return (
    <>
      {screen.mdup ? (
        <FixedMenu>
          <MenuContent menuItems={menuItems} />
        </FixedMenu>
      ) : (
        <SlidingMenu>
          <MenuContent menuItems={menuItems} center />
        </SlidingMenu>
      )}
    </>
  );
};
export default Menu;
