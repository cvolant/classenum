import React, { ReactNode } from 'react';

import { useTheme } from '@material-ui/core/styles';

import Div from './Div';
import Menu from './Menu/Menu';
import Header, { IHeaderProps } from './Header/Header';

type IPageLayoutProps = IHeaderProps & {
  children: ReactNode | ReactNode[];
};

const PageLayout: React.FC<IPageLayoutProps> = ({ children, subtitle, title }) => {
  const theme = useTheme();

  return (
    <Div
      background={theme.palette.background.default}
      color={theme.palette.text.primary}
      flex
      flexColumn
      h="100vh"
    >
      <Header title={title} subtitle={subtitle} />
      <Div flex flexGrow>
        <Menu />
        {children}
      </Div>
    </Div>
  );
};
export default PageLayout;
