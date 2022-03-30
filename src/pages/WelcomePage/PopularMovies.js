import { useEffect, useState } from 'react';
//mui
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
//com
import MovieCard from '../../components/MovieCard';
//api
import { getPopularMovies } from '../../api/services/movies';

function PopularMovies() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await getPopularMovies();
        console.log(response);
        setPopularMovies(response.data.results);
      } catch (error) {
        console.log(error);
        console.log(error.response);
      }
    };
    getDetails();
  }, []);
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
          Peliculas Populares
          <Divider
            variant="middle"
            sx={{ bgcolor: (theme) => theme.palette.primary.dark }}
          />
        </Typography>

        <Button size="medium" variant="contained">
          Ver todas
        </Button>
      </Stack>

      <Grid container spacing={4}>
        {popularMovies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <MovieCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <MovieCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <MovieCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <MovieCard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default PopularMovies;
