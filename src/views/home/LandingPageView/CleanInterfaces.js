import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { BASE_IMG } from 'src/utils/getImages';
import { varFadeInUp, MotionInView } from 'src/components/Animate';
import { styled } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';

// ----------------------------------------------------------------------

const useStyles = styled((theme) => ({
  root: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(10)
  },
  content: {
    maxWidth: 520,
    margin: 'auto',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      position: 'absolute'
    }
  }
}));

// ----------------------------------------------------------------------

const getImg = (width) =>
  `${BASE_IMG}w_${width}/v1611478038/upload_minimal/home/multipage.png`;

CleanInterfaces.propTypes = {
  className: PropTypes.string
};

function CleanInterfaces({ className }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <Container maxWidth="lg">
        <div className={classes.content}>
          <MotionInView variants={varFadeInUp}>
            <Typography
              gutterBottom
              variant="overline"
              sx={{ color: 'text.secondary', display: 'block' }}
            >
              clean & clear
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Typography variant="h2" paragraph>
              Beautiful, Modern and Clean User Interfaces
            </Typography>
          </MotionInView>
        </div>

        <MotionInView variants={varFadeInUp}>
          <Box
            component="img"
            alt="multipage"
            src={getImg(600)}
            srcSet={`${getImg(600)} 600w, ${getImg(1200)} 960w, ${getImg(
              1440
            )} 1280w`}
            variants={varFadeInUp}
            sx={{ m: 'auto' }}
          />
        </MotionInView>
      </Container>
    </div>
  );
}

export default CleanInterfaces;
