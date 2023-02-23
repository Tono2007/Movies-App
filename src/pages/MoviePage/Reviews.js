import { useEffect, useState } from 'react';
import 'moment/locale/es';
//Components
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

//API
import { getMovieReviews } from '../../api/services/movies';
import ReviewCard from '../../components/ReviewCard';

function Reviews({ idMovie }) {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [language, setLanguage] = useState('en');
  const [total, setTotal] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const response = await getMovieReviews({ idMovie, page, language });
        console.log(response);
        setReviews(response.data.results);
        setTotal(response.data.total_results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [idMovie, language, page]);

  return (
    <Stack
      bgcolor="background.default"
      component="section"
      p="5%"
      direction="column"
    >
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle1" mb={0} fontWeight="400" my={0}>
          Total de reseñas: {total}
        </Typography>
        <TextField
          select
          label="Lenguaje"
          defaultValue="es"
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
          }}
        >
          <MenuItem value="es">Español</MenuItem>
          <MenuItem value="en">Ingles</MenuItem>
        </TextField>
      </Stack>
      <Stack direction="column" gap={5} my={5}>
        {reviews.map((review) => (
          <ReviewCard review={review} />
        ))}
      </Stack>
      <Button variant="outlined">Mostrar mas Reseñas</Button>
    </Stack>
  );
}

export default Reviews;
