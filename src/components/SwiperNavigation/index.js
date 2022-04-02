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

function SwiperNavigation({ classBtns, ...rest }) {
  return (
    <>
      {/* <Stack
      direction="row"
      justifyContent="space-between"
      position="absolute"
      top="50%"
      left="0"
      width="100%"
      p={1}
      zIndex={1}
      {...rest}
    >
      <IconButton
        className={classBtns[0]}
        aria-label="delete"
        size="large"
        color="secondary"
        sx={{ bgcolor: 'rgba(20,20,20,0.20)', backdropFilter: 'blur(0.625em)' }}
      >
        <ArrowBackIosIcon sx={{ color: '#fafafa' }} />
      </IconButton>
      <IconButton
        className={classBtns[1]}
        aria-label="delete"
        size="large"
        color="secondary"
        sx={{ bgcolor: 'rgba(20,20,20,0.20)', backdropFilter: 'blur(0.625em)' }}
      >
        <ArrowForwardIosIcon sx={{ color: '#fafafa' }} />
      </IconButton>
    </Stack> */}
      <Box position="absolute" top="50%" left="0" zIndex={1} {...rest}>
        <IconButton
          className={classBtns[0]}
          aria-label="delete"
          size="large"
          color="secondary"
          sx={{
            bgcolor: 'rgba(20,20,20,0.20)',
            backdropFilter: 'blur(0.625em)',
          }}
        >
          <ArrowBackIosIcon sx={{ color: '#fafafa' }} />
        </IconButton>
      </Box>
      <Box position="absolute" top="50%" right="0" zIndex={1} {...rest}>
        <IconButton
          className={classBtns[1]}
          aria-label="delete"
          size="large"
          color="secondary"
          sx={{
            bgcolor: 'rgba(20,20,20,0.20)',
            backdropFilter: 'blur(0.625em)',
          }}
        >
          <ArrowForwardIosIcon sx={{ color: '#fafafa' }} />
        </IconButton>
      </Box>
    </>
  );
}

export default SwiperNavigation;
