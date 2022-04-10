import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
//Components
import Banner from '../../components/Banner';
import RelatedMovies from './RelatedMovies';
import Cast from './Cast';
import OverView from './OverView';
import Keywords from './Keywords';
import Collection from './Collection';
import Multimedia from './Multimedia';
import Loader from '../../components/Loader';

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

  useEffect(() => {
    const getDetails = async () => {
      try {
        setIsLoading(true);

        const responses = await Promise.all([
          getMovie(idMovie),
          getMovieKeywords(idMovie),
          getMovieCredits(idMovie),
          getMovieImages(idMovie),
          getMovieTitles(idMovie),
          getAllMovieGenres(),
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
        setGenres(responses[5].data.genres);
      } catch (error) {
        console.log(error);
        console.log(error.response);
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
        />
        <Cast credits={credits} />
        <Multimedia movie={movie} imgs={imgs} videos={videos} />
        <Keywords keywords={keywords} />
        <Collection movie={movie} genres={genres} />
        <RelatedMovies similarMovies={similarMovies} genres={genres} />
      </Stack>
    </>
  );
}

export default MoviePage;
