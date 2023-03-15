import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSessionId } from '../../utils/helpers/helpers';
//MUI
import Stack from '@mui/material/Stack';
//API
import {
  getMovie,
  getMovieKeywords,
  getMovieCredits,
  getMovieImages,
  getSimilarMovies,
  getMovieTitles,
  getMovieVideos,
} from '../../api/services/movies';
import { getAllMovieGenres } from '../../api/services/catalog';
import { getAccountStates } from '../../api/services/account';

//Components
import Banner from '../../components/Banner';
import Loader from '../../components/Loader';

import RelatedMovies from './RelatedMovies';
import Cast from './Cast';
import OverView from './OverView';
import Keywords from './Keywords';
import Collection from './Collection';
import Multimedia from './Multimedia';
import Ratings from './Ratings';

function MoviePage() {
  const { idMovie } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const [movie, setMovie] = useState({});
  const [keywords, setKeywords] = useState([]);
  const [credits, setCredits] = useState([]);
  const [imgs, setImgs] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [titles, setTitles] = useState([]);
  const [videos, setVideos] = useState([]);
  const [genres, setGenres] = useState([]);
  const [accountStates, setAccountStates] = useState(null);

  useEffect(() => {
    const getDetails = async () => {
      try {
        setIsLoading(true);
        const responseMovie = await getMovie(idMovie);
        console.log(responseMovie);
        setMovie(responseMovie.data);
        if (getSessionId() !== '') {
          const responseAccount = await getAccountStates({
            movieId: idMovie,
            sessionId: getSessionId(),
          });
          console.log('//////////////////////', responseAccount);
          setAccountStates(responseAccount.data);
        }
        const responses = await Promise.all([
          getMovieKeywords(idMovie),
          getMovieCredits(idMovie),
          getMovieImages(idMovie),
          getMovieTitles(idMovie),
          getAllMovieGenres(),
        ]);
        console.log(responses);
        setKeywords(responses[0].data.keywords);
        setCredits(responses[1].data);
        setImgs(responses[2].data);
        setTitles(responses[3].data.titles);
        setGenres(responses[4].data.genres);

        setTimeout(async () => {
          const responseVideos = await getMovieVideos(idMovie);
          // eslint-disable-next-line no-console
          console.log(responseVideos);
          setVideos(responseVideos.data.results);
          const response = await getSimilarMovies(idMovie);
          // eslint-disable-next-line no-console
          console.log(response);
          setSimilarMovies(response.data.results);
        }, 2000);
      } catch (error) {
        console.log(error);
        console.log(error?.response);
      } finally {
        setIsLoading(false);
      }
    };
    getDetails();
  }, [idMovie]);

  return isLoading ? (
    <Loader my="20vh" />
  ) : (
    <>
      <Banner
        showCover
        caption="PELICULA"
        id={idMovie}
        trailer={videos.find((video) => video.type === 'Trailer')}
      />
      <Stack m="auto" px={{ xs: '2%', sm: '4%' }} mb={9}>
        <OverView
          movie={movie}
          credits={credits}
          titles={titles}
          trailer={videos.find((video) => video.type === 'Trailer')}
          accountStates={accountStates}
        />

        <Cast credits={credits} />
        <Multimedia movie={movie} imgs={imgs} videos={videos} />
        <Keywords keywords={keywords} />
        <Collection movie={movie} genres={genres} />
        <Ratings idMovie={idMovie} movie={movie} />
        <RelatedMovies similarMovies={similarMovies} genres={genres} />
      </Stack>
    </>
  );
}

export default MoviePage;
