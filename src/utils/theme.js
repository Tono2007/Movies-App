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
      main: '#858A8F',
      light: '#AAB0B7',
      dark: '#2A2C34',
      contrastText: '#ffffff',
    },
    gray: {
      main: '#2A2C34',
      light: '#AAB0B7',
      dark: '#1E2029',
      contrastText: '#ffffff',
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
