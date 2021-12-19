import { Box, Button, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function Home() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const router = useRouter();

  const handleRouterChange = (key) => {
    if (key === 'prev') {
      router.push({
        pathname: '/',
      });
    } else {
      router.push({
        pathname: '/questionBefore',
      });
    }
  };

  useEffect(() => {
    function myKeyDown(e) {
      if (e.key === 'ArrowLeft') {
        router.push({
          pathname: '/',
        });
      } else if (e.key === 'ArrowRight') {
        router.push({
          pathname: '/questionBefore',
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
          background: `url('/c.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
          filter: 'blur(0px)',
        }}
      ></Box>

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
      <Box sx={{ opacity: '0' }}>
        <Link href="/questionBefore">Goto</Link>
      </Box>
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
