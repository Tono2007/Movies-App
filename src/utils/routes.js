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

export default Router;
