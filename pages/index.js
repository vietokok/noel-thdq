import { Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import noelMp from '../assets/noelMp.mp3';

export default function Home() {
  const router = useRouter();

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
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '9rem',
              color: '#fff',
            }}
          >
            <Typography sx={{ fontWeight: 'bold' }} variant="h2">
              LIÊN ĐỘI TIỂU HỌC DƯƠNG QUANG
            </Typography>
          </Box>
        </Box>
      </Container>

      <Box
        sx={{
          position: 'absolute',
          right: 20,
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
      <Box sx={{ opacity: '0' }}>
        <Link href="/question">Goto</Link>
      </Box>
      <Button
        onClick={handleStartClick}
        sx={{
          position: 'absolute',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bottom: 0,
          fontSize: '1.5rem',
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
