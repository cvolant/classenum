import React, { ReactNode } from 'react';

import { useTheme } from '@material-ui/core/styles';

import Div from './Div';
import Header, { IHeaderProps } from './Header/Header';

type IPageLayoutProps = IHeaderProps & {
  children: ReactNode | Array<ReactNode>;
};

const PageLayout: React.FC<IPageLayoutProps> = ({ children, subtitle, title }) => {
  const theme = useTheme();

  return (
    <Div
      background={theme.palette.background.default}
      color={theme.palette.text.main}
      h="100vh"
    >
      <Header title={title} subtitle={subtitle} />
      {children}
    </Div>
  );
};
export default PageLayout;
