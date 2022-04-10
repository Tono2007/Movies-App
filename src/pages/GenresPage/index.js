import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
//Icons
import MovieIcon from '@mui/icons-material/Movie';
//API
import { getAllMovieGenres } from '../../api/services/catalog';
//Components
import Loader from '../../components/Loader';

function GenresPage() {
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getGenres = async () => {
      try {
        setIsLoading(true);
        const response = await getAllMovieGenres();
        console.log(response);
        setGenres(response.data.genres);
      } catch (error) {
        console.log(error);
        console.log(error.response);
      } finally {
        setIsLoading(false);
      }
    };
    getGenres();
  }, []);
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
        <Typography
          fontSize={{ xs: '4vw', sm: '3vw' }}
          fontWeight="800"
          sx={{
            textTransform: 'uppercase',
            textShadow: (theme) => `3px 3px 0px ${theme.palette.primary.dark}`,
          }}
        >
          Generos de Peliculas
        </Typography>
        {isLoading && <Loader />}
        <Grid
          container
          spacing={3}
          my={3}
          justifyContent="center"
          alignContent="center"
          alignItems="center"
          columns={10}
        >
          {genres.map((genre, index) => (
            <Grid item xs={5} md={3} lg={2} key={index}>
              <GenreCard genre={genre} index={index} />
            </Grid>
          ))}
        </Grid>
        <Typography
          fontSize={{ xs: '4vw', sm: '3vw' }}
          fontWeight="800"
          sx={{
            textTransform: 'uppercase',
            textShadow: (theme) => `3px 3px 0px ${theme.palette.primary.dark}`,
          }}
        >
          Generos de Series
        </Typography>
        <Grid
          container
          spacing={3}
          my={3}
          justifyContent="center"
          alignContent="center"
          alignItems="center"
          columns={10}
        >
          {genres.map((genre, index) => (
            <Grid item xs={5} md={3} lg={2} key={index}>
              <GenreCard genre={genre} index={index} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </>
  );
}

function GenreCard({ genre, index }) {
  const navigate = useNavigate();

  return (
    <Box
      p={2}
      border={3}
      borderColor="transparent"
      bgcolor="gray.dark"
      position="relative"
      onClick={() =>
        navigate({
          pathname: '/movies',
          search: `?with_genres=${genre.id}`,
        })
      }
      sx={{
        transition: '0.3s',
        borderRadius: '6px',
        '&:hover': {
          borderColor: 'secondary.main',
          cursor: 'pointer',
          bgcolor: 'gray.main',
          transform: 'scale(1.05)',
          boxShadow: 10,
          '& p span': {
            width: '100%',
            bgcolor: 'primary.dark',
          },
        },
      }}
    >
      <Box
        position="absolute"
        p={0}
        lineHeight="20px"
        textAlign="center"
        fontSize="10px"
        borderRadius="50%"
        top="-10px"
        right="-10px"
        height="20px"
        width="20px"
        bgcolor="primary.light"
        boxShadow={3}
      >
        {index}
      </Box>
      <Stack direction="row" spacing={2} alignItems="center">
        <MovieIcon color="secondary" fontSize="small" />
        <Typography color="textSecondary">
          {genre.name}
          <Box
            component="span"
            bgcolor="gray.dark"
            ml={0}
            display="block"
            borderRadius="25px"
            height="3px"
            width="0%"
            sx={{
              transition: '.4s',
            }}
          />
        </Typography>
      </Stack>
    </Box>
  );
}

export default GenresPage;
