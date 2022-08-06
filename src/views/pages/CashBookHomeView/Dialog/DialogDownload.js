import React, { useState } from 'react';
import { Box, Button, InputAdornment, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import { COLORS } from 'src/constants';
import { getMobileOperatingSystem } from 'src/utils/getPlatform';
import {
  DEEP_LINK_CASHBOOK_APP,
  LINK_CASHBOOK_DOWNLOAD_ANDROID,
  LINK_CASHBOOK_DOWNLOAD_IOS
} from 'src/config';

const TypographyText = styled(Typography)({
  fontFamily: 'SFProTextRegular',
  fontWeight: '500',
  fontStyle: 'normal',
  fontSize: '17px',
  lineHeight: '20px',
  color: COLORS.primaryDark,
  textAlign: 'center'
});

const ButtonDialog = styled(Button)({
  backgroundColor: '#00AD4F',
  color: COLORS.white,
  width: '141px',
  height: '48px',
  borderRadius: '8px',
  flex: 'none'
});
const BoxNewType = styled(Box)({
  backgroundColor: COLORS.white,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '13px',
  width: '343px',
  height: '150px'
});
function DialogDownload({ openDialogDownload, setOpenDialogDownload }) {
  const platform = getMobileOperatingSystem();

  const handleClickAway = () => {
    setOpenDialogDownload(false);
  };

  const handleRefuseNewType = () => {
    setOpenDialogDownload(false);
  };

  const handleDownload = () => {
    setOpenDialogDownload(false);
    window.location = DEEP_LINK_CASHBOOK_APP;
    setTimeout(() => {
      if (platform.toLowerCase() === 'ios') {
        window.location.assign(LINK_CASHBOOK_DOWNLOAD_IOS);
      } else {
        window.location.assign(LINK_CASHBOOK_DOWNLOAD_ANDROID);
      }
    }, 1000);
  };

  return (
    <Box sx={{ height: '100%' }}>
      <Dialog
        open={openDialogDownload}
        onClose={handleClickAway}
        sx={{
          '& .MuiDialog-paper.MuiPaper-rounded': {
            borderRadius: '8px !important',
            backgroundColor: 'white',
            boxShadow: 'none'
          }
        }}
      >
        <BoxNewType className="">
          <TypographyText>Bạn có muốn tải app để sử dụng</TypographyText>
          <TypographyText>tính năng này ?</TypographyText>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              gap: '13px'
            }}
          >
            <ButtonDialog
              sx={{
                color: COLORS.darkLighter,
                backgroundColor: COLORS.white,
                border: `1px solid ${COLORS.darkLighter}`,
                '&.MuiButtonBase-root.MuiButton-root:hover': {
                  backgroundColor: COLORS.white
                }
              }}
              onClick={handleRefuseNewType}
            >
              Từ chối
            </ButtonDialog>
            <ButtonDialog
              sx={{
                '&.MuiButtonBase-root.MuiButton-root:hover': {
                  backgroundColor: COLORS.orange
                },
                backgroundColor: COLORS.orange
              }}
              onClick={handleDownload}
            >
              Xác nhận
            </ButtonDialog>
          </Box>
        </BoxNewType>{' '}
      </Dialog>
    </Box>
  );
}

export default DialogDownload;
