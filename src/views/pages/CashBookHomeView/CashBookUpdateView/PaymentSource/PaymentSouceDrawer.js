import React, { useState } from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey, red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CloseIcon from 'src/assets/Images/closeIcon';
import { TextField, InputAdornment } from '@mui/material';
import EditIcon from 'src/assets/Images/editIcon';
import Search from 'src/assets/Images/search';
import SquarePlus from 'src/assets/Images/squarePlus';
import LockIcon from 'src/assets/Images/lockIcon';
import NewPaymentSourceDrawer from './NewPaymentSourceDrawer';
import { transform } from 'lodash';
import EditPaymentSource from './EditPaymentSource';
import { COLORS } from 'src/constants';

const drawerBleeding = 150;

const Root = styled('div')(({ theme }) => ({
  // height: '100%',
  // display: 'none',
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
  // top: 8,
  left: 'calc(50% - 15px)',
  marginTop: '-18px'
}));

const BoxInput = styled(Box)({
  margin: '13px 0px 13px 0',
  borderRadius: '10px',
  color: 'red'
});

const InputContent = styled(TextField)({
  fontFamily: 'SFProTextRegular',
  borderRadius: '10px',
  color: 'red',
  // height: '16px',
  '& .MuiOutlinedInput-root': {
    background: '#F6F6F6',
    borderRadius: '8px',
    borderColor: 'none'
  },
  '& input': {
    marginTop: '-3px',
    padding: '10px 0px'
  }
});

const PaymentSourceBox = styled(Box)({
  width: '109px',
  height: '68px',
  backgroundColor: '#F6F9FC',
  borderRadius: '6px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '8px'
});

const TypographyReport = styled(Typography)({
  fontFamily: 'SFProText',
  fontWeight: '400',
  fontStyle: 'normal',
  fontSize: '15px',
  lineHeight: '160%',
  textTransform: 'none',
  color: '#545454'
});
function PaymentSouceDrawer({
  openPaymentDrawer,
  setOpenPaymentDrawer,
  setHide
}) {
  const [openEditPayment, setOpenEditPayment] = useState(false);
  const [openNewPayment, setOpenNewPayment] = useState(false);

  const handleNewPayment = () => {
    setOpenNewPayment(true);
    setOpenPaymentDrawer(false);
  };

  const handleClosePaymentDrawer = () => {
    setOpenPaymentDrawer(false);
    setHide(true);
  };

  const handleOpenEditPayment = () => {
    setOpenEditPayment(true);
    setOpenPaymentDrawer(false);
  };

  return (
    <Root>
      {' '}
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
        open={openPaymentDrawer}
        onClose={handleClosePaymentDrawer}
        onOpen={openPaymentDrawer}
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
              justifyContent: 'left',
              width: '100%'
            }}
          >
            <Box sx={{ display: 'flex' }}>
              <EditIcon
                style={{ marginRight: '5px', cursor: 'pointer' }}
                onClick={handleOpenEditPayment}
              />
              <Typography
                sx={{
                  fontFamily: 'SFProText',
                  fontWeight: '400',
                  fontStyle: 'normal',
                  fontSize: '15px',
                  lineHeight: '20px',
                  color: COLORS.green,
                  cursor: 'pointer'
                }}
                onClick={handleOpenEditPayment}
              >
                Chỉnh sửa
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: 'SFProText',
                fontWeight: '500',
                fontStyle: 'normal',
                fontSize: '17px',
                lineHeight: '20px',
                color: COLORS.primaryDark,
                marginTop: '0px',
                position: 'absolute',
                right: '50%',
                transform: 'translateX(35px)'
              }}
            >
              Nguồn tiền{' '}
            </Typography>
            <CloseIcon
              onClick={handleClosePaymentDrawer}
              style={{
                position: 'fixed',
                right: '20px',
                marginTop: '2px',
                cursor: 'poiter'
              }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-evenly'
            }}
          >
            <BoxInput zIndex="1" sx={{ width: '85% ' }}>
              <InputContent
                fullWidth
                placeholder="Tìm tên nguồn tiền"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  )
                }}
              ></InputContent>
            </BoxInput>
            <SquarePlus onClick={handleNewPayment} />
          </Box>
        </StyledBox>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          <PaymentSourceBox>
            <LockIcon />
            <TypographyReport>Ví điện tử</TypographyReport>
          </PaymentSourceBox>
          <PaymentSourceBox>
            <LockIcon />
            <TypographyReport>Ví điện tử</TypographyReport>
          </PaymentSourceBox>
          <PaymentSourceBox>
            <LockIcon />
            <TypographyReport>Ví điện tử</TypographyReport>
          </PaymentSourceBox>
          <PaymentSourceBox>
            <LockIcon />
            <TypographyReport>Ví điện tử</TypographyReport>
          </PaymentSourceBox>
          <PaymentSourceBox>
            <LockIcon />
            <TypographyReport>Ví điện tử</TypographyReport>
          </PaymentSourceBox>
          <PaymentSourceBox>
            <LockIcon />
            <TypographyReport>Ví điện tử</TypographyReport>
          </PaymentSourceBox>
        </Box>
      </SwipeableDrawer>
      <NewPaymentSourceDrawer
        openNewPayment={openNewPayment}
        setOpenNewPayment={setOpenNewPayment}
        setOpenPaymentDrawer={setOpenPaymentDrawer}
        setHide={setHide}
      />
      <EditPaymentSource
        setOpenPaymentDrawer={setOpenPaymentDrawer}
        openEditPayment={openEditPayment}
        setOpenEditPayment={setOpenEditPayment}
        setHide={setHide}
      />
    </Root>
  );
}

export default PaymentSouceDrawer;
