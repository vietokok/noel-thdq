import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  CoBeBanDiem,
  DanDo,
  GiangSinhAmAp,
  Home,
  NewYearVideo,
  NoelVideo,
  QuestionBefore,
  QuestionList,
} from '../components/index';
import Head from 'next/head';

export default function HomeIndex() {
  const [screen, setScreen] = useState(0);

  const handleScreenChange = (key) => {
    if (key === 'prev') {
      if (screen > 0) {
        setScreen(screen - 1);
      }

      return;
    }
    if (screen < 7) {
      setScreen(screen + 1);
    }
  };

  useEffect(() => {
    function myKeyDown(e) {
      if (e.key === 'ArrowLeft') {
        if (screen > 0) {
          setScreen(screen - 1);
        }
      } else if (e.key === 'ArrowRight') {
        if (screen < 7) {
          setScreen(screen + 1);
        }
      }
    }
    document.addEventListener('keydown', myKeyDown);

    return () => {
      document.removeEventListener('keydown', myKeyDown);
    };
  }, [screen]);

  return (
    <Box sx={{ position: 'relative', minWidth: '100vw', minHeight: '100vh' }}>
      <Head>
        <title>Tiểu học Dương Quang</title>
      </Head>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url(${screen === 0 || screen === 2 ? '/ef.jpg' : '/c.jpg'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
          filter: 'blur(0px)',
        }}
      ></Box>
      {screen === 0 && <Home />}
      {screen === 1 && <NewYearVideo />}
      {screen === 2 && <QuestionBefore handleScreenChange={handleScreenChange} />}
      {screen === 3 && <QuestionList />}
      {screen === 4 && <GiangSinhAmAp />}
      {screen === 5 && <CoBeBanDiem />}
      {screen === 6 && <DanDo />}
      {screen === 7 && <NoelVideo />}
      <Box
        sx={{
          display: 'flex',
          position: 'fixed',
          right: 20,
          bottom: 20,
        }}
      >
        <Button
          onClick={() => handleScreenChange('prev')}
          startIcon={<ArrowBackIosIcon />}
          size="large"
          disabled={screen < 1}
          variant="contained"
          color="inherit"
          sx={{ marginRight: '0.5rem' }}
        >
          Trang trước
        </Button>
        <Button
          disabled={screen > 6}
          endIcon={<ArrowForwardIosIcon />}
          size="large"
          onClick={() => handleScreenChange('next')}
          variant="contained"
          color="inherit"
        >
          Trang tiếp
        </Button>
      </Box>
    </Box>
  );
}
