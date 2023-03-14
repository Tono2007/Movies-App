import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setSessionId } from '../../utils/helpers/helpers';

//MUI
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
//Icons
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MovieIcon from '@mui/icons-material/Movie';
//Components
import Logo from '../../components/Logo';
import SnackBar from '../../components/SnackBar';
//API
import {
  getRequestToken,
  authByLogin,
  createSession,
} from '../../api/services/authentication';
import { getAccountDetails } from '../../api/services/account';
import { constants } from '../../utils/constants';

/* const features = {
  popup: 'yes',
  width: 600,
  height: 700,
  top: 'auto',
  left: 'auto',
  toolbar: 'no',
  menubar: 'no',
};
const strWindowsFeatures = Object.entries(features)
  .reduce((str, [key, value]) => {
    // eslint-disable-next-line eqeqeq
    if (value == 'auto') {
      if (key === 'top') {
        const v = Math.round(window.innerHeight / 2 - features.height / 2);
        // eslint-disable-next-line no-param-reassign
        str += `top=${v},`;
      } else if (key === 'left') {
        const v = Math.round(window.innerWidth / 2 - features.width / 2);
        // eslint-disable-next-line no-param-reassign
        str += `left=${v},`;
      }
      return str;
    }

    // eslint-disable-next-line no-param-reassign
    str += `${key}=${value},`;
    return str;
  }, '')
  .slice(0, -1); */
function Login() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({ nickname: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ error: false, message: '' });
  const [handleSnackbar, setHandleSnackbar] = useState({
    open: false,
    text: '',
  });

  const [externalPopup, setExternalPopup] = useState(null);

  useEffect(() => {
    if (!externalPopup) {
      return;
    }

    const timer = setInterval(() => {
      console.log('interval');
      if (!externalPopup) {
        timer && clearInterval(timer);
        return;
      }
      const currentUrl = externalPopup.location.href;
      if (!currentUrl) {
        return;
      }
      const { searchParams } = new URL(currentUrl);
      const approved = searchParams.get('approved');
      const reqToken = searchParams.get('request_token');
      console.log('cambio popup');
      if (approved && reqToken) {
        externalPopup.close();
        console.log(
          `The popup URL has URL code param = ${reqToken} status is ${approved}`,
        );

        handleSession(reqToken);
        timer && clearInterval(timer);
      }
    }, 500);
  }, [externalPopup]);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formValues.nickname === '' || formValues.password === '') {
      setError({ error: true, message: 'Llenar todos los campos' });
      setHandleSnackbar({
        open: true,
        text: 'Llenar todos los campos',
        type: 'warning',
      });
      return;
    }
    console.log(formValues);
    try {
      setIsLoading(true);
      const tokenResponse = await getRequestToken();
      console.log(tokenResponse);
      const payload = {
        username: formValues.nickname,
        password: formValues.password,
        requestToken: tokenResponse.data.request_token,
      };
      const authorizeResponse = await authByLogin(payload);
      console.log(authorizeResponse);
      const sessionResponse = await createSession(
        authorizeResponse?.data?.request_token,
      );
      handleSession(sessionResponse?.data?.session_id);
    } catch (submitError) {
      console.log(submitError);
      console.log(submitError.response);
      setError({ error: true, message: 'Error al iniciar sesión' });
      setHandleSnackbar({
        open: true,
        text:
          submitError?.response?.data?.status_message ??
          'Error al iniciar sesión',
        type: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const tmdbLoginHandler = async () => {
    try {
      setIsLoading(true);
      const tokenResponse = await getRequestToken();
      const requestToken = tokenResponse.data.request_token;
      console.log(tokenResponse);

      /*  const popup = window.open(
        'https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}',
        'popup',
        'popup=true',
      ); 
       */
      // window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${redirectURL}/approved`;
      const redirectURL = constants.siteData.deployUrl;

      const url = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${redirectURL}/approved`;
      // window.open(url, '_blank', strWindowsFeatures);

      const popupWidth = 600;
      const popupHeight = 700;
      const left = window.screenX + (window.outerWidth - popupWidth) / 2;
      const top = window.screenY + (window.outerHeight - popupHeight) / 2.5;
      const title = `TMDB Auth`;
      const popup = window.open(
        url,
        title,
        `width=${popupWidth},height=${popupHeight},left=${left},top=${top}`,
      );
      setExternalPopup(popup);
    } catch (submitError) {
      console.log(submitError);
      console.log(submitError.response);
      setError({ error: true, message: 'Error al iniciar sesión' });
      setHandleSnackbar({
        open: true,
        text:
          submitError?.response?.data?.status_message ??
          'Error al iniciar sesión',
        type: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSession = async (reqToken) => {
    try {
      setIsLoading(true);
      const sessionResponse = await createSession(reqToken);
      setSessionId(sessionResponse?.data?.session_id);
      /* const responseUserData = await getAccountDetails();
      console.log(responseUserData);
      setUserData(responseUserData.data); */
      navigate('/');
    } catch (submitError) {
      console.log(submitError);
      console.log(submitError.response);
      setError({ error: true, message: 'Error al iniciar sesión' });
      setHandleSnackbar({
        open: true,
        text:
          submitError?.response?.data?.status_message ??
          'Error al iniciar sesión',
        type: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  };

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
      <SnackBar
        openSnackbar={handleSnackbar.open}
        fnCloseSnackbar={() => setHandleSnackbar(false)}
        data={{ text: handleSnackbar.text }}
        type={handleSnackbar.type}
      />
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
          gap: 2,
          overflow: 'hidden',
        }}
      >
        <Logo />

        <div>
          <Typography variant="h4">¡Bienvenido!</Typography>
          <Typography variant="body1">Inicie sesión para continuar.</Typography>
        </div>

        <Button
          title="Iniciar sesión"
          type="submit"
          variant="outlined"
          disabled={isLoading}
          endIcon={
            <>
              <img
                width="110px"
                height="auto"
                alt="tmdblogo"
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              />
              {isLoading && (
                <CircularProgress color="secondary" size={20} sx={{ ml: 1 }} />
              )}
            </>
          }
          fullWidth
          color="primary"
          onClick={tmdbLoginHandler}
        >
          Ingresar por
        </Button>
        <Divider sx={{ my: 2 }} />

        <form onSubmit={handleSubmit}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2" color="textSecondary">
              Ingrese las credenciales de su cuenta de
            </Typography>
            <img
              width="40px"
              height="auto"
              alt="tmdblogo"
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            />
          </Stack>
          <TextField
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
            color="secondary"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
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
            color="secondary"
            sx={{ mb: 2 }}
          />

          <Button
            title="Iniciar sesión"
            type="submit"
            disabled={isLoading}
            fullWidth
            color="secondary"
            endIcon={
              isLoading ? (
                <CircularProgress
                  color="secondary"
                  size={20}
                  sx={{ my: 'auto' }}
                />
              ) : (
                <MovieIcon />
              )
            }
            sx={{
              color: 'white',
              background:
                'linear-gradient(90deg, rgba(139,205,163,1) 0%, rgba(3,180,228,1) 100%)',
              '&:hover': {
                background:
                  'linear-gradient(90deg, rgba(3,180,228,1) 0%, rgba(139,205,163,1) 100%)',
              },
            }}
          >
            Iniciar Sesión
          </Button>
        </form>

        <Typography variant="body2">
          ¿No tienes una cuenta?
          <Link
            title="Registro TMDB"
            href="https://www.themoviedb.org/signup"
            target="_blank"
            rel="noreferrer noopener"
            sx={{ ml: 1 }}
          >
            Registrate aqui
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
export default Login;
