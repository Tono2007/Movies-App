import { useState, lazy, Suspense } from 'react';
import { constants } from '../../utils/constants';
//MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
//Swiper
import SwiperNavigation from '../../components/SwiperNavigation';
import { Navigation, Scrollbar } from 'swiper';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
//Components
import Modal from '../../components/Modal';

const ActorDetail = lazy(() => import('../../components/ActorDetail'));

function Cast({ credits }) {
  return (
    <>
      <Divider textAlign="center" sx={{ my: 5 }}>
        <Typography variant="subtitle1" mb={0} fontWeight="400" my={0}>
          Actores Principales
        </Typography>
      </Divider>
      <Box p="5%" bgcolor="gray.dark" pb={4} borderRadius="5px">
        <Box
          pb={5}
          width="100%"
          component={Swiper}
          grabCursor
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Scrollbar]}
          scrollbar={{
            draggable: true,
            dragSize: 100,
          }}
          breakpoints={{
            400: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            900: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          navigation={{
            nextEl: '.swiper-button-next__moviePage--cast',
            prevEl: '.swiper-button-prev__moviePage--cast',
          }}
          sx={{
            '& .swiper-scrollbar': {
              height: '10px',
              mt: 1,
              mb: '-0px',
              bgcolor: 'rgb(23, 26, 43)',
              '& .swiper-scrollbar-drag:hover': {
                bgcolor: 'primary.dark',
              },
            },
          }}
        >
          {credits?.cast
            ?.filter((cast) => cast.profile_path)
            .map((cast) => (
              <SwiperSlide key={cast.id}>
                <ActressCard cast={cast} />
              </SwiperSlide>
            ))}
          <SwiperNavigation
            classBtns={[
              'swiper-button-prev__moviePage--cast',
              'swiper-button-next__moviePage--cast',
            ]}
            zIndex={1}
            m={1}
            top="40%"
          />
        </Box>
      </Box>
    </>
  );
}
function ActressCard({ cast }) {
  const [openActressModal, setOpenActressModal] = useState(false);

  return (
    <div>
      <Modal
        openModal={openActressModal}
        fnCloseModal={() => setOpenActressModal(false)}
        title={cast?.name}
        maxWidth="sm"
        type
      >
        <Suspense fallback={null}>
          <ActorDetail id={cast?.id} />
        </Suspense>
      </Modal>
      <Typography
        borderRadius="10px"
        variant="caption"
        fontSize="9px"
        display="inline"
        width="auto"
      >
        {cast?.character}
      </Typography>
      {cast?.profile_path && (
        <Box
          onClick={() => setOpenActressModal(true)}
          loading="lazy"
          border={3}
          borderColor="#eee4"
          boxShadow={10}
          alt={`${cast?.name || 'profile'} poster`}
          width="100%"
          height={{ xs: '500px', sm: '300px', xl: '500px' }}
          maxHeight="70%"
          component="img"
          src={`${constants.api.site}/h632${cast?.profile_path}`}
          sx={{
            transition: '0.3s',
            objectFit: 'cover',
            '&:hover': {
              transform: 'scale(1.01)',
              cursor: 'pointer',
              borderColor: 'primary.main',
              boxShadow: 20,
            },
          }}
        />
      )}
      <Typography
        borderRadius="10px"
        variant="caption"
        fontSize="14px"
        mb={0}
        display="inline"
        width="auto"
        p="2px 16px"
        bgcolor="#eee1"
      >
        {cast?.name}
      </Typography>
    </div>
  );
}

export default Cast;
