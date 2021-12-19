import CheckIcon from '@mui/icons-material/Check';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import dung from '../assets/dung.mp3';
import sai from '../assets/sai.mp3';
import { noelData } from '../constants/data';

const colorButton = ['primary', 'secondary', 'success', 'warning'];
const questionTag = ['A', 'B', 'C', 'D', 'E'];

function QuestionList() {
  const router = useRouter();
  const [qsIdx, setQsIdx] = useState(0);
  const saiRef = useRef(null);
  const dungRef = useRef(null);

  const handleQuestionChange = (key) => {
    if (key === 1) {
      if (qsIdx < noelData.length - 1) {
        setQsIdx(qsIdx + 1);
      }
      return;
    }

    if (qsIdx > 0) {
      setQsIdx(qsIdx - 1);
    }
  };
  const [open, setOpen] = useState({
    open: false,
    title: '',
    content: '',
    correct: false,
  });

  const handleClose = () => {
    setOpen({
      ...open,
      open: false,
      title: '',
      content: '',
      correct: false,
    });

    dungRef.current.pause();
    dungRef.current.currentTime = 0;
    saiRef.current.pause();
    saiRef.current.currentTime = 0;
  };

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setOpen({
        ...open,
        open: true,
        content: 'Chúc mừng bạn đã trả lời chính xác !',
        correct: true,
      });

      dungRef.current.play();
      return;
    }

    setOpen({
      ...open,
      open: true,
      content: 'Bạn trả lời sai rồi !',
      correct: false,
    });

    saiRef.current.play();
  };

  useEffect(() => {
    function myKeyDown(e) {
      if (e.key === 'ArrowLeft') {
        router.push({
          pathname: '/',
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
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box sx={{ marginTop: '2rem' }}>
            {noelData.map((qs, index) => (
              <Box key={index} sx={{ display: index === qsIdx ? 'block' : 'none' }}>
                <Typography
                  color="#DB2B39"
                  sx={{
                    fontSize: '2.8rem',
                    marginBottom: '2.5rem',
                    fontWeight: 'bold',
                  }}
                >{`Câu ${index + 1}: ${qs.question}`}</Typography>
                {qs.answer.map((ans, idx) => (
                  <Stack key={idx}>
                    <Button
                      onClick={() => handleAnswerClick(!!ans.correct)}
                      sx={{
                        justifyContent: 'start',
                        marginBottom: '1.5rem',
                        fontSize: '2.8rem',
                        padding: '1rem 2rem',
                        borderRadius: '2rem',
                        textTransform: 'none',
                        color: '#111',
                        textAlign: 'left',
                      }}
                      color={colorButton[idx]}
                      variant="outlined"
                    >{`${questionTag[idx]}. ${ans.value}`}</Button>
                  </Stack>
                ))}
              </Box>
            ))}

            <Grid sx={{ marginTop: '1rem' }} container={true} justifyContent="flex-end">
              <Button
                sx={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#DB2B39' }}
                disabled={qsIdx === 0}
                onClick={() => handleQuestionChange(0)}
                size="large"
                startIcon={<KeyboardArrowLeftOutlinedIcon />}
              >
                Câu trước
              </Button>
              <Button
                sx={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#DB2B39' }}
                disabled={qsIdx >= noelData.length - 1}
                onClick={() => handleQuestionChange(1)}
                size="large"
                endIcon={<ChevronRightOutlinedIcon />}
              >
                Câu tiếp theo
              </Button>
            </Grid>

            <Dialog open={open.open} onClose={handleClose}>
              <DialogContent>
                <DialogContentText
                  sx={{
                    fontSize: '1.5rem',
                    color: open.correct ? 'green' : 'red',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {open.correct ? <CheckIcon color="success" /> : <CloseIcon color="error" />}
                  &nbsp;&nbsp;&nbsp;
                  {open.content}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  color="inherit"
                  sx={{
                    fontSize: '1.25rem',
                    textTransform: 'none',
                  }}
                  onClick={handleClose}
                  autoFocus
                >
                  Đồng ý
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
          <audio ref={saiRef} src={sai} />
          <audio ref={dungRef} src={dung} />
        </Box>
      </Container>
    </Box>
  );
}

export default QuestionList;
