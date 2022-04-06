import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Components
import Navbar from '../components/Navbar';
import GenresPage from '../pages/GenresPage';
import MoviePage from '../pages/MoviePage';
import MoviesPage from '../pages/MoviesPage';
import PageNotFound from '../pages/PageNotFound';

//Pages
import WelcomePage from '../pages/WelcomePage';
import WorkInProgress from '../pages/WorkInProgress';
import ScrollToTop from './helpers/ScrollToTop';

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Navbar />}>
            <Route index element={<WelcomePage />} />
            <Route path="welcome" element={<WelcomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:idMovie" element={<MoviePage />} />
            <Route path="genres" element={<GenresPage />} />
            <Route path="series" element={<WorkInProgress />} />
            <Route path="cast" element={<WorkInProgress />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route path="/login" element={<h1>welvcomne</h1>} />
          <Route path="/signup" element={<h1>welvcomne</h1>} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default Router;
