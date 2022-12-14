import React from 'react';
import { Box, Typography, styled, IconButton } from '@mui/material';
// import useBreakpoints from 'src/hooks/useBreakpoints';
import { getMobileOperatingSystem } from 'src/utils/getPlatform';
import {
  DEEP_LINK_CASHBOOK_APP,
  LINK_CASHBOOK_DOWNLOAD_ANDROID,
  LINK_CASHBOOK_DOWNLOAD_IOS
} from 'src/config';
import GooglePlay from 'src/assets/Images/google_play.png';
import AppStore from 'src/assets/Images/app_store.png';
import { useTheme } from '@mui/material/styles';
import { CloseIcon } from 'src/theme/core/overrides/CustomIcon';
import LogoCashBook from 'src/components/LogoCashBook';

function DrawerDownload({ open, setOpen }) {
  // const isMobile = useBreakpoints('down', 'sm');
  const platform = getMobileOperatingSystem();
  const theme = useTheme();

  const handleClick = () => {
    window.location = DEEP_LINK_CASHBOOK_APP;
    setTimeout(() => {
      if (platform.toLowerCase() === 'ios') {
        window.location.replace(LINK_CASHBOOK_DOWNLOAD_IOS);
      } else {
        window.location.replace(LINK_CASHBOOK_DOWNLOAD_ANDROID);
      }
    }, 10000);
  };

  const generateImage = () => {
    if (platform.toLowerCase() === 'ios') return AppStore;
    if (platform.toLowerCase() === 'android') return GooglePlay;
    if (platform.toLowerCase() === 'unknown') {
      if (window.navigator.userAgent.indexOf('Windows') != -1)
        return GooglePlay;
      if (window.navigator.userAgent.indexOf('Mac') != -1) return AppStore;
      if (window.navigator.userAgent.indexOf('X11') != -1) return GooglePlay;
      if (window.navigator.userAgent.indexOf('Linux') != -1) return GooglePlay;
    }
  };

  return (
    <>
      {open ? (
        <Root>
          <Box
            flexDirection="column"
            sx={{
              display: 'flex',
              justifyContent: 'inherit',
              alignItems: 'center'
            }}
          >
            <IconButton
              color="inherit"
              edge="start"
              sx={{
                width: '48px',
                height: '48px',
                position: 'absolute',
                top: '0px',
                left: '12px'
              }}
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </IconButton>
            <Box
              sx={{
                marginLeft: '30px',
                marginRight: '10px'
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                  S??? thu chi th??ng minh 4.0
                </Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    color: theme.palette.grey[500],
                    marginBottom: '20px'
                  }}
                >
                  Qu???n l?? thu chi, nh???c n??? t??? ?????ng, b???o m???t, d??? d??ng v?? mi???n ph??
                  cho m???i ti???u th????ng. H??y c??i ?????t ngay!
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  padding: '0px 50px',
                  justifyContent: 'center',
                  [theme.breakpoints.up('sm')]: {
                    height: '50px'
                  },
                  [theme.breakpoints.down('sm')]: {
                    height: '60px'
                  }
                }}
              >
                <LogoCashBook
                  sx={{
                    marginRight: '20px',
                    [theme.breakpoints.up('sm')]: {
                      height: '50px'
                    },
                    [theme.breakpoints.down('sm')]: {
                      height: '60px'
                    }
                  }}
                />
                <Box
                  sx={{ cursor: 'pointer' }}
                  component="img"
                  alt="logo"
                  src={generateImage()}
                  onClick={handleClick}
                />
              </Box>
            </Box>
          </Box>
        </Root>
      ) : null}
    </>
  );
}

const Root = styled(Box)(({ theme }) => ({
  border: 'none',
  overflow: 'hidden',
  padding: '16px',
  borderRadius: '8px 8px 0px 0px',
  position: 'fixed',
  bottom: '0px',
  left: '50%',
  transform: 'translateX(-50%)',
  boxShadow: theme.shadows[25].z24,
  backgroundColor: theme.color.white,
  [theme.breakpoints.up('sm')]: {
    width: 420,
    margin: '0 auto'
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}));
export default DrawerDownload;
