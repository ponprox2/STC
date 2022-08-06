import React, { useEffect, useState } from 'react';
import { Alert, Avatar, Box, Snackbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Noti from 'src/assets/Images/noti';
import Dollar from 'src/assets/Images/dollar';
import { COLORS } from 'src/constants';
import userInfov2 from './services/userInfo';
import useBreakpoints from 'src/hooks/useBreakpoints';
import LogOutIcon from 'src/assets/Images/logOutIcon';
import DialogNotification from './Dialog/DialogNotification';

function TopBarCashBook() {
  const [userInfo, setUserInfo] = useState({});
  const isMobile = useBreakpoints('down', 'ss');
  const [openDialogNotification, setOpenDialogNotification] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const vertical = 'bottom';
  const horizontal = 'center';

  const AvataUser = styled(Avatar)(({ theme }) => ({
    width: '44px',
    height: '44px',
    border: '1px solid #E8E8E8',
    borderRadius: '427px',
    boxSizing: 'border-box'
  }));
  const TypographyName = styled(Typography)(({ theme }) => ({
    fontFamily: 'SFProTextSemibold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '15px',
    lineHeight: '18px',
    color: COLORS.primaryDark,
    [theme.breakpoints.down('mb')]: {
      fontSize: '13px',
      lineHeight: '13px'
    },
    [theme.breakpoints.down('ss')]: {
      fontSize: '12px',
      lineHeight: '15px'
    }
    // [theme.breakpoints.down('ss')]:{
    //   color: 'red'
    // }
  }));
  const TypographyUpdateUser = styled(Typography)(({ theme }) => ({
    fontFamily: 'SFProTextRegular',
    fontStyle: 'normal',
    fontWeight: '200',
    fontSize: '13px',
    lineHeight: '13px',
    color: COLORS.darkLighter,
    marginTop: '5px',
    [theme.breakpoints.down('mb')]: {
      fontSize: '13px',
      lineHeight: '13px'
    },
    [theme.breakpoints.down('ss')]: {
      fontSize: '12px',
      lineHeight: '14px'
    }
  }));

  const iconStyle = {
    width: '20px',
    height: '20px',
    marginRight: '5px'
  };

  useEffect(() => {
    async function getUserInfo() {
      const response = await userInfov2.getUserInfoV2();
      if (response.status === 200) {
        setUserInfo(response.data.data);
      }
    }
    getUserInfo();
  }, []);

  const handleOpenDialogNotification = () => {
    setOpenDialogNotification(true);
  };

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };
  const closeSnackbar = () => {
    setOpenSnackbar(false);
  };
  return (
    <div
      style={{
        background: COLORS.white,
        position: 'fixed',
        top: '0',
        zIndex: '1',
        width:"100%"
      }}
    >
      <Box
        className="flex-between-center"
        style={{
          height: '56px'
        }}
      >
        <Box
          className="flex-center-row"
          onClick={handleOpenSnackbar}
          style={{
            margin: '0px 0px 0px 16px',
            position: 'relative'
          }}
        >
          <AvataUser src={userInfo?.user_info?.avatar}></AvataUser>
          <Box
            className="flex-center-column"
            style={{
              margin: '0px 0px 0px 8px'
            }}
          >
            <TypographyName>{userInfo?.user_info?.full_name}</TypographyName>
            <TypographyUpdateUser>Chỉnh sửa tài khoản</TypographyUpdateUser>
          </Box>
        </Box>
        <Box style={isMobile ? { margin: '0' } : { margin: '13px 24px 0 0' }}>
          <Dollar
            style={isMobile ? iconStyle : { marginRight: '10px' }}
            onClick={handleOpenSnackbar}
          />
          <Noti
            style={isMobile ? iconStyle : { marginRight: '10px' }}
            onClick={handleOpenSnackbar}
          />
          <LogOutIcon
            style={
              isMobile
                ? iconStyle
                : { marginRight: '5px', width: '24px', height: '24px' }
            }
            onClick={handleOpenDialogNotification}
          />
        </Box>
      </Box>
      <DialogNotification
        openDialogNotification={openDialogNotification}
        setOpenDialogNotification={setOpenDialogNotification}
      />{' '}
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
    </div>
  );
}

export default TopBarCashBook;
