import NavBar from './NavBar';
import TopBar from './TopBar';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const useStyles = styled((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden'
  },
  main: {
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingTop: APP_BAR_MOBILE + 40,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
      paddingTop: APP_BAR_DESKTOP + 40,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  }
}));

// ----------------------------------------------------------------------

DashboardLayout.propTypes = {
  children: PropTypes.node
};

function DashboardLayout({ children }) {
  const classes = useStyles();
  const [openNav, setOpenNav] = useState(false);
  const [scaleNav, setScaleNav] = useState(true);

  return (
    <div className={classes.root}>
      <TopBar
        scaleNav={scaleNav}
        setScaleNav={() => setScaleNav(!scaleNav)}
        openNav={openNav}
        onOpenNav={() => setOpenNav(true)}
      />
      <NavBar
        scaleNav={scaleNav}
        onCloseNav={() => setOpenNav(false)}
        isOpenNav={openNav}
      />

      <div className={classes.main}>{children}</div>
    </div>
  );
}

export default DashboardLayout;
