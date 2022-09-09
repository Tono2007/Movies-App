import { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
//MUI
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

//Icons
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
//Components
import Logo from '../../components/Logo';

function Login() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({ nickname: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ error: false, message: '' });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  //Form Submit

  return (
    <Box
      sx={{
        backgroundImage: (theme) =>
          //`linear-gradient(45deg, rgba(105,115,170,1) 0%, rgba(127,153,116,1) 33%, rgba(115,164,159,1) 66%, rgba(205,115,134,1) 100%)`,
          //`linear-gradient(to Right Bottom,${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.dark} 33%, ${theme.palette.primary.dark} 55%,${theme.palette.secondary.dark} 66%, ${theme.palette.secondary.dark} 100%)`,
          `linear-gradient(to Right Bottom,${theme.palette.secondary.dark} 10%, ${theme.palette.primary.light} 80%,${theme.palette.primary.dark} 100% )`,

        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mb: -3,
      }}
    >
      <Box
        sx={{
          p: 4,
          m: 1,
          boxShadow: 20,
          bgcolor: 'background.default',
          width: {
            xs: '90%',
            sm: '450px ',
            md: '30%',
          },
          minHeight: '525px',
          borderRadius: '4px',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <Logo />
        {/* <Link href="/welcome" underline="none" sx={{ textAlign: 'center' }}>
          <Typography
            variant="h4"
            color="textSecondary"
            align="center"
            component="span"
            gutterBottom
          >
            &nbsp; &nbsp;
            <strong>Scale Radical</strong>
          </Typography>
        </Link> */}
        {/* <Box textAlign="center" m={2} component={RouterLink} to="/">
          <img
            src={logoS}
            alt="mithoa"
            style={{
              width: '200px',
              height: 'auto',
              m: 'auto',
            }}
          />
        </Box> */}

        {/*  <Stack
          bgcolor="primary.dark"
          mt={-4}
          mx={-4}
          py={2}
          px={2}
          direction="row"
          spacing={0}
          justifyContent={{
            xs: 'center',
            sm: 'space-between',
            md: 'center',
            lg: 'space-between',
          }}
          mb={2}
          component={RouterLink}
          to="/"
        >
          <Box
            component="img"
            src={whiteTextNoBg}
            alt="mithoa"
            sx={{
              //width: 'auto',
              width: { xs: '100%', sm: '50%', md: '100%', lg: '50%' },
              height: 'auto',
              objectFit: 'contain',
              maxHeight: '60px',
              display: { sm: 'inline', md: 'inline', lg: 'inline' },
            }}
          />
          <Box
            component="img"
            src={SRWhiteLogo}
            alt="mithoa"
            sx={{
              width: 'auto',
              height: '60px',
              display: { xs: 'none', sm: 'inline', md: 'none', lg: 'inline' },
            }}
          />
        </Stack> */}

        {/*  <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
          Acceso
        </Typography> */}
        <Typography variant="h4" align="left" mb={5} mt={2}>
          ¡Bienvenido!
        </Typography>
        <Typography variant="body1" align="left" color="textSecondary">
          Inicie sesión para continuar.
        </Typography>
        <form onSubmit={() => window.alert(':P')}>
          <TextField
            required
            error={error.error}
            autoFocus
            id="nickname"
            name="nickname"
            label="Usuario"
            margin="normal"
            value={formValues.nickname}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            required
            error={error.error}
            id="password"
            name="password"
            type="password"
            margin="normal"
            label="Contraseña"
            value={formValues.password}
            variant="outlined"
            onChange={handleChange}
            helperText={error.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOpenOutlinedIcon />
                </InputAdornment>
              ),
            }}
            fullWidth
          />
          <br /> <br />
          {isLoading ? (
            <CircularProgress
              sx={{
                m: 'auto',
              }}
            />
          ) : (
            <Button
              type="submit"
              variant="contained"
              endIcon={<LoginIcon />}
              fullWidth
              color="primary"
            >
              Iniciar Sesión
            </Button>
          )}
        </form>

        <Button
          sx={{ mt: 2 }}
          variant="outlined"
          fullWidth
          color="secondary"
          onClick={() => {
            navigate('/signup');
          }}
        >
          Registrarse
        </Button>
        <Link
          to="/login"
          variant="body2"
          component={RouterLink}
          sx={{ mt: 2, mb: 0 }}
        >
          ¿Has olvidado tu contraseña?
        </Link>
      </Box>
    </Box>
  );
}
export default Login;
