/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
//MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
//icon
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function index() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      position="absolute"
      top="40%"
      zIndex={1}
      width="100%"
      p={1}
    >
      <IconButton
        className="swiper-button-prev-custom"
        aria-label="delete"
        size="large"
        color="secondary"
        sx={{ bgcolor: 'rgba(20,20,20,0.20)', backdropFilter: 'blur(0.625em)' }}
      >
        <ArrowBackIosIcon sx={{ color: '#fafafa' }} />
      </IconButton>
      <IconButton
        className="swiper-button-next-custom"
        aria-label="delete"
        size="large"
        color="secondary"
        sx={{ bgcolor: 'rgba(20,20,20,0.20)', backdropFilter: 'blur(0.625em)' }}
      >
        <ArrowForwardIosIcon sx={{ color: '#fafafa' }} />
      </IconButton>
    </Stack>
  );
}

export default index;
