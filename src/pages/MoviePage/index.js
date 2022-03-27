import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { convertMinsToHrsMins } from '../../utils/helpers/helpers';

import moment from 'moment';
import 'moment/locale/es';
//
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
//
import {
  getMovie,
  getMovieKeywords,
  getMovieCredits,
} from '../../api/services/movies';

function GenreChip({ text }) {
  return (
    <Typography
      component="span"
      display="inline-block"
      mr={0}
      borderRadius="15px"
      fontSize="13px"
      mb={0}
      lineHeight="13px"
      my={3}
      width="auto"
      p="3px 16px"
      bgcolor="#eee4"
    >
      {text}
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

function MoviePage() {
  const { idMovie } = useParams();
  const [movie, setMovie] = useState({});
  const [keywords, setKeywords] = useState([]);
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const responses = await Promise.all([
          getMovie(idMovie),
          getMovieKeywords(idMovie),
          getMovieCredits(idMovie),
        ]);
        console.log(responses);
        setMovie(responses[0].data);
        setKeywords(responses[1].data.keywords);
        setCredits(responses[2].data);
      } catch (error) {
        console.log(error);
        console.log(error.response);
      }
    };
    getDetails();
  }, []);

  return (
    <>
      <Banner showCover caption="PELICULA" id={idMovie} />
      <Stack m="auto" px="4%" mb={9}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Chip
            color="primary"
            label={moment(movie?.release_date).format('L')}
            size="medium"
          />
          <Stack direction="row" alignItems="center" spacing={1}>
            <div>
              {movie?.vote_average !== undefined && (
                <Rating
                  name="size-large"
                  value={movie?.vote_average}
                  precision={0.5}
                  sx={{ mr: '5px' }}
                  max={10}
                  size="large"
                />
              )}

              <Typography variant="subtitle1">
                Votos totales: ({movie?.popularity})
              </Typography>
            </div>

            <Typography variant="subtitle2" fontSize="90px" fontWeight="300">
              {movie?.vote_average}
            </Typography>
          </Stack>
        </Stack>
        <Typography variant="h3" fontWeight="400" mb={3} mt={-3}>
          {movie?.original_title}
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
            {convertMinsToHrsMins(movie?.runtime)}{' '}
          </Typography>
          {movie?.genres?.slice(0, 9).map((genre) => (
            <GenreChip text={genre.name} key={genre.id} />
          ))}
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
        <Typography variant="body1" mb={0} fontWeight="300" my={0} gutterBottom>
          {movie?.overview}
        </Typography>
        <Typography variant="body2" mb={0} fontWeight="400" my={1}>
          Pais:
          <Typography
            component="span"
            variant="body2"
            fontWeight="400"
            color="primary.main"
            ml={1}
          >
            {movie?.production_countries?.[0].name}
          </Typography>
        </Typography>{' '}
        <Typography variant="body2" mb={0} fontWeight="400" my={1}>
          Actores:
          <Typography
            component="span"
            variant="body2"
            fontWeight="400"
            color="primary.main"
            ml={1}
          >
            {credits?.cast
              ?.slice(0, 10)
              .map((genrer, index) =>
                index !== 0 ? `, ${genrer.name}` : `${genrer.name}`,
              )}
          </Typography>
        </Typography>
        <Typography variant="body2" mb={0} fontWeight="400" my={1}>
          Director:
          <Typography
            component="span"
            variant="body2"
            fontWeight="400"
            color="primary.main"
            ml={1}
          >
            {credits?.crew?.find((worker) => worker.job === 'Director').name}
          </Typography>
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

export default MoviePage;
