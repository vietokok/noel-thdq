import { Box, Button, Container, Typography, useMediaQuery } from '@mui/material';
import React from 'react';

export function QuestionBefore({ handleScreenChange }) {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  const handleScreenChangeClick = () => {
    if (handleScreenChange) {
      handleScreenChange('next');
    }
  };

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
              <Typography sx={{ fontWeight: 'bold' }} variant="h1">
                CÂU HỎI GIAO LƯU
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
              <Typography sx={{ fontWeight: 'bold' }} variant="h4">
                CÂU HỎI GIAO LƯU
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
      <Button
        onClick={handleScreenChangeClick}
        sx={{
          position: 'fixed',
          left: '50%',
          transform: 'translate(-50%, 0)',
          bottom: matches ? 20 : 80,
          fontSize: matches ? '1.5rem' : '1rem',
          textTransform: 'none',
        }}
        variant="contained"
        color="success"
      >
        Bắt đầu
      </Button>
    </Box>
  );
}
