import React from 'react';

import { useTheme } from '@material-ui/core/styles';

import Div from './elements/Div';
import ResponsivePanel from './ResponsivePanel/ResponsivePanel';
import Header from './Header/Header';
import { PanelProvider } from '../hooks/usePanel';
import { PageDataProvider } from '../hooks/usePageData';
import Routes from './Routes';

const PageLayout: React.FC = () => {
  const theme = useTheme();

  return (
    <Div
      background={theme.palette.background.default}
      color={theme.palette.text.primary}
      flex
      flexColumn
      h="100vh"
      overflow="hidden"
    >
      <PanelProvider>
        <PageDataProvider>
          <Header />
          <Div flex flexGrow minHeight="0">
            <ResponsivePanel />
            <Routes />
          </Div>
        </PageDataProvider>
      </PanelProvider>
    </Div>
  );
};
export default PageLayout;
