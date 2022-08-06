import React, { useState, useEffect } from 'react';
import { Global } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Typography, Input, Avatar } from '@mui/material';
import { grey, red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Exit from 'src/assets/Images/exit';
import CircleDown from 'src/assets/Images/circleDown';
import CircleUp from 'src/assets/Images/circleUp';
import BottomDetail from './BottomDetail';
import { COLORS } from 'src/constants';
import formatMoneyWithDot from './formatMoneyWithDot';
// import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Skeleton from '@mui/material/Skeleton';
import Drawer from 'react-modern-drawer';
import 'react-slideshow-image/dist/styles.css';
import 'react-modern-drawer/dist/index.css';
import DialogImage from './Dialog/DialogImage';

const drawerBleeding = 0;

const Root = styled('div')(({ theme }) => ({
  // height: '100%',
  // display: 'none',
  backgroundColor:
    theme.palette.mode === 'light'
      ? grey[100]
      : theme.palette.background.default
}));

const BoxDetail = styled(Box)({
  borderBottom: '1px solid #F6F6F6'
});
const SupperBox = styled(Box)({
  background: COLORS.white,
  borderRadius: '16px 16px 0px 0px',
  padding: '0 16px',
  position: 'absolute',
  bottom: '8px',
  left: 0,
  zIndex: '100000000000',
  width: '100%'
});
const TypographyInOut = styled(Typography)(({ theme }) => ({
  fontFamily: 'SFProTextMedium',
  [theme.breakpoints.down('ss')]: {
    fontSize: '12px',
    lineHeight: '14px'
  }
}));
const TypographyAll = styled(Typography)(({ theme }) => ({
  fontFamily: 'SFProTextRegular',
  [theme.breakpoints.down('ss')]: {
    fontSize: '14px',
    lineHeight: '16px'
  }
}));
const TypographyDate = styled(Typography)(({ theme }) => ({
  fontFamily: 'SFProTextRegular',
  color: COLORS.darkLighter,
  fontSize: '13px',
  lineHeight: '16px',
  [theme.breakpoints.down('ss')]: {
    fontSize: '11px',
    lineHeight: '14px'
  }
}));
const TypographyMoney = styled(Typography)(({ theme }) => ({
  fontFamily: 'SFProTextSemibold',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '20px',
  lineHeight: '24px',
  marginRight: '18px',
  [theme.breakpoints.down('ss')]: {
    fontSize: '17px',
    lineHeight: '19px'
  }
}));
const AvataUser = styled(Avatar)({
  width: '44px',
  height: '44px',
  border: '1px solid #E8E8E8',
  borderRadius: '427px',
  boxSizing: 'border-box'
});
const TypographyName = styled(Typography)(({ theme }) => ({
  fontFamily: 'SFProTextSemibold',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '15px',
  lineHeight: '18px',
  color: COLORS.primaryDark,
  [theme.breakpoints.down('ss')]: {
    fontSize: '14px',
    lineHeight: '16px'
  }
}));
const TypographyUpdateUser = styled(Typography)({
  fontFamily: 'SFProTextRegular',
  fontStyle: 'normal',
  fontWeight: '200',
  fontSize: '16px',
  lineHeight: '18px',
  color: COLORS.darkLighter,
  marginTop: '5px'
});

function DetailCashBook({
  setOpen,
  data,
  setIsSuccess,
  isSuccess,
  open,
  setIndexArr
}) {
  const [user, setUser] = useState(false);
  const [dateTime, setDateTime] = useState('');
  const [openDialogImage, setOpenDialogImage] = useState(false);
  const [image, setImage] = useState([]);
  const [indexImage, setIndexImage] = useState('');

  useEffect(() => {
    if (data?.day) {
      const date = data?.day.split('T')[0].split('-');
      const day = date[2];
      const month = date[1];
      const year = date[0].slice(2);
      setDateTime(`${day}/${month}/${year}`);
    }
  }, []);
  const toggleDrawer = () => {
    setIndexArr('');
    setOpen(false);
  };

  const handleOpenImg = (value, index) => {
    setImage(data?.images);
    setIndexImage(index);
    setOpenDialogImage(true);
  };

  return (
    <>
      <Drawer
        open={open}
        onClose={toggleDrawer}
        direction="bottom"
        sx={{
          '& .MuiDrawer-paper': {
            borderRadius: '8px 8px 0px 0px'
          }
        }}
      >
        <Box>
          <SupperBox>
            <BoxDetail className="flex-between">
              <Typography margin="26px 0 12px 16px">
                Chi tiết giao dịch
              </Typography>
              <Exit
                onClick={() => {
                  setIndexArr('');
                  setOpen(false);
                }}
                style={{ margin: '26px 5px 12px 0' }}
              />
            </BoxDetail>
            <Box
              className="flex-between"
              style={{
                borderBottom: '1px solid #F6F6F6',
                marginTop: '28px'
              }}
            >
              <Box style={{ display: 'flex' }}>
                {data?.transaction_type === 'in' ? (
                  <CircleDown style={{ margin: '0px 8px 32px 0px' }} />
                ) : (
                  <CircleUp style={{ margin: '0px 8px 32px 0px' }} />
                )}
                <Box>
                  <TypographyInOut>
                    Khoản {data?.transaction_type === 'in' ? 'thu' : 'chi'}
                  </TypographyInOut>
                  <TypographyDate>{dateTime}</TypographyDate>
                </Box>
              </Box>
              <TypographyMoney
                sx={{
                  color:
                    data?.transaction_type === 'in'
                      ? COLORS.green
                      : COLORS.orange
                }}
              >
                {' '}
                {formatMoneyWithDot(`${data?.amount}`)}₫
              </TypographyMoney>
            </Box>

            {user ? (
              <Box
                style={{ borderBottom: '1px solid #F6F6F6', marginTop: '12px' }}
              >
                <TypographyDate marginBottom="4px">
                  Cho khách hàng
                </TypographyDate>
                <Box style={{ display: 'flex' }}>
                  <AvataUser src="https://genk.mediacdn.vn/2019/9/13/photo-1-1568393778010607955364.jpg"></AvataUser>
                  <Box style={{ paddingLeft: '8px' }}>
                    <TypographyName>Bảo My</TypographyName>
                    <TypographyUpdateUser>0906624069</TypographyUpdateUser>
                  </Box>
                </Box>
              </Box>
            ) : (
              <></>
            )}
            <Box
              style={{ borderBottom: '1px solid #F6F6F6', marginTop: '12px' }}
            >
              <TypographyDate marginBottom="4px">Phân loại</TypographyDate>
              <TypographyAll marginBottom="12px">
                {data?.category_name}
              </TypographyAll>
            </Box>

            <Box
              style={{ borderBottom: '1px solid #F6F6F6', marginTop: '12px' }}
            >
              <TypographyDate marginBottom="4px"> Nguồn tiền</TypographyDate>
              <TypographyAll marginBottom="12px">
                {data?.payment_source_name}
              </TypographyAll>
            </Box>
            <Box
              style={{ borderBottom: '1px solid #F6F6F6', marginTop: '12px' }}
            >
              <TypographyDate marginBottom="4px">Ghi chú</TypographyDate>
              <TypographyAll marginBottom="12px">
                {data?.description}
              </TypographyAll>
            </Box>
            {data?.images && data?.images.length !== 0 ? (
              <Box
                style={{
                  borderBottom: '1px solid #F6F6F6',
                  marginTop: '12px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <TypographyDate marginBottom="4px">Hình ảnh</TypographyDate>
                <Box className="flex-row">
                  {data?.images &&
                    data?.images.map((value, index) => (
                      <img
                        onClick={() => handleOpenImg(value, index)}
                        marginBottom="12px"
                        src={value}
                        style={{
                          width: '80px',
                          height: '80px',
                          borderRadius: '8px',
                          marginRight: '7px',
                          border: '2px solid #D7D7D7',
                          objectFit: 'cover'
                        }}
                      />
                    ))}
                </Box>
              </Box>
            ) : (
              ''
            )}
          </SupperBox>
          {/* <BottomDetail
            data={data}
            setOpen={setOpen}
            setIsSuccess={setIsSuccess}
            isSuccess={isSuccess}
            setIndexArr={setIndexArr}
          /> */}
        </Box>
        <DialogImage
          setOpenDialogImage={setOpenDialogImage}
          openDialogImage={openDialogImage}
          image={image}
          index={indexImage}
        />
      </Drawer>
    </>
  );
}

export default DetailCashBook;
