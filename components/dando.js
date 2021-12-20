import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react';

export function DanDo() {
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
              marginTop: '8rem',
              color: '#fff',
            }}
          >
            <Typography
              color="primary"
              sx={{
                fontWeight: 'bold',
                marginBottom: '4rem',
                fontSize: '3.4rem',
                textAlign: 'center',
              }}
            >
              DẶN DÒ
            </Typography>

            <Typography
              color="primary"
              sx={{ fontWeight: 'bold', marginBottom: '4rem', fontSize: '3.4rem' }}
            >
              1. Chia sẻ điều ước, những tâm sự của mình với ông già Noel.
            </Typography>
            <Typography color="primary" sx={{ fontWeight: 'bold', fontSize: '3.4rem' }}>
              2. Thực hành nói lời chúc an lành, yêu thương tới mọi người nhân dịp giáng sinh.
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '1rem',
              color: '#fff',
            }}
          >
            <Typography
              color="primary"
              sx={{
                fontWeight: 'bold',
                marginBottom: '2rem',
                fontSize: '2rem',
                textAlign: 'center',
              }}
            >
              DẶN DÒ
            </Typography>

            <Typography
              color="primary"
              sx={{ fontWeight: 'bold', marginBottom: '2rem', fontSize: '1.75rem' }}
            >
              1. Chia sẻ điều ước, những tâm sự của mình với ông già Noel.
            </Typography>
            <Typography color="primary" sx={{ fontWeight: 'bold', fontSize: '1.75rem' }}>
              2. Thực hành nói lời chúc an lành, yêu thương tới mọi người nhân dịp giáng sinh.
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
