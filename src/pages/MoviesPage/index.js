import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

//MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SvgIcon from '@mui/material/SvgIcon';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Alert from '@mui/material/Alert';

//Icons
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TheatersIcon from '@mui/icons-material/Theaters';
//Components
import MovieCard from '../../components/MovieCard';
//assets
import wallpaper from '../../assets/images/wallpaper.jpg';
//api
import { getDiscoverMovies } from '../../api/services/movies';
import { getAllMovieGenres } from '../../api/services/catalog';

function MoviesPage() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [pagination, setPagination] = useState({
    pag: 1,
    totalPages: 0,
    totalMovies: 0,
  });

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

  useEffect(() => {
    /* console.log(Object.fromEntries(new URLSearchParams(searchParams)));
    console.log(new URLSearchParams(searchParams));
    console.log([...searchParams]);
    console.log('location', location);
    // eslint-disable-next-line no-restricted-syntax
    for (const entry of searchParams.entries()) {
      // eslint-disable-next-line no-console
      console.log(entry);
    } */
    const getMovies = async () => {
      try {
        const response = await getDiscoverMovies(location?.search);
        console.log(response);
        setMovies(response.data.results);
        setPagination({
          pag: response.data.page,
          totalPages: response.data.total_pages,
          totalMovies: response.data.total_results,
        });
      } catch (error) {
        console.log(error);
        console.log(error.response);
      }
    };
    getMovies();
  }, [location]);

  const handlePagination = (event, value) => {
    setPagination((state) => ({ ...state, pag: value }));
    const actualPath = Object.fromEntries(new URLSearchParams(searchParams));
    setSearchParams({ ...actualPath, page: value });
  };
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const values = Object.fromEntries(data.entries());
    setSearchParams({ ...values, page: 1 });
    //console.log(data.get('with_text_query'));
  }

  return (
    <Box>
      <Box
        width="100%"
        height="60vh"
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
          src={wallpaper}
          sx={{
            filter: 'brightness(0.9)',
            objectFit: 'cover',
          }}
        />
      </Box>
      <Stack m="auto" px="4%" my={2}>
        <Typography
          fontSize="4vw"
          fontWeight="800"
          sx={{
            textTransform: 'uppercase',
            textShadow: (theme) => `3px 3px 0px ${theme.palette.primary.dark}`,
          }}
        >
          Peliculas
        </Typography>
        <Stack
          direction="row"
          spacing={3}
          mt={3}
          alignItems="center"
          component="form"
          onSubmit={handleSubmit}
        >
          <TextField
            fullWidth
            size="small"
            margin="dense"
            defaultValue={searchParams.get('with_text_query')}
            InputProps={{
              name: 'with_text_query',
              startAdornment: (
                <InputAdornment position="start">
                  <SvgIcon fontSize="small" color="action">
                    <SearchIcon />
                  </SvgIcon>
                </InputAdornment>
              ),
            }}
            placeholder="Buscar Pelicula"
            variant="outlined"
          />
          <TextField
            size="small"
            label="Año"
            variant="outlined"
            type="number"
            name="year"
            max="2099"
            defaultValue={searchParams.get('year')}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarMonthIcon />
                </InputAdornment>
              ),
            }}
          />
          {genres.length > 0 && (
            <TextField
              select
              name="with_genres"
              /*    value={formValues.hearAboutUs}
            error={error.error}
            onChange={handleChange} */
              size="small"
              label="Genero"
              SelectProps={{
                native: true,
                defaultValue: searchParams.get('with_genres'),
                startAdornment: (
                  <InputAdornment position="start">
                    <TheatersIcon />
                  </InputAdornment>
                ),
              }}
            >
              <option value=" " disabled>
                Selecciona una opción
              </option>
              <option value="">Todos</option>
              {genres.map((genre) => (
                <option value={genre.id} key={genre.id}>
                  {genre.name}
                </option>
              ))}
            </TextField>
          )}
          <Button
            size="medium"
            variant="contained"
            endIcon={<SearchIcon />}
            sx={{ minWidth: '130px' }}
            type="submit"
          >
            Buscar
          </Button>
        </Stack>
        <Typography variant="suntitle" mb={3} mt={2}>
          Filtros:
          <Stack direction="row" spacing={1}>
            {[...searchParams].filter((entry) => entry[1] !== '').length ===
              0 && <Chip label="Sin Filtros" size="small" />}
            {[...searchParams]
              .filter((entry) => entry[1] !== '')
              .map((entry, index) => {
                const preLabel = {
                  year: 'Año: ',
                  with_genres: 'Genero: ',
                  with_text_query: 'Buscar: ',
                  page: 'Pagina: ',
                  sort_by: 'Peliculas ',
                };
                const sortByLabels = {
                  'popularity.desc': 'Mas Populares',
                  'vote_average.desc': 'Mejor Calificadas: ',
                  'primary_release_date.desc': 'mas recientes',
                  page: 'Pagina: ',
                  sort_by: 'Peliculas ',
                };
                let label = `${preLabel[entry[0]]} ${entry[1]}`;
                if (entry[0] === 'with_genres') {
                  label = `${preLabel[entry[0]]} ${
                    genres.find((genre) => genre.id === Number(entry[1]))?.name
                  }`;
                }
                if (entry[0] === 'sort_by') {
                  label = `${preLabel[entry[0]]} ${sortByLabels[entry[1]]}`;
                }

                return <Chip label={label} size="small" key={index} />;
              })}
          </Stack>
        </Typography>
        <Typography variant="h6" mb={3} mt={2}>
          {[...searchParams].filter((entry) => entry[1] !== '').length === 0
            ? 'Todas las Peliculas'
            : 'Resultados'}
        </Typography>
        <Divider
          variant="middle"
          sx={{ bgcolor: (theme) => theme.palette.primary.dark }}
        />
        <Typography textAlign="right" variant="caption">
          Pagina {pagination.pag} de{' '}
          {pagination.totalPages < 500 ? pagination.totalPages : 500} |
          Peliculas: {pagination.totalMovies}
        </Typography>
        <Grid container spacing={4} my={2}>
          {movies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={movie.id}>
              <MovieCard movie={movie} genres={genres} />
            </Grid>
          ))}
        </Grid>
        <Pagination
          sx={{ m: 'auto', my: 3 }}
          count={pagination.totalPages < 500 ? pagination.totalPages : 500}
          page={pagination.page}
          onChange={handlePagination}
          size="large"
          color="primary"
          showFirstButton
          showLastButton
          siblingCount={2}
          boundaryCount={2}
        />
        <Alert severity="info">
          En orden con la API de TMBD solo se proporcionan con un maximo las
          primeras 500 paginas.
        </Alert>
      </Stack>
    </Box>
  );
}

export default MoviesPage;
