import React, { useState } from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CloseIcon from 'src/assets/Images/closeIcon';
import { TextField } from '@mui/material';
import { COLORS } from 'src/constants';

const drawerBleeding = 100;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'none',
  backgroundColor:
    theme.palette.mode === 'light'
      ? grey[100]
      : theme.palette.background.default
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800]
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 36,
  height: 4,
  backgroundColor: 'white',
  borderRadius: 3,
  //   position: 'absolute',
  //   top: 8,
  left: 'calc(50% - 15px)',
  marginTop: '-18px'
}));
const PersonValid = styled(TextField)({
  height: '80px',
  width: '100%',
  //   position: 'relative',
  //   marginTop:'10px',
  max: '10',
  // borderRadius: '8px',
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#00AD4F !important'
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    // borderColor: '#00AD4F !important'
  },
  '& .css-z55xvs-MuiInputBase-root-MuiInput-root': {
    color: COLORS.darkGrey,
    fontSize: '18px',
    display: 'block'
  },
  '& .MuiInputBase-input': {
    borderBottom: `1px solid ${COLORS.darkGrey}`
  },
  '& .Mui-focused .MuiInputBase-input': {
    color: '#545454',
    borderBottom: '1px solid #00AD4F',
    fontWeight: '700',
    fontSize: '18px'
  }
});

const ButtonDrawer = styled(Button)({
  backgroundColor: COLORS.green,
  color: COLORS.white,
  width: '165px',
  height: '48px',
  borderRadius: '8px',
  flex: 'none'
});

const TypographyReport = styled(Typography)({
  fontFamily: 'SFProText',
  fontWeight: '400',
  fontStyle: 'normal',
  fontSize: '12px',
  lineHeight: '160%',
  textTransform: 'none',
  color: '#FF4842'
});

function PersonDrawer({
  openDrawer,
  setOpenDrawer,
  setOpenDialog,
  person,
  setPerson,
  phone,
  setPhone,
  setConfirm,
  setHide
}) {
  const toggleDrawer = () => {
    setOpenDrawer(true);
  };
  const handleClose = () => {
    setOpenDrawer(false);

    setHide(true);
  };

  const handleClick = () => {};

  const handleChangePerson = (e) => {
    setPerson(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleTurnBack = () => {};

  const handleConfirm = () => {
    if (phone.length < 10 && phone.length > 10) {
      setPhone(phone);
    } else if (phone.length === 10) {
      handleClose();
      setConfirm(true);
    }
  };
  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible'
          }
        }}
      />
      <SwipeableDrawer
        anchor="bottom"
        open={openDrawer}
        onClose={handleClose}
        onOpen={openDrawer}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          '& .MuiDrawer-paper': {
            borderRadius: '8px 8px 0px 0px'
          }
        }}
      >
        <StyledBox
          className="flex-center-center-column"
          sx={{
            borderTopRightRadius: '6px',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            width: '100%',
            padding: '10px'
          }}
        >
          <Box>
            <Puller />
          </Box>
          <Box sx={{ height: '48px' }}>
            <Typography
              sx={{
                fontFamily: 'SFProText',
                fontWeight: '500',
                fontStyle: 'normal',
                fontSize: '17px',
                lineHeight: '20px',
                color: COLORS.primaryDark,
                marginTop: '0px'
              }}
            >
              Tạo khách hàng mới{' '}
              <CloseIcon
                onClick={handleClose}
                style={{ position: 'fixed', right: '20px', marginTop: '2px' }}
              />
            </Typography>
          </Box>
          <Box sx={{ height: '188px', width: '100%', marginTop: '14px' }}>
            <PersonValid
              label="Tên liên hệ *"
              id="standard"
              placeholder="Ví dụ: Nguyễn Văn A"
              variant="standard"
              value={person}
              onChange={handleChangePerson}
              onClick={handleClick}
            />{' '}
            <Box>
              <PersonValid
                label="Số điện thoại"
                id="standard"
                placeholder="Ví dụ: 0123456789"
                variant="standard"
                type="number"
                value={phone}
                onChange={handleChangePhone}
              />
              {phone.length !== 10 && (
                <TypographyReport
                  sx={{ marginTop: '-20px', marginBottom: '10px' }}
                >
                  Số điện thoại không hợp lệ
                </TypographyReport>
              )}
            </Box>
            <Box
              className="flex-evenly-center-row"
              sx={{
                boxShadow: ' 0px -2px 4px rgba(46, 46, 46, 0.04)',

                height: '72px'
              }}
            >
              <ButtonDrawer
                sx={{
                  color: COLORS.darkLighter,
                  backgroundColor: COLORS.white,
                  border: `1px solid ${COLORS.darkLighter}`,
                  '&.MuiButtonBase-root.MuiButton-root:hover': {
                    backgroundColor: COLORS.white
                  }
                }}
                onClick={handleTurnBack}
              >
                Quay lại
              </ButtonDrawer>
              <ButtonDrawer
                sx={{
                  '&.MuiButtonBase-root.MuiButton-root:hover': {
                    backgroundColor: COLORS.orange
                  },
                  backgroundColor: COLORS.orange
                }}
                onClick={handleConfirm}
              >
                Xác nhận
              </ButtonDrawer>
            </Box>
          </Box>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

export default PersonDrawer;
