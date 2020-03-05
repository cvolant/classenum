import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import 'typeface-roboto';

import Routes from './Routes';

console.log('From App. theme:', theme);

const App: React.FC = () => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);

export default App;
