import { useState, lazy, Suspense } from 'react';
import { convertMinsToHrsMins } from '../../utils/helpers/helpers';

import moment from 'moment';
import 'moment/locale/es';
//Compnents
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

//Icons
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
//Components
import Modal from '../../components/Modal';
import Loader from '../../components/Loader';
import SnackBar from '../../components/SnackBar';

import { markMovieFavorite } from '../../api/services/account';

const ModalVideo = lazy(() => import('../../components/ModalVideo'));

function OverView({ movie, credits, titles, trailer, accountStates }) {
  const [openVideoModal, setOpenVideoModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [handleSnackbar, setHandleSnackbar] = useState({
    open: false,
    text: '',
  });
  const [isFavorite, setIsFavorite] = useState(accountStates?.favorite);

  const addToFavoritesHandler = async () => {
    console.log(movie, accountStates);
    if (accountStates === null) {
      setHandleSnackbar({
        open: true,
        text: 'Iniciar Sesión para realizar esta acción',
        type: 'warning',
      });
      return;
    }
    try {
      setIsLoading(true);
      const response = await markMovieFavorite({
        movieId: movie.id,
        favorite: !isFavorite,
      });
      console.log(response);
      setIsFavorite((prev) => !prev);
      setHandleSnackbar({
        open: true,
        text: 'Accion realizada correctamente',
      });
    } catch (error) {
      console.log(error);
      console.log(error.response);
      setHandleSnackbar({
        open: true,
        text: error?.response?.data?.status_message ?? 'Error en acción',
        type: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SnackBar
        openSnackbar={handleSnackbar.open}
        fnCloseSnackbar={() => setHandleSnackbar(false)}
        data={{ text: handleSnackbar.text }}
        type={handleSnackbar?.type}
      />
      <Modal
        openModal={openVideoModal}
        fnCloseModal={() => setOpenVideoModal(false)}
        title={trailer?.name ?? 'Sin Trailer'}
        maxWidth="md"
        type
      >
        <Suspense fallback={null}>
          <ModalVideo video={trailer} />
        </Suspense>
      </Modal>
      {isLoading && (
        <Loader
          addSx={{ position: 'fixed', top: '40%', left: '40%', zIndex: 99999 }}
        />
      )}
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', md: 'center' }}
      >
        <Chip
          color="primary"
          label={moment(movie?.release_date).format('L')}
          size="medium"
        />
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems={{ xs: 'flex-start', md: 'center' }}
          spacing={1}
        >
          <div>
            {movie?.vote_average !== undefined && (
              <Rating
                name="size-large"
                value={movie?.vote_average}
                precision={0.5}
                sx={{ mr: '5px' }}
                max={10}
                size="large"
                readOnly
              />
            )}

            <Typography variant="subtitle1">
              Votos totales: ({movie?.vote_count})
            </Typography>
          </div>

          <Typography
            variant="subtitle2"
            fontSize={{ xs: '40px', md: '90px' }}
            fontWeight="300"
          >
            {movie?.vote_average && Math.round(movie.vote_average * 100) / 100}
            <Typography
              fontSize={{ xs: '20px', md: '40px' }}
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
      <Stack direction="row" alignItems="center" spacing={2} flexWrap="wrap">
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
        <Typography
          border={1}
          p={0.5}
          px={1}
          borderColor="secondary.main"
          variant="caption"
        >
          {movie?.original_language}
        </Typography>
        <Typography
          border={1}
          p={0.5}
          borderColor="secondary.main"
          variant="caption"
        >
          {movie?.status}
        </Typography>
        <Tooltip
          title={isFavorite ? 'Eliminar de favoritos' : 'Agregar a favoritos'}
        >
          <IconButton aria-label="add favorite" onClick={addToFavoritesHandler}>
            {isFavorite ? (
              <FavoriteIcon color="primary" fontSize="large" />
            ) : (
              <FavoriteBorderIcon color="primary" fontSize="large" />
            )}
          </IconButton>
        </Tooltip>

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
        Estreno:
        <Typography
          component="span"
          variant="body2"
          fontWeight="400"
          color="primary.light"
          ml={1}
        >
          {moment(movie?.release_date).format('L')}
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
