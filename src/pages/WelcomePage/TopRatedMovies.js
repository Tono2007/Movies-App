import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';

//Icons
import StarIcon from '@mui/icons-material/Star';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import MovieCard from '../../components/MovieCard';

function TopRatedMovies() {
  return (
    <Box m="auto" mx="4%" my={5}>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        justifyContent="space-between"
        mb={2}
      >
        <Typography variant="h5" mb={0}>
          Peliculas Mejor Calificadas
          <Divider
            variant="middle"
            sx={{ bgcolor: (theme) => theme.palette.primary.dark }}
          />
        </Typography>
        <Button size="medium" variant="contained">
          Ver Mas
        </Button>
      </Stack>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <MovieCard />
        </Grid>
        <Grid item xs={3}>
          <MovieCard />
        </Grid>
        <Grid item xs={3}>
          <MovieCard />
        </Grid>
        <Grid item xs={3}>
          <MovieCard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default TopRatedMovies;
