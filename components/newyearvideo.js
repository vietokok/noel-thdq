import { Box, useMediaQuery } from '@mui/material';
import React from 'react';

export function NewYearVideo() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <iframe
          style={{ width: matches ? '70vw' : '90vw', height: matches ? '70vh' : '30vh', border: 0 }}
          src="https://www.youtube.com/embed/uNWjvT1wy3I"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
    </Box>
  );
}
