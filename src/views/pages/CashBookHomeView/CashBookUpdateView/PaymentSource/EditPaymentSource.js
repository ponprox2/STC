import React, { useState } from 'react';
// import { Box } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CloseIcon from 'src/assets/Images/closeIcon';
import { TextField, InputAdornment } from '@mui/material';
import CloseCircle from 'src/assets/Images/closeCircle';
import ExcludeIcon from 'src/assets/Images/excludeIcon';
import EditIcon from 'src/assets/Images/editIcon';
import MoveArrow from 'src/assets/Images/moveArrow';
import ExcludeIconRed from 'src/assets/Images/excludeIconRed';
import EditMoneyPaymentSource from './EditMoney';
import DialogPaymentSource from './DialogPaymenSource';
import { COLORS } from 'src/constants';

const drawerBleeding = -30;

const Root = styled('div')(({ theme }) => ({
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
  left: 'calc(50% - 15px)',
  marginTop: '-18px'
}));

const ButtonDrawer = styled(Button)({
  backgroundColor: COLORS.green,
  color: COLORS.white,
  width: '165px',
  height: '48px',
  borderRadius: '8px',
  flex: 'none'
});

const InputValid = styled(TextField)({
  height: '80px',
  width: '100%',
  '& .MuiInput-underline': {
    borderBottom: '1px solid rgba(145, 158, 171, 0.32) !important'
  },
  '& .Mui-focused ': {
    borderBottom: '1px solid #00AD4F !important'
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#00AD4F !important'
  },
  '& .css-z55xvs-MuiInputBase-root-MuiInput-root': {
    color: COLORS.darkGrey,
    fontSize: '18px',
    display: 'flex'
  },
  '& .Mui-focused .MuiInputBase-input': {
    color: '#545454',
    fontWeight: '700',
    fontSize: '18px'
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#00AD4F !important',
    borderBottom: 'none !important'
  }
});

const Payment = styled(Box)({
  height: '63px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

const TypographyPayment = styled(Typography)({
  fontFamily: 'SFProText',
  fontWeight: '400',
  fontStyle: 'normal',
  fontSize: '15px',
  lineHeight: '160%',
  textTransform: 'none',
  color: '#545454'
});

const TypographyMoney = styled(Typography)({
  fontFamily: 'SFProText',
  fontWeight: '400',
  fontStyle: 'normal',
  fontSize: '15px',
  lineHeight: '160%',
  textTransform: 'none',
  color: COLORS.green
});

function EditPaymentSource({
  openEditPayment,
  setOpenEditPayment,
  setOpenPaymentDrawer,
  setHide
}) {
  const [openEditMoney, setOpenEditMoney] = useState(false);
  const [openDialogDelete, setOpenDialogDelete] = useState(false);
  const handleCloseEditPaymentSource = () => {
    setOpenEditPayment(false);
  };
  const handleOpenEditMoney = () => {
    setOpenEditMoney(true);
    setOpenEditPayment(false);
  };

  const handleTurnBack = () => {
    setOpenEditPayment(false);
    setOpenPaymentDrawer(true);
  };

  const handleDelete = () => {
    setOpenDialogDelete(true);
    setOpenEditPayment(false);
  };

  return (
    <Root>
      {' '}
      <CssBaseline />
      <Box
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: '300px',
            overflow: 'visible'
          }
        }}
      />
      <SwipeableDrawer
        anchor="bottom"
        open={openEditPayment}
        onClose={handleCloseEditPaymentSource}
        onOpen={openEditPayment}
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
          sx={{
            borderTopRightRadius: '6px',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            padding: '10px'
            // height: '101px'
          }}
        >
          <Box>
            <Puller />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%'
            }}
          >
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
              Chỉnh sửa{' '}
            </Typography>
            <CloseIcon
              onClick={handleCloseEditPaymentSource}
              style={{
                position: 'fixed',
                right: '20px',
                marginTop: '2px',
                cursor: 'poiter'
              }}
            />
          </Box>
          <Box sx={{ marginTop: '14px', height: '200px', width: '100%' }}>
            <Payment>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                <ExcludeIcon onClick={handleDelete} />
                <Box sx={{ marginLeft: '16px' }}>
                  <TypographyPayment>Tiền mặt</TypographyPayment>
                  <TypographyMoney>5.000.000</TypographyMoney>
                </Box>
              </Box>
              <Box sx={{ marginTop: '10px' }}>
                <EditIcon fill="#1877F2" onClick={handleOpenEditMoney} />
                <MoveArrow />
              </Box>
            </Payment>
            <Payment>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                <ExcludeIcon onClick={handleDelete} />
                <Box sx={{ marginLeft: '16px' }}>
                  <TypographyPayment>Ngân hàng</TypographyPayment>
                  <TypographyMoney>0</TypographyMoney>
                </Box>
              </Box>
              <Box sx={{ marginTop: '10px' }}>
                <EditIcon fill="#1877F2" onClick={handleOpenEditMoney} />
                <MoveArrow />
              </Box>
            </Payment>
            <Payment>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                <ExcludeIconRed onClick={handleDelete} />
                <Box sx={{ marginLeft: '16px' }}>
                  <TypographyPayment>Thẻ tín dụng</TypographyPayment>
                  <TypographyMoney sx={{ color: COLORS.orange }}>
                    -5.000.000
                  </TypographyMoney>
                </Box>
              </Box>
              <Box sx={{ marginTop: '10px' }}>
                <EditIcon fill="#1877F2" onClick={handleOpenEditMoney} />
                <MoveArrow />
              </Box>
            </Payment>
          </Box>
          <Box
            sx={{
              boxShadow: ' 0px -2px 4px rgba(46, 46, 46, 0.04)',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              height: '72px',
              gap: '13px'
            }}
          >
            <ButtonDrawer
              sx={{
                color:  COLORS.darkLighter,
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
              // onClick={handleConfirm}
            >
              Cập nhập
            </ButtonDrawer>
          </Box>
        </StyledBox>
      </SwipeableDrawer>
      <EditMoneyPaymentSource
        openEditMoney={openEditMoney}
        setOpenEditMoney={setOpenEditMoney}
        setOpenEditPayment={setOpenEditPayment}
        setHide={setHide}
      />
      <DialogPaymentSource
        openDialogDelete={openDialogDelete}
        setOpenDialogDelete={setOpenDialogDelete}
        setHide={setHide}
      />
    </Root>
  );
}

export default EditPaymentSource;
