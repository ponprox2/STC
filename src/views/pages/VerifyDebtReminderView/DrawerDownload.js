import React from 'react';
import { Box, Typography, styled, Button } from '@mui/material';
// import useBreakpoints from 'src/hooks/useBreakpoints';
import { getMobileOperatingSystem } from 'src/utils/getPlatform';
import {
  DEEP_LINK_APP,
  LINK_DOWNLOAD_ANDROID,
  LINK_DOWNLOAD_IOS
} from 'src/config';
import VerifyBox from 'src/assets/Images/verify-box.png';
import { COLORS } from 'src/constants';

function DrawerDownload() {
  const platform = getMobileOperatingSystem();

  const handleConfirm = () => {
    window.location = DEEP_LINK_APP;
    setTimeout(() => {
      if (platform.toLowerCase() === 'ios') {
        window.location.assign(LINK_DOWNLOAD_IOS);
      } else {
        window.location.assign(LINK_DOWNLOAD_ANDROID);
      }
    }, 10000);
  };

  return (
    <>
      <Root>
        <Box
          flexDirection="column"
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}
          height="100%"
        >
          <Box sx={{ margin: '0px 10px 10px 10px' }}>
            <Box width="72%" margin="0 auto" textAlign="center">
              <Typography
                sx={{
                  fontSize: '14px',
                  color: COLORS.primaryDark,
                  marginBottom: '20px'
                }}
              >
                Cài đặt ứng dụng để xác nhận giao dịch dễ dàng
              </Typography>
            </Box>
            <Wrapper>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  fontSize: '16px !important',
                  fontWeight: '500',
                  textTransform: 'none'
                }}
                onClick={handleConfirm}
              >
                Xác nhận
              </Button>
            </Wrapper>
          </Box>
        </Box>
      </Root>
    </>
  );
}

const Root = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${VerifyBox})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: '190px',
  border: 'none',
  overflow: 'hidden',
  padding: '16px',
  position: 'fixed',
  bottom: '0px',
  left: '50%',
  transform: 'translateX(-50%)',
  [theme.breakpoints.up('sm')]: {
    width: 420,
    margin: '0 auto'
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}));

const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.up('sm')]: {
    height: '50px'
  },
  [theme.breakpoints.down('sm')]: {
    height: '60px'
  }
}));

export default DrawerDownload;
