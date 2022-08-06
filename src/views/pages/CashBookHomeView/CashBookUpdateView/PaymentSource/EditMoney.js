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
import { TextField, InputAdornment } from '@mui/material';
import CloseCircle from 'src/assets/Images/closeCircle';
import DialogPaymentSource from './DialogPaymenSource';
import { COLORS } from 'src/constants';

const drawerBleeding = 100;

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
  backgroundColor: '#00AD4F',
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

function EditMoneyPaymentSource({
  openEditMoney,
  setOpenEditMoney,
  setOpenEditPayment,
  setHide
}) {
  const [openDialogEditPayment, setOpenDialogEditPayment] = useState(false);
  const handleCloseEditMoney = () => {
    setOpenEditMoney(false);
  };

  const handleTurnBack = () => {
    setOpenEditMoney(false);
    setOpenEditPayment(true);
  };

  const handleConfirm = () => {
    setOpenDialogEditPayment(true);
    setOpenEditMoney(false);
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
        open={openEditMoney}
        onClose={handleCloseEditMoney}
        onOpen={openEditMoney}
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
              Chỉnh sửa nguồn tiền{' '}
            </Typography>
            <CloseIcon
              onClick={handleCloseEditMoney}
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
              height: '188px',
              width: '100%',
              marginTop: '14px',
              padding: '5px'
            }}
          >
            <InputValid
              label="Tên nguồn tiền *"
              id="input-with-icon-textfield"
              //   placeholder="Ví dụ: Thẻ tín dụng"
              defaultValue={'Tiền mặt'}
              disabled
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{ cursor: 'pointer' }}>
                    {/* <CloseCircle /> */}
                  </InputAdornment>
                )
              }}
              variant="standard"
              // value={person}
              // onChange={handleChangePerson}
              // onClick={handleClick}
            />{' '}
            <Box>
              <InputValid
                label="Số dư ban đầu"
                id="standard"
                placeholder="Ví dụ: 0123456789"
                variant="standard"
                type="number"
                defaultValue={0}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sx={{ cursor: 'pointer' }}>
                      <CloseCircle />
                    </InputAdornment>
                  )
                }}
              />
            </Box>
          </Box>
          <Box
            className="flex-evenly-center-row"
            sx={{
              boxShadow: ' 0px -2px 4px rgba(46, 46, 46, 0.04)',

              height: '72px',
              gap: '13px'
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
        </StyledBox>
      </SwipeableDrawer>
      <DialogPaymentSource
        setOpenDialogEditPayment={setOpenDialogEditPayment}
        openDialogEditPayment={openDialogEditPayment}
        setHide={setHide}
      />
    </Root>
  );
}

export default EditMoneyPaymentSource;
