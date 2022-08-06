import React, { useEffect, useState } from 'react';
import { Box, Typography, Input } from '@mui/material';
import { styled } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import DetailCashbook from './DetailCashBook';
import FakeImg from 'src/assets/Images/fakeImg';
import { COLORS } from 'src/constants';
import formatMoneyWithDot from './formatMoneyWithDot';

const BoxContent = styled(Box)(({ theme }) => ({
  width: '375px',
  height: '56px',
  background: COLORS.white,
  width: '100%',
  borderBottom: '1px solid #EAEEF2',
  [theme.breakpoints.down('ss')]: {
    height: '45px'
  }
}));
const TypographyTypeList = styled(Typography)(({ theme }) => ({
  fontFamily: 'SFProTextRegular',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '13px',
  lineHeight: '16px',
  color: COLORS.darkLighter,
  [theme.breakpoints.down('ss')]: {
    fontSize: '11px',
    lineHeight: '14px'
  }
}));
const TypographyChild = styled(Typography)(({ theme }) => ({
  fontFamily: 'SFProTextRegular',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '17px',
  color: COLORS.primaryDark,
  [theme.breakpoints.down('ss')]: {
    fontSize: '12px',
    lineHeight: '14px'
  }
}));
const TypographyInOut = styled(Typography)(({ theme }) => ({
  fontFamily: 'SFProTextRegular',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '14px',
  display: 'block',
  textAlign: 'right',

  color: COLORS.darkLighter,
  marginRight: '11px',
  [theme.breakpoints.down('ss')]: {
    fontSize: '10px',
    lineHeight: '12px'
  }
}));
const TypographyInOutMoney = styled(Typography)(({ theme }) => ({
  fontFamily: 'SFProTextSemibold',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '17px',
  display: 'block',
  textAlign: 'right',

  height: '17px',
  marginTop: '14px',
  marginBottom: '6px',
  marginRight: '11px',
  [theme.breakpoints.down('mb')]: {
    fontSize: '12px',
    lineHeight: '14px'
  },
  [theme.breakpoints.down('ss')]: {
    fontSize: '10px',
    lineHeight: '13px',
    marginBottom: '3px'
  }
}));

function ListBill({ data, isSuccess, setIsSuccess, open, setOpen }) {
  const [indexArr, setIndexArr] = useState('');
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      {data.map((item, index) => (
        <Box key={index} onClick={() => setIndexArr(index)}>
          <BoxContent
            className="flex-between-center-row"
            onClick={toggleDrawer(true)}
          >
            <Box style={{ padding: '12px 0 13px 16px', width: '40%' }}>
              <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                <TypographyTypeList>
                  {' '}
                  {item?.category_name || 'Chưa phân loại'}
                </TypographyTypeList>
                {data[index]?.images && data[index]?.images.length > 0 && (
                  <FakeImg style={{ marginRight: '6px' }} />
                )}
              </Box>
              <TypographyChild maxWidth="120px" noWrap>
                {item?.description || ''}
              </TypographyChild>
            </Box>
            <Box
              style={{ background: '#F6F6F6', height: '55px', width: '30%' }}
            >
              {item?.transaction_type === 'out' && (
                <>
                  <TypographyInOutMoney style={{ color: COLORS.orange }}>
                    {formatMoneyWithDot(`${item?.amount}`)}
                  </TypographyInOutMoney>
                  <TypographyInOut>
                    {item.payment_source_name ? item.payment_source_name : ''}
                  </TypographyInOut>
                </>
              )}
            </Box>
            <Box style={{ width: '30%', height: '58px' }}>
              {item?.transaction_type === 'in' && (
                <>
                  <TypographyInOutMoney style={{ color: COLORS.green }}>
                    {formatMoneyWithDot(`${item?.amount}`)}
                  </TypographyInOutMoney>
                  <TypographyInOut>
                    {item.payment_source_name ? item.payment_source_name : ''}
                  </TypographyInOut>
                </>
              )}
            </Box>
          </BoxContent>
        </Box>
      ))}

      {indexArr !== '' && (
        <DetailCashbook
          open={open}
          setOpen={setOpen}
          data={data[indexArr]}
          setIsSuccess={setIsSuccess}
          isSuccess={isSuccess}
          setIndexArr={setIndexArr}
        />
      )}
    </>
  );
}

export default ListBill;
