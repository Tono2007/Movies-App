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
  getMovieVideos,
} from '../../api/services/movies';
//compo
import RelatedMovies from './RelatedMovies';
import Cast from './Cast';
import OverView from './OverView';
import Companies from './Companies';
import Keywords from './Keywords';
import Collection from './Collection';
import Multimedia from './Multimedia';

function MovieImg({ img }) {
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
        src={`${constants.api.site}/original${img?.file_path}`}
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
  const [imgs, setImgs] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [titles, setTitles] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const responses = await Promise.all([
          getMovie(idMovie),
          getMovieKeywords(idMovie),
          getMovieCredits(idMovie),
          getMovieImages(idMovie),
          getMovieTitles(idMovie),
        ]);
        const responseVideos = await getMovieVideos(idMovie);
        const response = await getSimilarMovies(idMovie);
        console.log(responseVideos);
        console.log(response);

        setSimilarMovies(response.data.results);
        setVideos(responseVideos.data.results);
        console.log(responses);
        setMovie(responses[0].data);
        setKeywords(responses[1].data.keywords);
        setCredits(responses[2].data);
        setImgs(responses[3].data);
        setTitles(responses[4].data.titles);
      } catch (error) {
        console.log(error);
        console.log(error.response);
      }
    };
    getDetails();
  }, [idMovie]);

  return (
    <>
      <Banner
        showCover
        caption="PELICULA"
        id={idMovie}
        trailer={videos.find((video) => video.type === 'Trailer')}
      />
      <Stack m="auto" px="4%" mb={9}>
        <OverView
          movie={movie}
          credits={credits}
          titles={titles}
          trailer={videos.find((video) => video.type === 'Trailer')}
        />
        <Cast credits={credits} />
        <Multimedia movie={movie} imgs={imgs} videos={videos} />
        <Keywords keywords={keywords} />
        <Collection movie={movie} />
        <RelatedMovies similarMovies={similarMovies} />
      </Stack>
    </>
  );
}

export default MoviePage;
