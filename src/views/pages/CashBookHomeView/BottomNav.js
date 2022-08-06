import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Divider,
  Snackbar,
  Alert
} from '@mui/material';
import { styled } from '@mui/material/styles';
import NavigationDebt from 'src/assets/Images/navigationDebt';
import NavigationOut from 'src/assets/Images/navigationOut';
import { COLORS } from 'src/constants';
import Bottom from './Bottom';

const BoxConented = styled(Box)({
  position: 'fixed',
  bottom: '0px',
  left: 0,
  background: COLORS.white,
  height: '56px',
  width: '100%',
  zIndex: '1'
});
const ButtonAll = styled(Button)({
  display: 'block',
  color: COLORS.orange,
  width: '100%',
  '& .MuiButtonBase-root-MuiButton-root:hover': {
    backgroundColor: 'none'
  },
  '&:hover': {
    backgroundColor: 'transparent'
  },
  '& .MuiTouchRipple-root': {
    backgroundColor: 'none'
  }
});
const TypographyAll = styled(Typography)(({ theme }) => ({
  fontFamily: 'SFProTextMedium',
  ontStyle: 'normal',
  fontWeight: '500',
  fontSize: '10px',
  lineHeight: '12px',
  color: COLORS.darkLighter,
  display: 'block',
  marginTop: '4px'
}));

const SmallBox = styled(Box)(({ theme }) => ({
  width: '50%'
  // backgroundColor: 'red'
}));

function BottomNav() {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const vertical = 'top';
  const horizontal = 'center';

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const closeSnackbar = () => {
    setOpenSnackbar(false);
  };
  const orange = {
    color: COLORS.orange
  };

  return (
    <BoxConented className="flex-center">
      <Box width="100%" onClick={handleOpenSnackbar}>
        {/* <Box
          width="30%"
          height="2px"
          bgcolor={type === 'paymentbook' ? orange.color : 'none'}
          margin="0 auto"
          marginTop="-5px"
        /> */}
        <ButtonAll
          disableRipple
          className="flex-center-center-column"
        >
          <NavigationDebt
          // fill={type === 'paymentbook' ? orange.color : COLORS.darkGrey}
          />
          {/* sx={type === 'paymentbook' ? orange : {}} */}
          <TypographyAll>Sổ chi</TypographyAll>
        </ButtonAll>
      </Box>
      <Box width="100%" onClick={handleOpenSnackbar}>
        {/* <Box
          width="30%"
          height="2px"
          bgcolor={type === 'debtbook' ? orange.color : 'none'}
          margin="0 auto"
          marginTop="-5px"
        /> */}
        <ButtonAll
          disableRipple
          className="flex-center-center-column"
        >
          <NavigationOut
          // fill={type === 'debtbook' ? orange.color : COLORS.darkGrey}
          />
          {/* sx={type === 'debtbook' ? orange : {}} */}
          <TypographyAll>Sổ thu</TypographyAll>
        </ButtonAll>
      </Box>
      <Bottom />
      <Snackbar
        open={openSnackbar}
        onClose={closeSnackbar}
        autoHideDuration={800}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        <Alert severity="warning" sx={{ width: '100%' }}>
          Tính năng này đang được phát triển !
        </Alert>
      </Snackbar>
    </BoxConented>
  );
}

export default BottomNav;
