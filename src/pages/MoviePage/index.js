import React from 'react';
import Box from '@mui/material/Box';
import Banner from '../../components/Banner';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Badge from '@mui/material/Badge';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

//icns
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MovieIcon from '@mui/icons-material/Movie';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import RelatedMovies from './RelatedMovies';

function GenreChip() {
  return (
    <Typography
      borderRadius="10px"
      variant="caption"
      fontSize="12px"
      mb={0}
      display="inline"
      width="auto"
      p="2px 16px"
      bgcolor="#eee2"
    >
      Aventura
    </Typography>
  );
}
function ActressCard() {
  return (
    <div>
      <Box
        border={3}
        borderColor="#eee4"
        boxShadow={15}
        alt="banner"
        width="100%"
        height="300px"
        maxHeight="70%"
        component="img"
        src={`https://picsum.photos/300/300?random=${Math.random()}`}
        sx={{
          filter: 'brightness(0.99)',
          objectFit: 'cover',
        }}
      />
      <Typography
        borderRadius="10px"
        variant="caption"
        fontSize="14px"
        mb={0}
        display="inline"
        width="auto"
        p="2px 16px"
        bgcolor="#eee1"
      >
        Antonio Ayola
      </Typography>
    </div>
  );
}
function MovieImg() {
  return (
    <div>
      <Box
        border={1}
        borderColor="#eee2"
        boxShadow={15}
        alt="banner"
        width="100%"
        height="200px"
        maxHeight="70%"
        component="img"
        src={`https://picsum.photos/300/300?random=${Math.random()}`}
        sx={{
          cursor: 'pointer',
          filter: 'brightness(0.99)',
          objectFit: 'cover',
          '&:hover': {
            border: 2,
            borderColor: 'primary.main',
          },
        }}
      />
    </div>
  );
}

function MoviesPage() {
  return (
    <>
      <Banner showCover caption="PELICULA" />
      <Stack m="auto" px="4%" my={9}>
        <Stack direction="row" justifyContent="space-between">
          <Chip color="primary" label="2016" size="medium" />
          <Stack direction="row" alignItems="center" spacing={1}>
            <div>
              <Rating
                name="size-large"
                defaultValue={2.5}
                precision={0.5}
                sx={{ mr: '5px' }}
                size="large"
              />{' '}
              <Typography variant="subtitle1">78978 Calificaciones </Typography>
            </div>

            <Typography variant="subtitle2" fontSize="90px" fontWeight="300">
              9,7
            </Typography>
          </Stack>
        </Stack>
        <Typography variant="h3" fontWeight="400" mb={3} mt={-3}>
          Movie Title
          <Divider
            sx={{
              bgcolor: (theme) => theme.palette.primary.dark,
              width: '20%',
            }}
          />
        </Typography>
        <Stack direction="row" alignItems="center" spacing={2}>
          <AccessTimeIcon color="primary" />
          <Typography variant="subtitle1" mb={0} fontWeight="400" my={0}>
            2hr 13mn
          </Typography>
          <GenreChip />
          <GenreChip />
          <GenreChip />
          <GenreChip />
          <FavoriteBorderIcon color="primary" />
          <Button
            size="large"
            variant="contained"
            sx={{ width: '200px', mt: '-18px' }}
            endIcon={<PlayCircleOutlineIcon />}
          >
            Ver Trailer
          </Button>
        </Stack>

        <Typography variant="h6" mb={0} fontWeight="400" mt={5}>
          Descripción
        </Typography>
        <Typography variant="body1" mb={0} fontWeight="300" my={0}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
          consectetur incidunt error, doloremque impedit totam, vero deserunt
          cum laborum, fuga dolores. Nostrum repudiandae voluptas labore
          ratione! Enim quaerat quisquam nisi! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Officia, cupiditate eveniet? Adipisci
          deleniti dolore nesciunt voluptatum quod possimus commodi officia
          tempore! Obcaecati, fuga vel repellendus maxime velit veritatis!
          Rerum, inventore!
        </Typography>
        <Divider textAlign="center" sx={{ my: 5 }}>
          <Typography variant="subtitle1" mb={0} fontWeight="400" my={0}>
            Actores
          </Typography>
        </Divider>
        <Box p={8} bgcolor="gray.dark">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <ActressCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <ActressCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <ActressCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <ActressCard />
            </Grid>
          </Grid>
        </Box>
        <Divider textAlign="center" sx={{ my: 5 }}>
          <Typography variant="subtitle1" mb={0} fontWeight="400" my={0}>
            Imagenes
          </Typography>
        </Divider>
        <Box p={0} bgcolor="transparent">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
              <MovieImg />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
              <MovieImg />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
              <MovieImg />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
              <MovieImg />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
              <MovieImg />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
              <MovieImg />
            </Grid>
          </Grid>
        </Box>

        <RelatedMovies />
      </Stack>
    </>
  );
}

export default MoviesPage;
