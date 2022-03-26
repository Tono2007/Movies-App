/* eslint-disable import/no-unresolved */
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
//Swiper
import { Autoplay, Swiper as SwiperCore } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Autoplay]);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </MuiThemeProvider>
  );
}

export default App;
