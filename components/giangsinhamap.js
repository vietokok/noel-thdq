import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react';

export function GiangSinhAmAp() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  return (
    <Box>
      <Box
        sx={{
          padding: matches ? '2rem 6rem' : '2rem 1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {matches ? (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '8rem',
              color: '#fff',
            }}
          >
            <Typography color="primary" sx={{ fontWeight: 'bold', fontSize: '5rem' }}>
              Giáng sinh ấm áp - Lan tỏa yêu thương !
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '8rem',
              color: '#fff',
            }}
          >
            <Typography color="primary" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
              Giáng sinh ấm áp
            </Typography>
            <Typography color="primary" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
              Lan tỏa yêu thương !
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
