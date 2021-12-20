import { Box, useMediaQuery } from '@mui/material';
import React from 'react';

export function NoelVideo() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          height: '100vh',
        }}
      >
        <iframe
          style={{ width: matches ? '70vw' : '90vw', height: matches ? '70vh' : '30vh', border: 0 }}
          src="https://www.youtube.com/embed/g-OF7KGyDis"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
    </Box>
  );
}
