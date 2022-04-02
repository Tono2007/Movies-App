import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { convertMinsToHrsMins } from '../../utils/helpers/helpers';
import { constants } from '../../utils/constants';

import moment from 'moment';
import 'moment/locale/es';
//
import Box from '@mui/material/Box';
import Banner from '../../components/Banner';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Badge from '@mui/material/Badge';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
//icns
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MovieIcon from '@mui/icons-material/Movie';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
//Swiper
import SwiperNavigation from '../../components/SwiperNavigation';
import { Navigation, Pagination, Scrollbar } from 'swiper';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

function Cast({ credits }) {
  return (
    <>
      <Divider textAlign="center" sx={{ my: 5 }}>
        <Typography variant="subtitle1" mb={0} fontWeight="400" my={0}>
          Actores Principales
        </Typography>
      </Divider>
      <Box p={8} bgcolor="gray.dark" pb={4}>
        <Box
          pb={5}
          width="100%"
          component={Swiper}
          grabCursor
          spaceBetween={30}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Scrollbar]}
          scrollbar={{
            draggable: true,
            dragSize: 100,
          }}
          slidesPerView={5}
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
  return (
    <div>
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
          border={3}
          borderColor="#eee4"
          boxShadow={15}
          alt="banner"
          width="100%"
          height="300px"
          maxHeight="70%"
          component="img"
          src={`${constants.api.site}/original${cast?.profile_path}`}
          sx={{
            objectFit: 'cover',
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
