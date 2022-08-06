import React, { useState } from 'react';
import { Box, Button, InputAdornment, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import { COLORS } from 'src/constants';
import { useNavigate } from 'react-router';
import { PATH_PAGE } from 'src/routes/paths';

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
  height: '125px'
});
function DialogNotification({
  openDialogNotification,
  setOpenDialogNotification
}) {
  const navigate = useNavigate();
  //   const [logOut, setLogOut] = useState(false);

  const handleClickAway = () => {
    setOpenDialogNotification(false);
  };

  const handleLogOut = () => {
    localStorage.setItem('BUSINESS', '');
    localStorage.setItem('TOKEN', '');
    localStorage.setItem('REFRESHTOKEN', '');
    navigate(PATH_PAGE.QRCodeScreen);
  };

  const handleRefuseNewType = () => {
    setOpenDialogNotification(false);
  };

  return (
    <Box sx={{ height: '100%' }}>
      <Dialog
        open={openDialogNotification}
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
          <TypographyText>Bạn có muốn thoát ?</TypographyText>
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
              onClick={handleLogOut}
            >
              Xác nhận
            </ButtonDialog>
          </Box>
        </BoxNewType>{' '}
      </Dialog>
    </Box>
  );
}

export default DialogNotification;
