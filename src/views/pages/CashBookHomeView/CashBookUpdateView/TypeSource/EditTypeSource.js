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
import DialogTypeSource from './DialogTypeSource';
import { COLORS } from 'src/constants';
// import EditMoneyTypeSource from './EditMoneyTypeSource';
// import DialogTypeSource from './DialogPaymenSource';

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
  marginTop: '-19px'
}));

const ButtonDrawer = styled(Button)({
  backgroundColor: '#00AD4F',
  color: '#FFFFFF',
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

const Type = styled(Box)({
  height: '63px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

const TypographyType = styled(Typography)({
  fontFamily: 'SFProText',
  fontWeight: '400',
  fontStyle: 'normal',
  fontSize: '15px',
  lineHeight: '160%',
  textTransform: 'none',
  color: '#545454'
});

function EditTypeSource({ openEditType, setOpenEditType, setOpenTypeDrawer }) {
  const [openDialogDelete, setOpenDialogDelete] = useState(false);
  const handleCloseEditTypeSource = () => {
    setOpenEditType(false);
  };
  const handleOpenEditType = () => {
    setOpenEditMoney(true);
    setOpenEditType(false);
  };

  const handleTurnBack = () => {
    setOpenEditType(false);
    setOpenTypeDrawer(true);
  };

  const handleDelete = () => {
    setOpenDialogDelete(true);
    setOpenEditType(false);
  };

  return (
    <Root>
      {' '}
      <CssBaseline />
      <Box
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            overflow: 'visible'
          }
        }}
      />
      <SwipeableDrawer
        anchor="bottom"
        open={openEditType}
        onClose={handleCloseEditTypeSource}
        onOpen={openEditType}
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
            height: '100%',
            padding: '10px'
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
                color: '#2A2A2A',
                marginTop: '0px'
              }}
            >
              Chỉnh sửa{' '}
            </Typography>
            <CloseIcon
              onClick={handleCloseEditTypeSource}
              style={{
                position: 'fixed',
                right: '20px',
                marginTop: '2px',
                cursor: 'poiter'
              }}
            />
          </Box>
          <Box sx={{ marginTop: '14px', height: '200px', width: '100%' }}>
            <Type>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                <ExcludeIconRed onClick={handleDelete} />
                <Box sx={{ marginLeft: '16px' }}>
                  <TypographyType>Tiền mặt</TypographyType>
                </Box>
              </Box>
              <Box sx={{ marginTop: '10px' }}>
                <EditIcon fill="#1877F2" onClick={handleOpenEditType} />
                <MoveArrow />
              </Box>
            </Type>
            <Type>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                <ExcludeIconRed onClick={handleDelete} />
                <Box sx={{ marginLeft: '16px' }}>
                  <TypographyType>Ngân hàng</TypographyType>
                </Box>
              </Box>
              <Box sx={{ marginTop: '10px' }}>
                <EditIcon fill="#1877F2" onClick={handleOpenEditType} />
                <MoveArrow />
              </Box>
            </Type>
            <Type>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                <ExcludeIconRed onClick={handleDelete} />
                <Box sx={{ marginLeft: '16px' }}>
                  <TypographyType>Thẻ tín dụng</TypographyType>
                </Box>
              </Box>
              <Box sx={{ marginTop: '10px' }}>
                <EditIcon fill="#1877F2" onClick={handleOpenEditType} />
                <MoveArrow />
              </Box>
            </Type>
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
                color: '#7F7F7F',
                backgroundColor: '#FFFFFF',
                border: '1px solid #7F7F7F',
                '&.MuiButtonBase-root.MuiButton-root:hover': {
                  backgroundColor: '#FFFFFF'
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
      <DialogTypeSource
        openDialogDelete={openDialogDelete}
        setOpenDialogDelete={setOpenDialogDelete}
      />
    </Root>
  );
}

export default EditTypeSource;
