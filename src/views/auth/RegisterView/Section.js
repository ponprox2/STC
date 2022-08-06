import clsx from 'clsx';
import React from 'react';
import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';

// ----------------------------------------------------------------------

const useStyles = styled((theme) => ({
  root: {
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: theme.spacing(2, 0, 2, 2)
  }
}));

// ----------------------------------------------------------------------

function Section({ className }) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)}>
      <Typography variant="h3" sx={{ px: 5, mt: 5, mb: 15 }}>
        Manage the job more effectively with Minimal
      </Typography>
      <img
        alt="register"
        src="/static/illustrations/illustration_register.svg"
      />
    </Card>
  );
}

export default Section;
