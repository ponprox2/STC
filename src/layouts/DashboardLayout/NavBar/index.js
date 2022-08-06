import NavItem from './NavItem';
import MenuLinks from './config';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Logo from 'src/components/Logo';
import useAuth from 'src/hooks/useAuth';
import React, { useEffect } from 'react';
import MyAvatar from 'src/components/MyAvatar';
import Scrollbars from 'src/components/Scrollbars';
import { PATH_APP } from 'src/routes/paths';
import { Link as RouterLink, useLocation, matchPath } from 'react-router-dom';
import { alpha, styled } from '@mui/material/styles';
import {
  Box,
  Link,
  List,
  Button,
  Drawer,
  Hidden,
  Typography,
  ListSubheader
} from '@mui/material';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const DRAWER_CLOSE_WIDTH = 70;

const useStyles = styled((theme) => {
  const isLight = theme.palette.mode === 'light';

  return {
    drawer: {
      // [theme.breakpoints.up('lg')]: {
      flexShrink: 0,
      width: DRAWER_WIDTH
      // }
    },
    drawerOpen: {
      width: DRAWER_WIDTH,
      background: theme.palette.background.default,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter
      })
    },
    drawerClose: {
      // textAlign: 'center',
      background: theme.palette.background.default,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter
      }),
      overflowX: 'hidden',
      width: DRAWER_CLOSE_WIDTH,
      [theme.breakpoints.up('sm')]: {
        width: DRAWER_CLOSE_WIDTH
      }
    },
    drawerPaper: {
      width: DRAWER_WIDTH,
      background: theme.palette.background.default,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter
      })
    },
    drawerClosePaper: {
      width: DRAWER_CLOSE_WIDTH,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter
      })
    },
    subHeader: {
      ...theme.typography.overline,
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
      color: theme.palette.text.primary
    },
    subHeaderOpen: {
      paddingLeft: theme.spacing(5),
      transition: theme.transitions.create('padding-left', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter
      })
    },
    subHeaderClose: {
      paddingLeft: theme.spacing(2.5),
      // textAlign: 'center',
      transition: theme.transitions.create('padding-left', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter
      })
    },
    account: {
      display: 'flex',
      alignItems: 'center',
      borderRadius: theme.shape.borderRadiusSm,
      background: theme.palette.grey[isLight ? 200 : 800]
    },
    accountOpen: {
      padding: theme.spacing(2, 2.5),
      margin: theme.spacing(1, 2.5, 5),
      transition: theme.transitions.create('all', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter
      })
    },
    accountClose: {
      padding: theme.spacing(2, 1),
      margin: theme.spacing(1, 0.8, 5),
      transition: theme.transitions.create('all', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter
      })
    },
    doc: {
      padding: theme.spacing(2.5),
      borderRadius: theme.shape.borderRadiusMd,
      backgroundColor: isLight
        ? alpha(theme.palette.primary.main, 0.08)
        : theme.palette.primary.lighter
    },
    logoOpen: {
      padding: theme.spacing(2.5, 3),
      transition: theme.transitions.create('all', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter
      })
    },
    logoClose: {
      padding: theme.spacing(2.5, 2),
      transition: theme.transitions.create('all', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter
      })
    }
  };
});

// ----------------------------------------------------------------------

NavBar.propTypes = {
  onCloseNav: PropTypes.func,
  isOpenNav: PropTypes.bool
};

function NavBar({ scaleNav, isOpenNav, onCloseNav }) {
  const classes = useStyles();
  const { pathname } = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    if (isOpenNav && onCloseNav) {
      onCloseNav();
    }
  }, [pathname]);

  function reduceChild({ array, item, pathname, level }) {
    const key = item.href + level;
    if (item.items) {
      const match = matchPath(pathname, {
        path: item.href,
        exact: false
      });

      array = [
        ...array,
        <NavItem
          key={key}
          level={level}
          icon={item.icon}
          info={item.info}
          href={item.href}
          title={item.title}
          open={Boolean(match)}
          scaleNav={scaleNav}
        >
          {renderNavItems({
            pathname,
            level: level + 1,
            items: item.items
          })}
        </NavItem>
      ];
    } else {
      array = [
        ...array,
        <NavItem
          key={key}
          level={level}
          href={item.href}
          icon={item.icon}
          info={item.info}
          title={item.title}
          scaleNav={scaleNav}
        />
      ];
    }
    return array;
  }

  function renderNavItems({ items, pathname, level = 0 }) {
    return (
      <List disablePadding>
        {items.reduce(
          (array, item) => reduceChild({ array, item, pathname, level }),
          []
        )}
      </List>
    );
  }

  function generateSubheaderName(subheader) {
    if (!scaleNav) {
      switch (subheader) {
        case 'general':
          return 'gen';
        case 'management':
          return 'mag';
        default:
          break;
      }
    } else {
      return subheader;
    }
  }

  const renderContent = (
    <Scrollbars>
      <Box
        className={clsx({
          [classes.logoOpen]: scaleNav,
          [classes.logoClose]: !scaleNav
        })}
      >
        <RouterLink to="/">
          <Logo full={scaleNav ? true : false} />
        </RouterLink>
      </Box>

      {/* <Link
        underline="none"
        component={RouterLink}
        to={PATH_APP.management.user.account}
      >
        <div
          className={clsx(classes.account, {
            [classes.accountOpen]: scaleNav,
            [classes.accountClose]: !scaleNav
          })}
        >
          <MyAvatar />
          <Box sx={{ ml: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
              {user?.full_name || 'F'}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {user?.role || ''}
            </Typography>
          </Box>
        </div>
      </Link> */}

      {MenuLinks.map((list) => (
        <List
          disablePadding
          key={list.subheader}
          subheader={
            <ListSubheader
              disableSticky
              disableGutters
              className={clsx(classes.subHeader, {
                [classes.subHeaderOpen]: scaleNav,
                [classes.subHeaderClose]: !scaleNav
              })}
            >
              {generateSubheaderName(list.subheader)}
            </ListSubheader>
          }
        >
          {renderNavItems({
            items: list.items,
            pathname: pathname
          })}
        </List>
      ))}

      {/* <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <div className={classes.doc}>
          <Box
            component="img"
            alt="doc"
            src="/static/icons/ic_doc.svg"
            sx={{ width: 36, height: 36, mb: 2 }}
          />
          <Typography
            gutterBottom
            variant="subtitle1"
            sx={{ color: 'grey.800' }}
          >
            Hi, {user.full_name}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'grey.600' }}>
            Need help?
            <br /> Please check our docs
          </Typography>
        </div>
      </Box> */}
    </Scrollbars>
  );

  return (
    <nav
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: scaleNav,
        [classes.drawerClose]: !scaleNav
      })}
    >
      {/* <Hidden lgUp>
        <Drawer
          anchor="left"
          open={isOpenNav}
          variant="temporary"
          onClose={onCloseNav}
          classes={{
            paper: scaleNav ? classes.drawerPaper : classes.drawerClosePaper
          }}
        >
          {renderContent}
        </Drawer>
      </Hidden> */}
      {/* <Hidden lgDown> */}
      <Drawer
        open
        anchor="left"
        variant="persistent"
        classes={{
          paper: scaleNav ? classes.drawerPaper : classes.drawerClosePaper
        }}
      >
        {renderContent}
      </Drawer>
      {/* </Hidden> */}
    </nav>
  );
}

export default NavBar;
