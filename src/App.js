import './App.css';
//MUI
import CssBaseline from '@mui/material/CssBaseline';
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
//Theme
import theme from './utils/theme';
//Router
import Router from './utils/routes';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </MuiThemeProvider>
  );
}

export default App;
