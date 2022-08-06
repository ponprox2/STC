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
import EditIcon from 'src/assets/Images/editIcon';
import Search from 'src/assets/Images/search';
import SquarePlus from 'src/assets/Images/squarePlus';
import PenIcon from 'src/assets/Images/penIcon';
import EditTypeSource from './EditTypeSource';
import { COLORS } from 'src/constants';

const drawerBleeding = 150;

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
  display: 'none',

  left: 'calc(50% - 15px)',
  marginTop: '-18px'
}));

const BoxInput = styled(Box)({
  margin: '13px 0px 13px 0',
  borderRadius: '10px'
});

const InputContent = styled(TextField)({
  fontFamily: 'SFProTextRegular',
  borderRadius: '10px',

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

const TypeSourceBox = styled(Box)({
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
function TypeSourceDrawer({ setOpenTypeDrawer, openTypeDrawer }) {
  const [openEditType, setOpenEditType] = useState(false);

  const handleOpenEditType = () => {
    setOpenEditType(true);
    setOpenTypeDrawer(false);
  };

  const handleCloseTypeDrawer = () => {
    setOpenTypeDrawer(false);
  };

  return (
    <Root>
      {' '}
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            overflow: 'visible'
          }
        }}
      />
      <SwipeableDrawer
        anchor="bottom"
        open={openTypeDrawer}
        onClose={handleCloseTypeDrawer}
        onOpen={openTypeDrawer}
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
          className=".flex-evenly-center-row"
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
                onClick={setOpenEditType}
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
                onClick={handleOpenEditType}
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
              Phân loại{' '}
            </Typography>
            <CloseIcon
              style={{
                position: 'fixed',
                right: '20px',
                marginTop: '2px',
                cursor: 'poiter'
              }}
            />
          </Box>
          <Box
            className="flex-evenly-center"
            sx={{
              width: '100%'
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

            <SquarePlus style={{ cursor: 'pointer' }} />
          </Box>
        </StyledBox>
        <Box
          className="flex-evenly"
          sx={{
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          <TypeSourceBox>
            <PenIcon />
            <TypographyReport>Ví điện tử</TypographyReport>
          </TypeSourceBox>
          <TypeSourceBox>
            <PenIcon />
            <TypographyReport>Ví điện tử</TypographyReport>
          </TypeSourceBox>
          <TypeSourceBox>
            <PenIcon />
            <TypographyReport>Ví điện tử</TypographyReport>
          </TypeSourceBox>
          <TypeSourceBox>
            <PenIcon />
            <TypographyReport>Ví điện tử</TypographyReport>
          </TypeSourceBox>
          <TypeSourceBox>
            <PenIcon />
            <TypographyReport>Ví điện tử</TypographyReport>
          </TypeSourceBox>
          <TypeSourceBox>
            <PenIcon />
            <TypographyReport>Ví điện tử</TypographyReport>
          </TypeSourceBox>
        </Box>
      </SwipeableDrawer>
      <EditTypeSource
        openEditType={openEditType}
        setOpenEditType={setOpenEditType}
        setOpenTypeDrawer={setOpenTypeDrawer}
      />
    </Root>
  );
}

export default TypeSourceDrawer;
