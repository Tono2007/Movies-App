import { useEffect, useState } from 'react';
import { getSessionId } from '../../utils/helpers/helpers';
import { useGlobalContext } from '../../context/GlobalContext';

//MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
//Icons
import MovieIcon from '@mui/icons-material/Movie';
//API
import { getAllMovieGenres } from '../../api/services/catalog';
import { getMyFavoriteMovies } from '../../api/services/account';

//Components
import Loader from '../../components/Loader';
import MovieCard from '../../components/MovieCard';

function WatchlistPage() {
  const { userData } = useGlobalContext();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [totalMovies, setTotalMovies] = useState(0);
  useEffect(() => {
    (async () => {
      try {
        if (getSessionId() !== '') {
          const response = await getMyFavoriteMovies(getSessionId());
          setMovies(response.data.results);
          setTotalMovies(response.data.total_results);
        }
      } catch (error) {
        console.log(error);
        console.log(error.response);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [userData]);

  return (
    <>
      <Box
        width="100%"
        height="30vh"
        position="relative"
        sx={{
          '&:after': {
            content: '""',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'absolute',
            boxShadow: (theme) =>
              `inset 0px -90px 30px -35px ${theme.palette.background.default}`,
          },
        }}
      >
        <Box
          position="absolute"
          alt="banner"
          width="100%"
          height="100%"
          component="img"
          src="https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_960_720.jpg"
          sx={{
            filter: 'brightness(0.9)',
            objectFit: 'cover',
          }}
        />
      </Box>
      <Stack m="auto" px="4%" my={2}>
        <Stack direction="row" justifyContent="space-between">
          <Typography
            fontSize={{ xs: '4vw', sm: '2vw' }}
            fontWeight="800"
            sx={{
              textTransform: 'uppercase',
              textShadow: (theme) =>
                `3px 3px 0px ${theme.palette.primary.dark}`,
            }}
          >
            Mis Peliculas vistas
          </Typography>
          <Link
            title="Favoritos TMDB"
            href={`https://www.themoviedb.org/u/${userData?.username}/watchlist`}
            target="_blank"
            rel="noreferrer noopener"
          >
            Ver en TMDB
          </Link>
        </Stack>
        <Typography>Total: {totalMovies}</Typography>
        {isLoading && <Loader />}
        <Grid container spacing={0} my={2}>
          {movies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={movie.id}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </>
  );
}

export default WatchlistPage;
