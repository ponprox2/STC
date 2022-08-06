import clsx from 'clsx';
import React from 'react';
import Search from './Search';
import Account from './Account';
import PropTypes from 'prop-types';
import Languages from './Languages';
import { Icon } from '@iconify/react';
import Notifications from './Notifications';
import Settings from 'src/layouts/Common/Settings';
import menu2Fill from '@iconify-icons/eva/menu-2-fill';
import { alpha, styled } from '@mui/material/styles';
import { Box, AppBar, Hidden, Toolbar, IconButton } from '@mui/material';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const DRAWER_CLOSE_WIDTH = 70;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const useStyles = styled((theme) => ({
  root: {
    boxShadow: 'none',
    backdropFilter: 'blur(8px)',
    backgroundColor: alpha(theme.palette.background.default, 0.72)
  },
  drawerOpen: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter
    })
  },
  drawerClose: {
    width: `calc(100% - ${DRAWER_CLOSE_WIDTH}px)`,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter
    })
  },
  toolbar: {
    minHeight: APPBAR_MOBILE,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 5)
    },
    [theme.breakpoints.up('lg')]: {
      minHeight: APPBAR_DESKTOP
    }
  }
}));

// ----------------------------------------------------------------------

TopBar.propTypes = {
  scaleNav: PropTypes.bool,
  setScaleNav: PropTypes.func,
  onOpenNav: PropTypes.func,
  className: PropTypes.string
};

function TopBar({ scaleNav, setScaleNav, onOpenNav, className }) {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className, {
        [classes.drawerOpen]: scaleNav,
        [classes.drawerClose]: !scaleNav
      })}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          onClick={setScaleNav}
          sx={{
            mr: 1,
            color: 'text.primary'
          }}
        >
          <Icon icon={menu2Fill} />
        </IconButton>
        {/* <Hidden lgUp>
          <IconButton
            onClick={onOpenNav}
            sx={{
              mr: 1,
              color: 'text.primary'
            }}
          >
            <Icon icon={menu2Fill} />
          </IconButton>
        </Hidden> */}

        {/* <Search /> */}
        <Box sx={{ flexGrow: 1 }} />

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            '& > *:not(:first-of-type)': {
              ml: {
                xs: 0.5,
                sm: 2,
                lg: 3
              }
            }
          }}
        >
          {/* <Languages /> */}
          {/* <Notifications /> */}
          {/* <Settings /> */}
          <Account />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
