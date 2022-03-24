import React from 'react';
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

function ListItem() {
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
      pt="5px"
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
      to="/"
    >
      Aventura
    </Link>
  );
}

function GenreList() {
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
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </Stack>

      <Button
        size="small"
        variant="contained"
        fullWidth
        sx={{ m: 'auto', mt: 'auto' }}
        color="primary"
        endIcon={<PlayCircleOutlineIcon />}
      >
        Ver Todos
      </Button>
    </Box>
  );
}

export default GenreList;
