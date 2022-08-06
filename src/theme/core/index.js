import rtl from 'jss-rtl';
import { create } from 'jss';
import palette from './palette';
import shadows from './shadows';
import PropTypes from 'prop-types';
import typography from './typography';
import breakpoints from './breakpoints';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import GlobalStyles from './globalStyles';
import borderRadius from './borderRadius';
import componentsOverride from './overrides';
import { CacheProvider } from '@emotion/react';
import useSettings from 'src/hooks/useSettings';
import React, { useMemo, useEffect } from 'react';
import { alpha, styled, createStyles, createTheme } from '@mui/material/styles';
import { jssPreset, ThemeProvider, createMuiTheme } from '@mui/material';
import { CssBaseline } from '@mui/material';
import color from '../color';
import { withStyles } from '@mui/styles';

ThemeConfig.propTypes = {
  children: PropTypes.node
};

function ThemeConfig({ children }) {
  const { themeMode, themeDirection } = useSettings();
  const isLight = themeMode === 'light';

  const themeOptions = useMemo(
    () => ({
      palette: palette[isLight ? 'light' : 'dark'],
      shadows: shadows[isLight ? 'light' : 'dark'],
      typography: typography,
      shape: borderRadius,
      breakpoints: breakpoints,
      direction: themeDirection,
      color: color,
      components: componentsOverride({
        theme: {
          palette: palette[isLight ? 'light' : 'dark'],
          shadows: shadows[isLight ? 'light' : 'dark'],
          typography: typography,
          shape: borderRadius,
          direction: themeDirection
        }
      })
    }),
    [isLight, themeDirection]
  );

  const theme = createTheme(themeOptions);

  // ----------------------------------------------------------------------

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

export default ThemeConfig;
