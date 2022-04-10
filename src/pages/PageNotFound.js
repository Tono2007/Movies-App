import { useLocation } from 'react-router-dom';
//MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
//Icons
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

function PageNotFound() {
  return (
    <Box
      mt="10vh"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: '5%',
        px: { xs: '5%', sm: '20%' },
        color: 'text.secondary',
      }}
    >
      <Box textAlign="center">
        <SentimentVeryDissatisfiedIcon sx={{ fontSize: 150 }} />
        <Typography variant="h1" paragraph>
          404
        </Typography>
        <Typography variant="h3" paragraph>
          Page not found
        </Typography>
        <Typography variant="h5" paragraph align="center">
          {`The page you are looking for ${
            useLocation().pathname
          } doesn't exist or an other error ocurred. Go back, or choose a new direction`}
        </Typography>
      </Box>
    </Box>
  );
}

export default PageNotFound;
