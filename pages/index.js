import { Box, Button, Container, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import noelMp from '../assets/noelMp.mp3';

export default function Home() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const router = useRouter();

  const handleRouterChange = (key) => {
    if (key === 'prev') {
    } else {
      router.push({
        pathname: '/newyear',
      });
    }
  };

  useEffect(() => {
    function myKeyDown(e) {
      if (e.key === 'ArrowRight') {
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
      <Box sx={{ opacity: '0' }}>
        <Link href="/newyear">Goto</Link>
      </Box>
      <Box
        sx={{
          display: 'flex',
          position: 'fixed',
          right: 20,
          bottom: 20,
        }}
      >
        <Button disabled variant="contained" color="secondary" sx={{ marginRight: '0.5rem' }}>
          Trang trước
        </Button>
        <Button onClick={() => handleRouterChange('next')} variant="contained" color="secondary">
          Trang tiếp
        </Button>
      </Box>
    </Box>
  );
}
