import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#c62828',
      light: '#d32f2f',
      dark: '#b71c1c',
      contrastText: '#fafafa',
    },
    secondary: {
      main: '#FDA300',
      light: '#FFC619',
      dark: '#e49300',
      contrastText: '#000',
    },
    tertiary: {
      main: '#263238',
      light: '#37474f',
      contrastText: '#ffffff',
    },
    quaternary: {
      main: '#263238',
      light: '#37474f',
      contrastText: '#ffffff',
    },
    gray: {
      main: '#858A8F',
      light: '#AAB0B7',
      dark: '#2A2C34',
      contrastText: '#ffffff',
    },
    paper: {
      main: '#1E2029',
      light: '#AAB0B7',
      dark: '#2A2C34',
      contrastText: '#ffffff',
    },
    text: {
      /*primary: '#333',    
      primary: '#212121',*/
      primary: '#eeeeee',
    },
    background: {
      default: '#12141D',
    },
    mode: 'dark',
  },
  typography: {
    fontFamily: 'Rubik',

    button: {
      textTransform: 'none',
    },
  },
});
export default theme;
export const themee = {
  colors: {
    primary: '#377DFF',
    danger: '#FF715B',
    warning: '#FFBE3D',
    success: '#2DCA8C',
    white: '#FFF',
    gray: {
      100: '#AAB0B7',
      200: '#858A8F',
      300: '#2A2C34',
      400: '#1E2029',
      500: '#12141D',
    },
  },
};
