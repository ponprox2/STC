import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { varSmallClick } from 'src/components/Animate';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const useStyles = styled((theme) => ({
  root: {
    display: 'inline-flex'
  }
}));

// ----------------------------------------------------------------------

ButtonAnimate.propTypes = {
  small: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};

function ButtonAnimate({ children, className, ...other }) {
  const classes = useStyles();

  return (
    <Box
      component={motion.div}
      whileTap="tap"
      whileHover="hover"
      variants={varSmallClick}
      className={clsx(classes.root, className)}
      {...other}
    >
      {children}
    </Box>
  );
}

export default ButtonAnimate;
