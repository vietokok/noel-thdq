import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import noelMp from '../assets/noelMp.mp3';

export function Home() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  return (
    <Box>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '2rem',
          }}
        >
          {matches ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '9rem',
                color: '#fff',
              }}
            >
              <Typography sx={{ fontWeight: 'bold', fontSize: '4.1rem' }}>
                LIÊN ĐỘI TIỂU HỌC DƯƠNG QUANG
              </Typography>
            </Box>
          ) : (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '9rem',
                color: '#fff',
              }}
            >
              <Typography
                sx={{ fontWeight: 'bold', fontSize: '1.25rem', background: '#eee', color: '#111' }}
              >
                LIÊN ĐỘI TIỂU HỌC DƯƠNG QUANG
              </Typography>
            </Box>
          )}
        </Box>
      </Container>

      {matches && (
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%, 0)',
            bottom: 20,
            fontSize: '1rem',
            textTransform: 'none',
          }}
        >
          <audio controls>
            <source src={noelMp} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </Box>
      )}
    </Box>
  );
}
