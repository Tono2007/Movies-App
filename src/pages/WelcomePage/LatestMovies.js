import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';

//Icons
import StarIcon from '@mui/icons-material/Star';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import MovieCard from '../../components/MovieCardMin';

function LatestMovies() {
  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        justifyContent="space-between"
        mb={2}
      >
        <Typography variant="h5" mb={0}>
          Ultimas Peliculas
        </Typography>
        <Button size="medium" variant="contained">
          Ver Mas
        </Button>
      </Stack>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
          <MovieCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
          <MovieCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
          <MovieCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
          <MovieCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
          <MovieCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
          <MovieCard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default LatestMovies;
