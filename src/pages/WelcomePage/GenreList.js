import { useEffect, useState } from 'react';
import { useNavigate, NavLink, useMatch, Outlet } from 'react-router-dom';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';

//Icons
import StarIcon from '@mui/icons-material/Star';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import MovieCard from '../../components/MovieCard';
//API
import { getAllMovieGenres, getAllTvGenres } from '../../api/services/catalog';

function ListItem({ genre }) {
  return (
    <Link
      underline="hover"
      height="100%"
      fontSize="15px"
      variant="subtitle1"
      color="textPrimary"
      fontWeight="400"
      textAlign="center"
      px="25px"
      py="2px"
      letterSpacing="1.1px"
      sx={{
        transition: '.4s',
        transitionProperty: 'background,color ',
        textTransform: 'none',
        '&:hover': {
          fontWeight: '400',
          color: 'textPrimary',
          bgcolor: (theme) => '#eee3',
        },
      }}
      component={NavLink}
      to={`movies/?with_genres=${genre.id}`}
    >
      {genre.name}
    </Link>
  );
}

function GenreList() {
  const navigate = useNavigate();
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      try {
        const response = await getAllMovieGenres();
        console.log(response);
        setGenres(response.data.genres);
      } catch (error) {
        console.log(error);
        console.log(error.response);
      }
    };
    getGenres();
  }, []);
  return (
    <Box p={2} bgcolor="#1E2029" borderRadius="5px" ml={5}>
      <Typography variant="h6" textAlign="center" my={2}>
        Generos de Pelicula
      </Typography>
      <Divider
        variant="middle"
        sx={{ bgcolor: (theme) => theme.palette.primary.main }}
      />
      <Stack spacing={1} my={2}>
        {genres.slice(0, 10).map((genre) => (
          <ListItem key={genre.id} genre={genre} />
        ))}
      </Stack>

      <Button
        size="small"
        variant="contained"
        fullWidth
        sx={{ m: 'auto', mt: 'auto' }}
        color="primary"
        endIcon={<PlayCircleOutlineIcon />}
        onClick={() => navigate(`/genres`)}
      >
        Ver Todos
      </Button>
    </Box>
  );
}

export default GenreList;
