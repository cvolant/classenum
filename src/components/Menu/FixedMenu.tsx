import React, { ReactNode } from 'react';

import { useTheme } from '@material-ui/core/styles';

import Div from '../Div';

type IFixedMenuProps = {
  children: ReactNode | ReactNode[];
};

const FixedMenu: React.FC<IFixedMenuProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <Div
      background={theme.palette.background.paper}
      flex
      flexColumn
      p={theme.spacing(1, 2)}
    >
      {children}
    </Div>
  );
};
export default FixedMenu;
