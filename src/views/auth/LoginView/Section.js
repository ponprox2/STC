import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';

// ----------------------------------------------------------------------

const useStyles = styled((theme) => ({
  root: {
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2, 0, 2, 2)
  }
}));

// ----------------------------------------------------------------------

Section.propTypes = {
  className: PropTypes.string
};

function Section({ className }) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)}>
      <Typography variant="h3" sx={{ px: 5, mt: 5, mb: 15 }}>
        Hi, Welcome Back
      </Typography>
      <img src="/static/illustrations/illustration_login.svg" alt="login" />
    </Card>
  );
}

export default Section;
