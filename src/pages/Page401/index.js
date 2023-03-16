import { useLocation, Link } from 'react-router-dom';
//MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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
          401
        </Typography>
        <Typography variant="h3" paragraph>
          Page not found - Unauthorized
        </Typography>
        <Typography variant="h5" paragraph align="center">
          {`The page you are looking for ${
            useLocation().pathname
          } doesn't exist or an other error ocurred. Go back, or choose a new direction`}
        </Typography>
        <Typography variant="subtitle2" paragraph align="center">
          Acceso solo disponible para usuarios registrados.
        </Typography>
        <Button
          component={Link}
          to="/login"
          title="Iniciar sesión"
          variant="outlined"
          endIcon={
            <img
              width="110px"
              height="auto"
              alt="tmdblogo"
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            />
          }
          fullWidth
          color="primary"
        >
          Iniciar sesión
        </Button>
      </Box>
    </Box>
  );
}

export default PageNotFound;
