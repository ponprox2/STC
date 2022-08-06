import React from 'react';
import Page from 'src/components/Page';
import Logo from 'src/components/Logo';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useBreakpoints from 'src/hooks/useBreakpoints';


const Root = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));
  
function Page500View() {
  const theme = useTheme();
  const isDesktop = useBreakpoints('up', 'sm');

  return (
    <Root title="500 Internal Server Error | Finan">
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
        <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
          <Typography variant="h3" gutterBottom>
            500 Internal Server Error
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            There was an error, please try again later.
          </Typography>

          <Box
            component="img"
            alt="500"
            src="/static/illustrations/illustration_500.svg"
            sx={{ width: '100%', maxHeight: 240, my: { xs: 5, sm: 10 } }}
          />

          <Button
            to="/"
            size="large"
            variant="contained"
            component={RouterLink}
          >
            Go to Home
          </Button>
        </Box>
      </Container>
    </Root>
  );
}

export default Page500View;
