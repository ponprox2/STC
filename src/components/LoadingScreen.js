import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Logo from 'src/components/Logo';
import { styled } from '@mui/material/styles';
import { alpha } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LogoCashBook from './LogoCashBook';
import StringHandler from 'src/utils/stringHandler';
import { useLocation } from 'react-router-dom';

// ----------------------------------------------------------------------

const TRANSITION = {
  ease: 'linear',
  duration: 3.2,
  loop: Infinity
};

// ----------------------------------------------------------------------

LoadingScreen.propTypes = {
  className: PropTypes.string
};

function LoadingScreen({ fullScreen = true, className, ...other }) {
  const theme = useTheme();
  const type = StringHandler.getParamFromUrl('env');
  const isCashbookPage = window.location.pathname.includes('cashbook');

  const fullScreenStyle = {
    backgroundColor: theme.palette.background.default
  };
  const absoluteScreen = {
    width: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 9999
  };

  const Root = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    [fullScreenStyle]: fullScreen,
    [absoluteScreen]: !fullScreen
  }));

  return (
    <>
      {type || isCashbookPage ? (
        <Root {...other}>
          <div style={{ paddingBottom: '7px' }}>
            <LogoCashBook sx={{ height: 64 }} />
          </div>
          <motion.div
            animate={{
              scale: [1.2, 1, 1, 1.2, 1.2],
              rotate: [270, 0, 0, 270, 270],
              opacity: [0.25, 1, 1, 1, 0.25],
              borderRadius: ['25%', '25%', '50%', '50%', '25%']
            }}
            transition={TRANSITION}
            style={{
              width: 100,
              height: 100,
              border: ` 3px solid rgb(243, 160, 110)`,
              position: 'absolute',
              borderRadius: '25%'
            }}
          />

          <motion.div
            animate={{
              scale: [1, 1.2, 1.2, 1, 1],
              rotate: [0, 270, 270, 0, 0],
              opacity: [1, 0.25, 0.25, 0.25, 1],
              borderRadius: ['25%', '25%', '50%', '50%', '25%']
            }}
            transition={{
              ease: 'linear',
              duration: 3.2,
              loop: Infinity
            }}
            style={{
              position: 'absolute',
              borderRadius: '25%',
              width: 120,
              height: 120,
              border: `8px solid rgb(243, 160, 110)`
            }}
          />
        </Root>
      ) : (
        <Root {...other}>
          <div>
            <Logo sx={{ height: 64 }} />
          </div>
          <motion.div
            animate={{
              scale: [1.2, 1, 1, 1.2, 1.2],
              rotate: [270, 0, 0, 270, 270],
              opacity: [0.25, 1, 1, 1, 0.25],
              borderRadius: ['25%', '25%', '50%', '50%', '25%']
            }}
            transition={TRANSITION}
            style={{
              width: 100,
              height: 100,
              border: `solid 3px ${alpha(theme.palette.primary.dark, 0.24)}`,
              position: 'absolute',
              borderRadius: '25%'
            }}
          />

          <motion.div
            animate={{
              scale: [1, 1.2, 1.2, 1, 1],
              rotate: [0, 270, 270, 0, 0],
              opacity: [1, 0.25, 0.25, 0.25, 1],
              borderRadius: ['25%', '25%', '50%', '50%', '25%']
            }}
            transition={{
              ease: 'linear',
              duration: 3.2,
              loop: Infinity
            }}
            style={{
              position: 'absolute',
              borderRadius: '25%',
              width: 120,
              height: 120,
              border: `solid 8px ${alpha(theme.palette.primary.dark, 0.24)}`
            }}
          />
        </Root>
      )}
    </>
  );
}

export default LoadingScreen;
