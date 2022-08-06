import React from 'react';
import Hero from './Hero';
import DarkMode from './DarkMode';
import Page from 'src/components/Page';
import Minimal from './Minimal';
import Advertisement from './Advertisement';
import CleanInterfaces from './CleanInterfaces';
import HugePackElements from './HugePackElements';
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const useStyles = styled((theme) => ({
  root: {
    height: '100%'
  },
  content: {
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: theme.palette.background.default
  }
}));

function LandingPageView() {
  const classes = useStyles();

  return (
    <Page
      title="The starting point for your next project | Finan"
      id="move_top"
      className={classes.root}
    >
      <Hero />
      <div className={classes.content}>
        <Minimal />
        <HugePackElements />
        <DarkMode />
        <CleanInterfaces />
        <Advertisement />
      </div>
    </Page>
  );
}

export default LandingPageView;
