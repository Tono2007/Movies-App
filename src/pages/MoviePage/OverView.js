import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { convertMinsToHrsMins } from '../../utils/helpers/helpers';
import { constants } from '../../utils/constants';

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
//
import {
  getMovie,
  getMovieKeywords,
  getMovieCredits,
  getMovieImages,
  getSimilarMovies,
  getMovieTitles,
} from '../../api/services/movies';
//compo
import RelatedMovies from './RelatedMovies';
import Cast from './Cast';
import Modal from '../../components/Modal';
import ModalVideo from '../../components/ModalVideo';

function OverView({ movie, credits, titles, trailer }) {
  const [openVideoModal, setOpenVideoModal] = useState(false);

  return (
    <>
      <Modal
        openModal={openVideoModal}
        fnCloseModal={() => setOpenVideoModal(false)}
        title={trailer?.name ?? 'Sin Trailer'}
        maxWidth="md"
        type
      >
        <ModalVideo video={trailer} />
      </Modal>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
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
            <Typography
              fontSize="40px"
              fontWeight="300"
              display="inline"
              component="span"
            >
              /10
            </Typography>
          </Typography>
        </Stack>
      </Stack>
      <Typography variant="h3" fontWeight="400" mb={3} mt={-3}>
        {
          //movie?.original_title
        }
        {movie?.title}{' '}
        <Typography variant="caption" fontWeight="300" fontStyle="italic">
          {movie?.tagline}
        </Typography>
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
        {movie?.adult && (
          <Typography
            border={1}
            p={0.5}
            borderColor="secondary.main"
            variant="caption"
          >
            Contenido Adulto
          </Typography>
        )}
        <FavoriteBorderIcon color="primary" />
        <Button
          size="large"
          variant="contained"
          sx={{ width: '200px', mt: '-18px' }}
          endIcon={<PlayCircleOutlineIcon />}
          onClick={() => setOpenVideoModal(true)}
        >
          Ver Trailer
        </Button>
      </Stack>
      <Typography variant="h6" mb={0} fontWeight="400" mt={5}>
        Resumen
      </Typography>
      <Typography variant="body1" fontWeight="300" mb={2} gutterBottom>
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
          {movie?.production_countries?.[0]?.name}
        </Typography>
      </Typography>
      <Typography variant="body2" mb={0} fontWeight="400" my={1}>
        Actores:
        <Typography
          component="span"
          variant="body2"
          fontWeight="400"
          color="primary.light"
          ml={1}
        >
          {/*  {credits?.cast
            ?.slice(0, 10)
            .map((genrer, index) =>
              index !== 0 ? `, ${genrer.name}` : `${genrer.name}`,
            )} */}
          {new Intl.ListFormat('es').format(
            credits?.cast?.slice(0, 10).map((title) => title.name),
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
          {credits?.crew?.find((worker) => worker.job === 'Director')?.name}
        </Typography>
      </Typography>
      <Typography variant="body2" mb={0} fontWeight="400" my={1}>
        Titulos alternativos:
        <Typography
          component="span"
          variant="body2"
          fontWeight="400"
          color="primary.main"
          ml={1}
        >
          {new Intl.ListFormat('es').format(
            titles?.map((title) => title.title),
          )}
        </Typography>
      </Typography>
      <Typography variant="body2" mb={0} fontWeight="400" my={1}>
        Presupuesto:
        <Typography
          component="span"
          variant="body2"
          fontWeight="400"
          color="primary.main"
          ml={1}
        >
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(movie?.budget)}
        </Typography>
      </Typography>
      <Typography variant="body2" mb={0} fontWeight="400" my={1}>
        Ingresos:
        <Typography
          component="span"
          variant="body2"
          fontWeight="400"
          color="primary.main"
          ml={1}
        >
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(movie?.revenue)}
        </Typography>
      </Typography>
    </>
  );
}

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

export default OverView;
