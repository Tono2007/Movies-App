import { useEffect, useState, lazy, Suspense } from 'react';
//Icons
import RateReviewIcon from '@mui/icons-material/RateReview';
import StarRateIcon from '@mui/icons-material/StarRate';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
//Components
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

import Modal from '../../components/Modal';
import Loader from '../../components/Loader';
import SnackBar from '../../components/SnackBar';
//API
import { addMovieToWatchlist } from '../../api/services/account';

const Reviews = lazy(() => import('./Reviews'));

function Ratings({ idMovie, movie, accountStates }) {
  const [isOpenReviewsModal, setIsOpenReviewsModal] = useState(false);
  const [isWatchlist, setWatchlist] = useState(accountStates?.watchlist);
  const [isLoading, setIsLoading] = useState(false);
  const [handleSnackbar, setHandleSnackbar] = useState({
    open: false,
    text: '',
  });

  const addToWatchlistHandler = async () => {
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
      const response = await addMovieToWatchlist({
        movieId: movie.id,
        watchlist: !isWatchlist,
      });
      console.log(response);
      setWatchlist((prev) => !prev);
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
    <section>
      <SnackBar
        openSnackbar={handleSnackbar.open}
        fnCloseSnackbar={() => setHandleSnackbar(false)}
        data={{ text: handleSnackbar.text }}
        type={handleSnackbar?.type}
      />
      {isLoading && (
        <Loader
          addSx={{ position: 'fixed', top: '40%', left: '40%', zIndex: 99999 }}
        />
      )}
      <Modal
        openModal={isOpenReviewsModal}
        fnCloseModal={() => setIsOpenReviewsModal(false)}
        title="Reseñas"
        maxWidth="md"
        type
      >
        <Suspense fallback={null}>
          <Reviews idMovie={idMovie} />
        </Suspense>
      </Modal>
      <Stack
        my={10}
        direction={{ xs: 'column', md: 'row' }}
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: (theme) => theme.palette.primary.main }}
          />
        }
        spacing={2}
        justifyContent="space-between"
      >
        <Stack direction="column" spacing={1}>
          <Typography variant="h5" mb={2}>
            Total de evualaciones
          </Typography>
          <Typography fontWeight="bold" variant="h2">
            {movie?.vote_count}
            <Typography component="span" variant="subtitle1" ml={1}>
              valoraciones
            </Typography>
          </Typography>
          <Typography fontWeight="bold" variant="h2">
            {movie?.popularity && movie?.popularity.toFixed(0)}
            <Typography component="span" variant="subtitle1" ml={1}>
              popularidad
            </Typography>
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            La popularidad son las visitas semanales
          </Typography>
        </Stack>
        <Stack spacing={2} direction="column">
          <Typography variant="h5" mb={2}>
            Calificación promedio
          </Typography>
          <Typography fontWeight="bold" variant="h2">
            {movie?.vote_average}
          </Typography>
          {movie?.vote_average !== undefined && (
            <Rating
              name="size-medium"
              value={movie.vote_average}
              precision={0.5}
              sx={{ mr: '5px' }}
              max={10}
              size="medium"
              readOnly
            />
          )}
          <Button size="large" variant="contained" endIcon={<StarRateIcon />}>
            Calificar
          </Button>
        </Stack>
        <Stack spacing={2}>
          <Button
            fullWidth
            size="large"
            variant="contained"
            onClick={() => setIsOpenReviewsModal(true)}
            endIcon={<RateReviewIcon />}
          >
            Ver todas las reseñas
          </Button>
          <Button
            fullWidth
            size="large"
            variant="outlined"
            endIcon={
              isWatchlist ? (
                <PlaylistRemoveIcon color="primary" fontSize="large" />
              ) : (
                <PlaylistAddCheckCircleIcon color="primary" fontSize="large" />
              )
            }
            onClick={addToWatchlistHandler}
          >
            {isWatchlist
              ? 'Eliminar de peliculas vistas'
              : 'Marcar pelicula como vista'}
          </Button>
        </Stack>
      </Stack>
    </section>
  );
}

export default Ratings;
