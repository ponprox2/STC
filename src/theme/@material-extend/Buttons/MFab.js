import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { ButtonAnimate } from 'src/components/Animate';
import { styled } from '@mui/material/styles';
import { capitalize } from '@mui/material';
import { Fab } from '@mui/material';

// ----------------------------------------------------------------------

const useStyles = styled((theme) => {
  const createStyle = (color) => {
    return {
      boxShadow: theme.shadows[25][color],
      color: theme.palette[color].contrastText,
      backgroundColor: theme.palette[color].main,
      '&:hover': {
        backgroundColor: theme.palette[color].dark
      }
    };
  };

  return {
    colorInfo: createStyle('info'),
    colorSuccess: createStyle('success'),
    colorWarning: createStyle('warning'),
    colorError: createStyle('error')
  };
});

// ----------------------------------------------------------------------

const MFab = forwardRef(
  ({ color = 'primary', children, className, ...other }, ref) => {
    const classes = useStyles();

    if (
      color === 'default' ||
      color === 'inherit' ||
      color === 'primary' ||
      color === 'secondary'
    ) {
      return (
        <ButtonAnimate>
          <Fab ref={ref} color={color} className={className} {...other}>
            {children}
          </Fab>
        </ButtonAnimate>
      );
    }

    return (
      <ButtonAnimate>
        <Fab
          ref={ref}
          className={clsx(
            {
              [classes[`color${capitalize(color)}`]]: color
            },
            className
          )}
          {...other}
        >
          {children}
        </Fab>
      </ButtonAnimate>
    );
  }
);

MFab.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'default',
    'inherit',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error'
  ])
};

export default MFab;
