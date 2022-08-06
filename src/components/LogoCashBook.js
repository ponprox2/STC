import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

LogoCashBook.propTypes = {
  className: PropTypes.string
};

function LogoCashBook({ full = false, isWhite = false, className, ...other }) {
  if (full) {
    if (isWhite) {
      return (
        <Box
          component="img"
          alt="logo"
          src="/static/brand/logo-cashbook_full_white.svg"
          height="100%"
          className={className}
          {...other}
        />
      );
    }
    return (
      <Box
        component="img"
        alt="logo"
        src="/static/brand/logo_full.svg"
        height={40}
        className={className}
        {...other}
      />
    );
  }
  return (
    <Box
      component="img"
      alt="logo"
      src="/static/brand/logo-cashbook.svg"
      height={40}
      className={className}
      {...other}
    />
  );
}

export default LogoCashBook;
