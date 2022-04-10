import { useState } from 'react';
//MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
//Icons
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
//Components
import Modal from '../../components/Modal';
//Swiper
import SwiperNavigation from '../../components/SwiperNavigation';
import { Navigation, Scrollbar } from 'swiper';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
//Components
import ModalVideo from '../../components/ModalVideo';

function VideosTab({ videos }) {
  return (
    <Box position="relative">
      <Divider textAlign="center" sx={{ my: 0 }}>
        <Typography variant="caption" mb={0} fontWeight="400" my={0}>
          Videos
        </Typography>
      </Divider>
      <Box
        mx="auto"
        pb={11}
        my={1}
        width="calc(100% - 100px)"
        height={{ xs: '300px', md: '330px', xl: '350px' }}
        component={Swiper}
        grabCursor
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Scrollbar]}
        scrollbar={{
          draggable: true,
          dragSize: 100,
        }}
        breakpoints={{
          240: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1300: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        navigation={{
          nextEl: '.swiper-button-next__moviePage--videos',
          prevEl: '.swiper-button-prev__moviePage--videos',
        }}
        sx={{
          '& .swiper-scrollbar': {
            height: '10px',
            mb: '0',
            bgcolor: 'rgb(23, 26, 43)',
            '& .swiper-scrollbar-drag:hover': {
              bgcolor: 'primary.dark',
            },
          },
        }}
      >
        {videos?.map((video, index) => (
          <SwiperSlide key={index}>
            {
              //video.key
            }
            <ImgCard2 video={video} key={index} />
          </SwiperSlide>
        ))}
      </Box>

      <SwiperNavigation
        classBtns={[
          'swiper-button-prev__moviePage--videos',
          'swiper-button-next__moviePage--videos',
        ]}
        top="45%"
      />
      {/*   <Grid container spacing={4}>
        {similarMovies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}

        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <MovieCard />
        </Grid>
      </Grid> */}
    </Box>
  );
}
function ImgCard({ video }) {
  return (
    <Box
      border={1}
      borderColor="#eee2"
      boxShadow={15}
      alt="banner"
      width="100%"
      height="100%"
      component="img"
      //https://i.ytimg.com/vi/6Cl8PmVm3YE/hqdefault.jpg
      src={`https://img.youtube.com/vi/${video.key}/0.jpg`}
      sx={{
        cursor: 'pointer',
        objectFit: 'cover',
        '&:hover': {
          border: 2,
          borderColor: 'primary.main',
        },
      }}
    />
  );
}
function ImgCard2({ video }) {
  const [openVideoModal, setOpenVideoModal] = useState(false);

  return (
    <>
      <Modal
        openModal={openVideoModal}
        fnCloseModal={() => setOpenVideoModal(false)}
        title={video.name}
        maxWidth="md"
        type
      >
        <ModalVideo video={video} />
      </Modal>
      <Box
        border={1}
        borderColor="#eee2"
        boxShadow={15}
        alt="banner"
        width="100%"
        height="100%"
        textAlign="center"
        onClick={() => setOpenVideoModal(true)}
        //component="img"
        //https://i.ytimg.com/vi/6Cl8PmVm3YE/hqdefault.jpg
        //src={`https://img.youtube.com/vi/${video.key}/0.jpg`}
        sx={{
          transition: 'all 0.3s',
          cursor: 'pointer',
          objectFit: 'cover',
          background: `url(https://img.youtube.com/vi/${video.key}/0.jpg) no-repeat`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(1)',

          '&:hover': {
            filter: 'brightness(0.6)',
            /* border: 2,
            borderColor: 'primary.main', */
            background: `url(https://img.youtube.com/vi/${video.key}/0.jpg) no-repeat , linear-gradient(90deg, rgba(18,20,19,1) 0%, transparent 65%)`,
            objectFit: 'cover',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '& button': {
              mt: '70px',
              opacity: '1',
            },
          },
        }}
      >
        {/*  <Typography variant="caption" bgcolor="#0008" ml={1}>
          {video.name}
        </Typography> */}
        <IconButton
          aria-label="delete"
          size="large"
          onClick={() => setOpenVideoModal(true)}
          sx={{
            mt: '5%',
            mx: 'auto',
            transition: '0.5s',
            opacity: '0',
            color: '#fff',
          }}
        >
          <PlayCircleOutlineIcon fontSize="large" sx={{ fontSize: '90px' }} />
        </IconButton>
      </Box>
      <Stack direction="row" spacing={1} my={1} flexWrap="wrap">
        <Typography variant="caption">{video.name}</Typography>
        {/* {video.official ? 'Oficial' : 'No Oficial'} */}
        <Chip
          variant="filled"
          size="small"
          color="primary"
          label={video.official ? 'Oficial' : 'No Oficial'}
        />
        <Chip variant="outlined" size="small" label={video.type} />
        <Chip variant="outlined" size="small" label={video.site} />
      </Stack>
    </>
  );
}

export default VideosTab;
