import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function Home() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const router = useRouter();

  const handleRouterChange = (key) => {
    if (key === 'prev') {
      router.push({
        pathname: '/cobebandiem',
      });
    } else {
      router.push({
        pathname: '/noelvideo',
      });
    }
  };

  useEffect(() => {
    function myKeyDown(e) {
      if (e.key === 'ArrowRight') {
        router.push({
          pathname: '/noelvideo',
        });
      } else if (e.key === 'ArrowLeft') {
        router.push({
          pathname: '/cobebandiem',
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
        <Box sx={{ opacity: '0' }}>
          <Link href="/noelvideo">Goto</Link>
        </Box>
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
