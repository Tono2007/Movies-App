import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Components
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import ScrollToTop from './helpers/ScrollToTop';

//Pages
const GenresPage = lazy(() => import('../pages/GenresPage'));
const Login = lazy(() => import('../pages/LoginPage'));
const MoviePage = lazy(() => import('../pages/MoviePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const PageNotFound = lazy(() => import('../pages/PageNotFound'));
const WelcomePage = lazy(() => import('../pages/WelcomePage'));
const WorkInProgress = lazy(() => import('../pages/WorkInProgress'));

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Suspense fallback={<Loader my={20} />}>
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
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Login />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default Router;
