import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';

import Routes from './Routes';

const App: React.FC = () => (
  <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  </StylesProvider>
);

export default App;
