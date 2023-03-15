import { useEffect, useState, lazy, Suspense } from 'react';
//Icons
import RateReviewIcon from '@mui/icons-material/RateReview';
import StarRateIcon from '@mui/icons-material/StarRate';
//Components
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Modal from '../../components/Modal';
//API
import { getMovieReviews } from '../../api/services/movies';

const Reviews = lazy(() => import('./Reviews'));

function Ratings({ idMovie, movie }) {
  const [isOpenReviewsModal, setIsOpenReviewsModal] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await getMovieReviews(idMovie);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <section>
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
        <div>
          <Button
            fullWidth
            size="large"
            variant="contained"
            onClick={() => setIsOpenReviewsModal(true)}
            endIcon={<RateReviewIcon />}
          >
            Ver todas las reseñas
          </Button>
        </div>
      </Stack>
    </section>
  );
}

export default Ratings;
