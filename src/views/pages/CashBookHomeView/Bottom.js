import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowUp from 'src/assets/Images/arrowUp';
import ArrowDown from 'src/assets/Images/arrowDown';
import { getMobileOperatingSystem } from 'src/utils/getPlatform';
import {
  DEEP_LINK_CASHBOOK_APP,
  LINK_CASHBOOK_DOWNLOAD_ANDROID,
  LINK_CASHBOOK_DOWNLOAD_IOS
} from 'src/config';
import { COLORS } from 'src/constants';
import DialogDownload from './Dialog/DialogDownload';

const ButtonStyle = styled(Button)({
  height: '48px',
  margin: 'auto 0',
  borderRadius: '10px',
  textTransform: 'none',
  width: '165px'
});
const BoxConented = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  // alignItems: 'center',
  gap: '13px',

  bottom: '0',
  left: 0,
  background: '#F6F9FC',
  height: '72px',
  width: '100%',
  position: 'fixed'
});
const TypographyInOut = styled(Typography)(({ theme }) => ({
  fontFamily: 'SFProTextSemibold',
  fontWeight: '600',
  fontSize: '17px',
  lineHeight: '20px',
  [theme.breakpoints.down('ss')]: {
    fontSize: '15px',
    lineHeight: '18px'
  }
}));
function Bottom() {
  const [openDialogDownload, setOpenDialogDownload] = useState(false);
  const platform = getMobileOperatingSystem();

  const handleDeepLink = () => {
    window.location = DEEP_LINK_CASHBOOK_APP;
    setTimeout(() => {
      if (platform.toLowerCase() === 'ios') {
        window.location.assign(LINK_CASHBOOK_DOWNLOAD_IOS);
      } else {
        window.location.assign(LINK_CASHBOOK_DOWNLOAD_ANDROID);
      }
    }, 1000);
  };

  const handleOpenDialogDownload = () => {
    setOpenDialogDownload(true);
  };
  return (
    <>
      <BoxConented>
        <ButtonStyle
          sx={{
            backgroundColor: COLORS.orange,
            '&.MuiButton-root:hover': {
              backgroundColor: `${COLORS.orange}!important`
            }
          }}
          startIcon={<ArrowUp />}
          onClick={handleOpenDialogDownload}
        >
          <TypographyInOut style={{ color: '#FAFAFA' }}>
            Khoản chi
          </TypographyInOut>
        </ButtonStyle>
        <ButtonStyle
          sx={{
            backgroundColor: COLORS.green,
            '&.MuiButton-root:hover': {
              backgroundColor: COLORS.green
            }
          }}
          startIcon={<ArrowDown />}
          onClick={handleOpenDialogDownload}
        >
          <TypographyInOut style={{ color: '#FAFAFA' }}>
            Khoản thu
          </TypographyInOut>
        </ButtonStyle>
      </BoxConented>
      <DialogDownload
        openDialogDownload={openDialogDownload}
        setOpenDialogDownload={setOpenDialogDownload}
      />
    </>
  );
}

export default Bottom;
