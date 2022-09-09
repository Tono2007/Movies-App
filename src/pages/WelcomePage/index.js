/* eslint-disable import/no-unresolved */
import { useEffect, useState } from 'react';
//MUI
import Grid from '@mui/material/Grid';
//Components
import PopularMovies from './PopularMovies';
import TopRatedMovies from './TopRatedMovies';
import GenreList from './GenreList';
import LatestMovies from './LatestMovies';
import BannerMovies from './BannerMovies';
import TvShowsOnAir from './TvShowsOnAir';
//API
import { getAllMovieGenres } from '../../api/services/catalog';

function WelcomePage() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      try {
        const responseGenres = await getAllMovieGenres();
        console.log(responseGenres);
        setGenres(responseGenres.data.genres);
      } catch (error) {
        console.log(error);
        console.log(error.response);
      }
    };
    getGenres();
  }, []);
  if (genres.length === 0) return null;

  return (
    <>
      {/* <Stack m="auto" px="4%" spacing={3}></Stack> */}
      {/*       <Banner caption="MoviesAPP" movieBtn movie={movies[1]} genres={genres} />
       */}
      <BannerMovies genres={genres} />
      <PopularMovies genres={genres} />
      <TopRatedMovies genres={genres} />
      <Grid
        container
        spacing={0}
        m="auto"
        px="4%"
        my={9}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} lg={9}>
          <LatestMovies genres={genres} />
        </Grid>
        <Grid item xs={12} lg={3}>
          <GenreList />
        </Grid>
      </Grid>
      <TvShowsOnAir />
      {/* <TvShows /> */}
    </>
  );
}

export default WelcomePage;
