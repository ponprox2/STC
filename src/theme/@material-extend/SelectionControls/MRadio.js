import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { capitalize } from '@mui/material';
import { Radio } from '@mui/material';

// ----------------------------------------------------------------------

const useStyles = styled((theme) => {
  const createStyle = (color) => {
    return {
      '&.Mui-checked': {
        color: theme.palette[color].main
      },
      '&:hover, &.Mui-checked:hover': {
        backgroundColor: alpha(
          theme.palette[color].main,
          theme.palette.action.hoverOpacity
        )
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

function MRadio({ color = 'primary', className, ...other }) {
  const classes = useStyles();

  if (color === 'default' || color === 'primary' || color === 'secondary') {
    return <Radio color={color} className={className} {...other} />;
  }

  return (
    <Radio
      className={clsx(
        {
          [classes[`color${capitalize(color)}`]]: color
        },
        className
      )}
      {...other}
    />
  );
}

MRadio.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error'
  ])
};

export default MRadio;
