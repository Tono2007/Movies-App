import React from 'react';
import Box from '@mui/material/Box';
import PopularMovies from './PopularMovies';
import Grid from '@mui/material/Grid';
import Banner from './Banner';
import TopRatedMovies from './TopRatedMovies';
import GenreList from './GenreList';
import LatestMovies from './LatestMovies';

function WelcomePage() {
  return (
    <>
      <Banner />
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
      <Box sx={{ bgcolor: '#transparent', height: '100vh' }} mt={5} />

      <Box height="200vh">hj</Box>
    </>
  );
}

export default WelcomePage;
