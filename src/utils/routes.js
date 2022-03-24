import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Components
import Navbar from '../components/Navbar';
import MoviesPage from '../pages/MoviePage';
//Pages
import WelcomePage from '../pages/WelcomePage';
import ScrollToTop from './helpers/ScrollToTop';

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Navbar />}>
            <Route index element={<WelcomePage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
          </Route>
          <Route path="/welcomeff" element={<h1>welvcomne</h1>} />
          <Route path="/signup" element={<h1>welvcomne</h1>} />

          <Route path="*" element={<h1>welvcomne</h1>} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default Router;
