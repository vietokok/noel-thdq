import { Box, Button, Container, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function Home() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const router = useRouter();

  const handleRouterChange = (key) => {
    if (key === 'prev') {
      router.push({
        pathname: '/newyear',
      });
    } else {
      router.push({
        pathname: '/question',
      });
    }
  };

  const handleStartClick = () => {
    router.push({
      pathname: '/question',
    });
  };

  useEffect(() => {
    function myKeyDown(e) {
      if (e.key === 'ArrowRight') {
        router.push({
          pathname: '/question',
        });
      } else if (e.key === 'ArrowLeft') {
        router.push({
          pathname: '/newyear',
        });
      }
    }
    document.addEventListener('keydown', myKeyDown);

    return () => {
      document.removeEventListener('keydown', myKeyDown);
    };
  }, [router]);

  return (
    <Box sx={{ position: 'relative', minWidth: '100vw', minHeight: '100vh' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url('/ef.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
          filter: 'blur(0px)',
        }}
      ></Box>
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
      <Box sx={{ opacity: '0' }}>
        <Link href="/question">Goto</Link>
      </Box>
      <Button
        onClick={handleStartClick}
        sx={{
          position: 'absolute',
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
      <Box
        sx={{
          display: 'flex',
          position: 'fixed',
          right: 20,
          bottom: 20,
        }}
      >
        <Button
          onClick={() => handleRouterChange('prev')}
          variant="contained"
          color="secondary"
          sx={{ marginRight: '0.5rem' }}
        >
          Trang trước
        </Button>
        <Button onClick={() => handleRouterChange('next')} variant="contained" color="secondary">
          Trang tiếp
        </Button>
      </Box>
    </Box>
  );
}
