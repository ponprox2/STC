import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { BASE_IMG } from 'src/utils/getImages';
import { PATH_HOME } from 'src/routes/paths';
import {
  varFadeInDown,
  varFadeInUp,
  MotionInView
} from 'src/components/Animate';
import { styled } from '@mui/material/styles';
import { Link, Box, Container, Typography } from '@mui/material';
import { MButton } from 'src/theme';

// ----------------------------------------------------------------------

const useStyles = styled((theme) => ({
  root: {},
  container: {
    maxWidth: 456,
    margin: 'auto',
    overflow: 'hidden',
    paddingBottom: theme.spacing(10),
    borderRadius: theme.shape.borderRadiusMd,
    backgroundImage: `linear-gradient(135deg,
      ${theme.palette.primary.main} 0%,
      ${theme.palette.primary.dark} 100%)`,
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      maxWidth: '100%',
      paddingBottom: 0,
      alignItems: 'center'
    }
  }
}));

// ----------------------------------------------------------------------

const getImg = (width) =>
  `${BASE_IMG}w_${width}/v1611481147/upload_minimal/home/rocket.png`;

Advertisement.propTypes = {
  className: PropTypes.string
};

function Advertisement({ className }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <Container maxWidth="lg">
        <div className={classes.container}>
          <MotionInView variants={varFadeInUp} sx={{ mb: { xs: 3, md: 0 } }}>
            <Box
              component="img"
              alt="rocket"
              src={getImg(600)}
              srcSet={`${getImg(600)} 600w, ${getImg(960)} 960w`}
              sx={{
                maxWidth: 460,
                transform: {
                  xs: 'translateX(-10%)',
                  md: 'translateX(0)'
                }
              }}
            />
          </MotionInView>

          <Box
            sx={{
              pl: { md: 10 },
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            <MotionInView
              variants={varFadeInDown}
              sx={{ color: 'common.white', mb: 5 }}
            >
              <Typography variant="h2">
                Get started with
                <br /> Minimal Kit today
              </Typography>
            </MotionInView>
            <MotionInView variants={varFadeInDown}>
              <MButton
                size="large"
                color="white"
                underline="none"
                variant="contained"
                component={Link}
                target="_blank"
                href={PATH_HOME.purchase}
              >
                Purchase Now
              </MButton>
            </MotionInView>
          </Box>
        </div>
      </Container>
    </div>
  );
}

export default Advertisement;
