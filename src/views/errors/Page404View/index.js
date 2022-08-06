import React from 'react';
import Logo from 'src/components/Logo';
import Page from 'src/components/Page';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import {
  MotionContainer,
  varBounce,
  varBounceIn
} from 'src/components/Animate';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useBreakpoints from 'src/hooks/useBreakpoints';

const Root = styled(Box)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

function Page404View() {
  const isDesktop = useBreakpoints('up', 'sm');
  const theme = useTheme();

  return (
    <Root title="404 Page Not Found | SoBanHang">
      <header
        style={{
          top: 0,
          left: 0,
          lineHeight: 0,
          width: '100%',
          position: 'absolute',
          padding: theme.spacing(isDesktop ? 5 : 3, isDesktop ? 5 : 3, 0)
        }}
      >
        <RouterLink to="/">
          <Logo />
        </RouterLink>
      </header>

      <Container>
        <MotionContainer initial="initial" open>
          <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
            <motion.div variants={varBounce}>
              <Typography variant="h3" gutterBottom>
                Sorry, page not found!
              </Typography>
            </motion.div>
            <Typography sx={{ color: 'text.secondary' }}>
              Sorry, we couldn’t find the page you’re looking for. Perhaps
              you’ve mistyped the URL? Be sure to check your spelling.
            </Typography>

            <Box
              component={motion.img}
              variants={varBounceIn}
              alt="404"
              src="/static/illustrations/illustration_404.svg"
              sx={{ width: '100%', maxHeight: 240, my: { xs: 5, sm: 10 } }}
            />

            {/* <Button
              to="/"
              size="large"
              variant="contained"
              component={RouterLink}
            >
              Go to Home
            </Button> */}
          </Box>
        </MotionContainer>
      </Container>
    </Root>
  );
}

export default Page404View;
