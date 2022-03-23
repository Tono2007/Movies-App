import React from 'react';
import Box from '@mui/material/Box';

function MoviesPage() {
  return (
    <Box bgcolor="#d3d3d3" height="200vh">
      <Box
        width="100%"
        height="105vh"
        position="relative"
        sx={{
          '&:after': {
            content: '""',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'absolute',
            background:
              'linear-gradient(90deg, rgba(18,20,19,1) 0%, transparent 60%)',
            boxShadow: 'inset 0px -90px 30px -35px #12141D',
          },
        }}
      >
        <Box
          alt="banner"
          width="100%"
          height="100%"
          component="img"
          src="https://picsum.photos/800/800"
          sx={{
            filter: 'brightness(0.99)',
            objectFit: 'cover',
          }}
        />
      </Box>
      Movies Page
    </Box>
  );
}

export default MoviesPage;
