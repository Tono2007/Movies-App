import { useEffect, useState } from 'react';

//Components
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
//API
import { getMovieReviews } from '../../api/services/movies';

function Reviews({ idMovie }) {
  const [reviews, setReviews] = useState([]);

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
      <Divider textAlign="center" sx={{ my: 0 }}>
        <Typography variant="subtitle1" mb={0} fontWeight="400" my={0}>
          Reseñas
        </Typography>
      </Divider>
    </section>
  );
}

export default Reviews;
