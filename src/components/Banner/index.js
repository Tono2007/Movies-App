import { useEffect, useState } from 'react';
import { constants } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';
import { convertMinsToHrsMins } from '../../utils/helpers/helpers';

import moment from 'moment';
import 'moment/locale/es';
//mi
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

//icon
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
//API
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
function Cover({ id, imgPath }) {
  return (
    <Box
      width="50%"
      height="100%"
      p={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box
        border={3}
        borderColor="#eee4"
        boxShadow={15}
        alt="banner"
        width="50%"
        height="auto"
        maxHeight="70%"
        component="img"
        src={`${constants.api.site}/original${imgPath}`}
        sx={{
          filter: 'brightness(0.99)',
          objectFit: 'cover',
        }}
      />
      <Button
        size="small"
        variant="contained"
        sx={{ width: '200px' /* mt: '-18px'  */, mt: 1 }}
        endIcon={<PlayCircleOutlineIcon />}
      >
        Ver Trailer
      </Button>
    </Box>
  );
}
function Banner(props) {
  const navigate = useNavigate();
  const { showCover, caption, movieBtn, id, genres } = props;
  const [movie, setMovie] = useState({});
  const [keywords, setKeywords] = useState([]);
  const [credits, setCredits] = useState([]);

  //console.log(`${constants.api.site}/original${movie?.backdrop_path}`);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const responses = await Promise.all([
          getMovie(id),
          getMovieKeywords(id),
          getMovieCredits(id),
        ]);
        //console.log(responses);
        setMovie(responses[0].data);
        setKeywords(responses[1].data.keywords);
        setCredits(responses[2].data.cast);
      } catch (error) {
        console.log(error);
        console.log(error.response);
      }
    };
    getDetails();
  }, []);

  return (
    <Box position="relative">
      <Box
        width="100%"
        minHeight="105vh"
        position="absolute"
        sx={{
          '&:after': {
            content: '""',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'absolute',
            background:
              'linear-gradient(90deg, rgba(18,20,19,1) 0%, transparent 60%)',
            boxShadow: 'inset 0px -90px 30px -35px #12141D',
          },
        }}
      >
        <Box
          position="absolute"
          alt="banner"
          width="100%"
          height="100%"
          component="img"
          src={`${constants.api.site}/original${movie?.backdrop_path}`}
          sx={{
            filter: 'brightness(0.99)',
            objectFit: 'cover',
          }}
        />
      </Box>
      <Box
        position="relative"
        left="0"
        top="0"
        width="100%"
        height="105vh"
        display="flex"
        alignItems="center"
        p="3%"
      >
        <Stack
          mt="-1%"
          bgcolor="#21212100"
          p={5}
          width="50%"
          direction="column"
          justifyContent="flex-end"
          alignItems="flex-start"
        >
          <Typography
            variant="caption"
            fontSize="9px"
            mb={0}
            display="inline"
            width="auto"
            p={0.6}
            bgcolor="#eee2"
          >
            {caption}
          </Typography>
          <Typography
            fontSize="6vw"
            fontWeight="800"
            lineHeight="6vw"
            sx={{
              textTransform: 'uppercase',
              textShadow: (theme) =>
                `2px 2px 0px ${theme.palette.primary.light}`,
            }}
          >
            {movie?.original_title}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            {movie?.vote_average !== undefined && (
              <Rating
                name="size-medium"
                value={movie.vote_average}
                precision={0.5}
                sx={{ mr: '5px' }}
                max={10}
                size="medium"
              />
            )}
            <Typography variant="caption" fontSize="17px" mb={0} mr={1}>
              {movie?.vote_average}
            </Typography>
            <Typography variant="caption" fontSize="12px" mb={0}>
              Votos totales: ({movie?.popularity})
            </Typography>
          </Stack>
          <Typography
            fontSize="15px"
            fontWeight="300"
            mb={1}
            color="textSecondary"
          >
            {moment(movie?.release_date).format('LL')} •{' '}
            {convertMinsToHrsMins(movie?.runtime)} {/* • GP-13  */}•{' '}
            {movie?.original_language}
          </Typography>
          <Typography fontSize="15px" fontWeight="300" mb={2}>
            {movie?.overview?.substring(0, 270)}...
          </Typography>
          <Typography fontSize="19px" color="textSecondary" fontWeight="300">
            <Typography
              fontSize="20px"
              color="primary.main"
              fontWeight="600"
              component="span"
              mr={2}
            >
              Generos
            </Typography>
            {movie?.genres?.map((genrer, index) =>
              index !== 0 ? `, ${genrer.name}` : `${genrer.name}`,
            )}
          </Typography>

          <Stack
            direction="row"
            flexWrap="wrap"
            spacing={1}
            alignItems="center"
            alignContent="center"
          >
            <Typography
              fontSize="20px"
              color="primary.main"
              fontWeight="600"
              component="span"
              mr={0}
            >
              Etiquetas
            </Typography>
            {keywords.slice(0, 8).map((keyword) => (
              <GenreChip text={keyword.name} key={keyword.id} />
            ))}
          </Stack>
          <Typography
            fontSize="15px"
            color="textSecondary"
            fontWeight="300"
            mb={3}
          >
            <Typography
              fontSize="20px"
              color="primary.main"
              fontWeight="600"
              component="span"
              mr={2}
            >
              Actores
            </Typography>
            {credits
              .slice(0, 5)
              .map((genrer, index) =>
                index !== 0 ? `, ${genrer.name}` : `${genrer.name}`,
              )}
          </Typography>
          {movieBtn && (
            <Button
              size="large"
              variant="contained"
              sx={{ width: '200px' }}
              endIcon={<PlayCircleOutlineIcon />}
              onClick={() => navigate(`/movies/${movie?.id}`)}
            >
              Ver Pelicula
            </Button>
          )}
        </Stack>
        {showCover && <Cover imgPath={movie?.poster_path} />}
      </Box>
    </Box>
  );
}

export default Banner;