import React from 'react';
//MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
//Components
import PopularMovies from './PopularMovies';
import Banner from '../../components/Banner';
import TopRatedMovies from './TopRatedMovies';
import GenreList from './GenreList';
import LatestMovies from './LatestMovies';
import TvShows from './TvShows';

function WelcomePage() {
  return (
    <>
      {/* <Stack m="auto" px="4%" spacing={3}></Stack> */}
      <Banner caption="MoviesAPP" movieBtn />
      <PopularMovies />
      <TopRatedMovies />

      <Grid container spacing={0} m="auto" px="4%" my={9}>
        <Grid item xs={9}>
          <LatestMovies />
        </Grid>
        <Grid item xs={3}>
          <GenreList />
        </Grid>
      </Grid>
      <TvShows />

      <h2>Series:</h2>
    </>
  );
}

export default WelcomePage;
