import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    action: {
      active: '#fff',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      hover: 'rgba(255, 255, 255, 0.08)',
      selected: 'rgba(255, 255, 255, 0.16)',
    },
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#19294d',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    success: {
      light: '#68c154',
      main: '#3e8c2e',
      dark: '#215915',
      contrastText: '#91da81',
    },
    info: {
      light: '#ffd658',
      main: '#e9bb30',
      dark: '#a7810e',
      contrastText: '#ffe2c4',
    },
    error: {
      light: '#ff4141',
      main: '#d22f2f',
      dark: '#a70e0e',
      contrastText: '#ffb3b3',
    },
    background: {
      default: '#222',
      paper: '#353535',
    },
    text: {
      primary: '#eee',
      secondary: '#ddd',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
