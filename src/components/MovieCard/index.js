import { constants } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';
import { convertMinsToHrsMins } from '../../utils/helpers/helpers';
import moment from 'moment';
import 'moment/locale/es';
//mui
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';

//Icons
import StarIcon from '@mui/icons-material/Star';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

function MovieCard({ movie }) {
  return (
    <Box
      position="relative"
      border={2}
      borderColor="transparent"
      borderRadius="3px"
      sx={{
        transition: '0.5s',
        '&:hover': {
          borderColor: 'primary.light',
          '.carImg:after': {
            bgcolor: '#0009',
            boxShadow: 'none',
          },
          '.cardContent': {
            visibility: 'visible',
          },
        },
      }}
    >
      <Box
        className="carImg"
        borderRadius="3px"
        overflow="hidden"
        position="relative"
        height="340px"
        sx={{
          '&:after': {
            transition: '0.5s',
            content: '""',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'absolute',
            boxShadow: (theme) =>
              `inset 0px 50px 30px -15px ${theme.palette.background.default},inset 0px -30px 10px -15px ${theme.palette.background.default}`,
          },
        }}
      >
        <Box
          alt="banner"
          width="100%"
          height="100%"
          component="img"
          src={`${constants.api.site}/original${movie?.poster_path}`}
          sx={{
            filter: 'brightness(0.99)',
            objectFit: 'cover',
          }}
        />
      </Box>
      <CardContent movie={movie} />
    </Box>
  );
}
function CardContent({ movie }) {
  const navigate = useNavigate();

  return (
    <Stack
      className="cardContent"
      position="absolute"
      top="0"
      width="100%"
      sx={{ visibility: 'hidden' }}
      height="100%"
    >
      <Stack p={1} height="100%" direction="column" justifyContent="center">
        <Typography
          variant="h6"
          textAlign="center"
          my={1}
          mt="auto"
          lineHeight="21px"
        >
          {movie?.title}
        </Typography>
        <Typography fontSize="15px" fontWeight="300" mb={1}>
          {movie?.overview?.substring(0, 100)}...
        </Typography>
        <div>
          {movie?.vote_average !== undefined && (
            <Rating
              name="size-medium"
              value={movie.vote_average}
              precision={0.5}
              sx={{ mr: '1px' }}
              max={10}
              size="small"
            />
          )}
          <Typography variant="caption" fontSize="15px" mb={0}>
            {movie?.vote_average}
          </Typography>
        </div>
        <Typography variant="caption" fontSize="12px" ml={0}>
          Votos totales: ({movie?.popularity})
        </Typography>
        <Typography
          fontSize="15px"
          fontWeight="300"
          mb={0}
          color="textSecondary"
        >
          Estreno:
          <Typography
            ml={1}
            fontSize="13px"
            fontWeight="400"
            component="span"
            color="textPrimary"
          >
            {moment(movie?.release_date).format('LL')}
          </Typography>
        </Typography>
        <Typography fontSize="15px" color="textSecondary" fontWeight="300">
          <Typography
            fontSize="15px"
            color="primary.light"
            fontWeight="600"
            component="span"
            mr={2}
          >
            Genero
          </Typography>
          Acción
        </Typography>

        <Button
          size="small"
          variant="contained"
          fullWidth
          sx={{ m: 'auto', mt: 'auto' }}
          color="primary"
          endIcon={<PlayCircleOutlineIcon />}
          onClick={() => navigate(`/movies/${movie?.id}`)}
        >
          Ver Pelicula
        </Button>
      </Stack>
    </Stack>
  );
}

export default MovieCard;
