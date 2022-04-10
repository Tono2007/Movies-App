import { useEffect, useState } from 'react';
import { constants } from '../../utils/constants';
//MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import CircularProgress from '@mui/material/CircularProgress';
//API
import { getPerson } from '../../api/services/people';

function ActorDetail({ id }) {
  const [person, setPerson] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getPersonDetails = async () => {
      try {
        setIsLoading(true);
        const response = await getPerson(id);
        console.log(response);
        setPerson(response.data);
      } catch (error) {
        console.log(error);
        console.log(error.response);
      } finally {
        setIsLoading(false);
      }
    };
    getPersonDetails();
  }, []);
  return (
    <Stack p={2}>
      {isLoading && <CircularProgress />}
      {person?.profile_path && (
        <Box
          alt="banner"
          width="100%"
          height="auto"
          maxHeight="300px"
          component="img"
          src={`${constants.api.site}/original${person?.profile_path}`}
          sx={{
            transition: '0.3s',
            objectFit: 'contain',
          }}
        />
      )}
      <Typography
        fontSize={{ xs: '4vw', sm: '2vw' }}
        fontWeight="800"
        lineHeight="2vw"
        my={2}
        sx={{
          textTransform: 'uppercase',
          textShadow: (theme) => `2px 2px 0px ${theme.palette.primary.light}`,
        }}
      >
        {person?.name}
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {person?.also_known_as?.map((name, index) => (
          <Typography
            key={index}
            borderRadius="10px"
            variant="caption"
            fontSize="10px"
            mb={0}
            display="inline"
            width="auto"
            p="2px 16px"
            bgcolor="#eee1"
          >
            {name}
          </Typography>
        ))}
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        {person?.popularity !== undefined && (
          <Rating
            name="size-large"
            value={person?.popularity}
            precision={0.5}
            sx={{ mr: '5px' }}
            max={10}
            size="small"
          />
        )}

        <Typography variant="subtitle2" fontSize="20px" fontWeight="300">
          {person?.popularity}
          <Typography
            fontSize="10px"
            fontWeight="300"
            display="inline"
            component="span"
          >
            /100
          </Typography>
        </Typography>
      </Stack>
      <Typography variant="body2" mb={0} fontWeight="400" my={1}>
        Nacimiento:
        <Typography
          color="textSecondary"
          component="span"
          variant="body2"
          fontWeight="400"
          ml={1}
        >
          {' '}
          {person?.birthday}
        </Typography>
      </Typography>

      <Typography variant="body2" mb={0} fontWeight="400" my={1}>
        Lugar:
        <Typography
          color="textSecondary"
          component="span"
          variant="body2"
          fontWeight="400"
          ml={1}
        >
          {' '}
          {person?.place_of_birth}
        </Typography>
      </Typography>
      <Typography variant="caption" fontSize="13px" mb={0} width="auto">
        {person?.biography}
      </Typography>
    </Stack>
  );
}

export default ActorDetail;
