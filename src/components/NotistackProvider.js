import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { SnackbarProvider } from 'notistack';
import infoFill from '@iconify-icons/eva/info-fill';
import alertCircleFill from '@iconify-icons/eva/alert-circle-fill';
import alertTriangleFill from '@iconify-icons/eva/alert-triangle-fill';
import checkmarkCircle2Fill from '@iconify-icons/eva/checkmark-circle-2-fill';
import { alpha, styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { MIconButton } from 'src/theme';
import closeFill from '@iconify-icons/eva/close-fill';
import { useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------

const useStyles = styled((theme) => {
  const createStyle = {
    color: `${theme.palette.text.primary} !important`,
    backgroundColor: `${theme.palette.background.paper} !important`
  };

  return {
    message: {
      padding: 0,
      fontWeight: theme.typography.fontWeightMedium
    },
    action: {
      marginRight: -4,
      '& svg': {
        width: 20,
        height: 20,
        opacity: 0.48,
        '&:hover': { opacity: 1 }
      }
    },
    info: { ...createStyle },
    success: { ...createStyle },
    warning: { ...createStyle },
    error: { ...createStyle }
  };
});

// ----------------------------------------------------------------------

function SnackbarIcon({ icon, color }) {
  return (
    <Box
      component="span"
      sx={{
        mr: 1.5,
        width: 40,
        height: 40,
        display: 'flex',
        borderRadius: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        color: `${color}.main`,
        bgcolor: (theme) => alpha(theme.palette[color].main, 0.16)
      }}
    >
      <Icon icon={icon} width={24} height={24} />
    </Box>
  );
}

NotistackProvider.propTypes = {
  children: PropTypes.node
};

function NotistackProvider({ children }) {
  const classes = useStyles();
  const notistackRef = React.createRef();
  const theme = useTheme();
  return (
    <SnackbarProvider
      style={{
        '& .MuiCollapse-wrapperInner': {
          width: '100%'
        },
        width: '100%',
        backgroundColor: 'white',
        fontWeight: '600',
        padding: theme.spacing(1.5),
        boxShadow: theme.shadows[25].z8,
        borderRadius: theme.shape.borderRadius,
        color: theme.palette.grey[800],
        backgroundColor: theme.palette.grey[0]
      }}
      ref={notistackRef}
      dense
      maxSnack={5}
      preventDuplicate
      autoHideDuration={300000}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      iconVariant={{
        success: <SnackbarIcon icon={checkmarkCircle2Fill} color="success" />,
        error: <SnackbarIcon icon={infoFill} color="error" />,
        warning: <SnackbarIcon icon={alertTriangleFill} color="warning" />,
        info: <SnackbarIcon icon={alertCircleFill} color="info" />
      }}
      classes={{
        containerRoot: classes.containerRoot,
        contentRoot: classes.contentRoot,
        message: classes.message,
        action: classes.action,
        variantInfo: classes.info,
        variantSuccess: classes.success,
        variantWarning: classes.warning,
        variantError: classes.error
      }}
      action={(key) => (
        <MIconButton
          size="small"
          onClick={() => notistackRef.current.closeSnackbar(key)}
        >
          <Icon icon={closeFill} />
        </MIconButton>
      )}
    >
      {children}
    </SnackbarProvider>
  );
}

export default NotistackProvider;
