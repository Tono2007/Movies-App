import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { authVerify } from './helpers/helpers';
//Components
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import ScrollToTop from './helpers/ScrollToTop';

//Pages
import PageNotFound from '../pages/PageNotFound';
//import FavoritesMoviesPage from '../pages/FavoritesMoviesPage';

const GenresPage = lazy(() => import('../pages/GenresPage'));
const Login = lazy(() => import('../pages/LoginPage'));
const MoviePage = lazy(() => import('../pages/MoviePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const WelcomePage = lazy(() => import('../pages/WelcomePage'));
const WorkInProgress = lazy(() => import('../pages/WorkInProgress'));
const FavoritesMoviesPage = lazy(() => import('../pages/FavoritesMoviesPage'));

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Navbar />}>
            <Route
              index
              element={
                <Suspense fallback={<Loader my={20} />}>
                  <WelcomePage />
                </Suspense>
              }
            />
            <Route
              path="welcome"
              element={
                <Suspense fallback={<Loader my={20} />}>
                  <WelcomePage />
                </Suspense>
              }
            />
            <Route
              path="movies"
              element={
                <Suspense fallback={<Loader my={20} />}>
                  <MoviesPage />
                </Suspense>
              }
            />
            <Route
              path="movies/:idMovie"
              element={
                <Suspense fallback={<Loader my={20} />}>
                  <MoviePage />
                </Suspense>
              }
            />
            <Route
              path="genres"
              element={
                <Suspense fallback={<Loader my={20} />}>
                  <GenresPage />
                </Suspense>
              }
            />
            <Route
              path="series"
              element={
                <Suspense fallback={<Loader my={20} />}>
                  <WorkInProgress />
                </Suspense>
              }
            />
            <Route
              path="cast"
              element={
                <Suspense fallback={<Loader my={20} />}>
                  <WorkInProgress />
                </Suspense>
              }
            />
            <Route
              path="favorites"
              element={
                <AuthRoute>
                  <Suspense fallback={<Loader my={20} />}>
                    <FavoritesMoviesPage />
                  </Suspense>
                </AuthRoute>
              }
            />

            <Route
              path="rates"
              element={
                <AuthRoute>
                  <Suspense fallback={<Loader my={20} />}>
                    <FavoritesMoviesPage />
                  </Suspense>
                </AuthRoute>
              }
            />
            <Route
              path="watchlist"
              element={
                <AuthRoute>
                  <Suspense fallback={<Loader my={20} />}>
                    <FavoritesMoviesPage />
                  </Suspense>
                </AuthRoute>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback={<Loader my={20} />}>
                  <PageNotFound />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="/login"
            element={
              <Suspense fallback={<Loader my={20} />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/signup"
            element={
              <Suspense fallback={<Loader my={20} />}>
                <Login />
              </Suspense>
            }
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

function AuthRoute({ children }) {
  if (authVerify() === true) {
    return children;
  }
  return (
    <>
      <PageNotFound />
      Iniciar Sesión
    </>
  );
}

export default Router;
