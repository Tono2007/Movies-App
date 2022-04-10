import { constants } from '../../utils/constants';
// MUI Stuff
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
//Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
//Components
import Logo from '../Logo';

function Footer() {
  return (
    <Box
      width="100%"
      bgcolor={(theme) => theme.palette.gray.dark}
      px="5%"
      pt={5}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <Logo />

        <Stack direction="row" spacing={1}>
          <Link
            href={constants.siteData.siteRepo}
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconButton aria-label="network" color="secondary">
              <FacebookIcon />
            </IconButton>
          </Link>
          <Link
            href={constants.siteData.siteRepo}
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconButton aria-label="network" color="secondary">
              <TwitterIcon />
            </IconButton>
          </Link>
          <Link
            href={constants.siteData.siteRepo}
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconButton aria-label="network" color="secondary">
              <GoogleIcon />
            </IconButton>
          </Link>
          <Link
            href={constants.siteData.siteRepo}
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconButton aria-label="network" color="secondary">
              <GitHubIcon />
            </IconButton>
          </Link>
        </Stack>
      </Stack>

      <Grid container spacing={1} m="auto" px="4%" my={1} mb={3}>
        <Grid item xs={6} sm={6} md={3}>
          <Stack spacing={1}>
            <Typography variant="h6" my={1}>
              Mapa del Sitio
            </Typography>
            <FooterLink text="Peliculas" />
            <FooterLink text="Series" />
            <FooterLink text="Buscador" />
            <FooterLink text="Imagenes" />
            <FooterLink text="Videos" />
            <FooterLink text="Actores" />
            <FooterLink text="Blog" />
          </Stack>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Stack spacing={1}>
            <Typography variant="h6" my={1}>
              Terminos de Uso
            </Typography>
            <FooterLink text="Aviso de privacidad " />
            <FooterLink text="Jurisdicción aplicable." />
            <FooterLink text="Terminos y Condiciones" />
          </Stack>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Stack spacing={1}>
            <Typography variant="h6" my={1}>
              FAQ
            </Typography>
            <FooterLink text="Como Buscar" />
            <FooterLink text="Peliculas" />
            <FooterLink text="Series" />
          </Stack>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Stack spacing={1}>
            <Typography variant="h6" my={1}>
              Privacidad
            </Typography>
            <FooterLink text="Peliculas" />
            <FooterLink text="Series" />
            <FooterLink text="Buscador" />
            <FooterLink text="Imagenes" />
          </Stack>
        </Grid>
      </Grid>

      <Divider
        variant="middle"
        sx={{ bgcolor: (theme) => theme.palette.primary.dark }}
      />
      <Typography variant="subtitle1" textAlign="center" py={2}>
        💻 - Construido por{' '}
        <Link
          underline="hover"
          color="primary.light"
          sx={{ cursor: 'pointer' }}
          href="https://antonioayola.netlify.app/"
          target="_blank"
          rel="noreferrer noopener"
          fontWeight="medium"
        >
          @Antonio Ayola
        </Link>{' '}
        con 🖤 en 2022 &#x1F1F2;&#x1F1FD;
      </Typography>
    </Box>
  );
}

function FooterLink({ text }) {
  return (
    <Link
      variant="body2"
      fontWeight="300"
      href="#!"
      color="secondary"
      underline="hover"
      sx={{
        '&:hover': {
          '& svg': {
            opacity: '1',
            ml: 2,
          },
        },
      }}
    >
      <span style={{ marginRight: '15px' }}>•</span>
      {text}
      <ArrowForwardIosIcon
        color="primary"
        sx={{ transition: '0.3s', fontSize: '11px', ml: 0, opacity: '0' }}
      />
    </Link>
  );
}

export default Footer;
