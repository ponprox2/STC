import React, { useEffect, useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import cashBookTotalAmount from './services/cashBookTotalAmount';
import Calendar from './Calendar';
import { COLORS } from 'src/constants';
import formatMoneyWithDot from './formatMoneyWithDot';

const SupperBox = styled(Box)(({ theme }) => ({
  width: '91.5%',
  height: '104px',
  margin: '0 auto',
  background: COLORS.white,
  boxShadow: ' 0px 24px 32px rgba(0, 80, 40, 0.03)',
  borderRadius: '8px',
  marginTop: '64px',
  [theme.breakpoints.down('mb')]: {
    height: '95px'
  },
  [theme.breakpoints.down('ss')]: {
    height: '95px'
  }
}));

const TypographyTemp = styled(Typography)(({ theme }) => ({
  fontFamily: 'SFProTextRegular',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '13px',
  lineHeight: '14px',
  color: COLORS.darkLighter,
  textAlign: 'center',
  [theme.breakpoints.down('mb')]: {
    fontSize: '11px',
    lineHeight: '14px'
  },
  [theme.breakpoints.down('ss')]: {
    fontSize: '10px',
    lineHeight: '14px'
  }
}));
const TypographyMoney = styled(Typography)(({ theme }) => ({
  fontFamily: 'SFProTextSemibold',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '18px',
  lineHeight: '16px',
  marginTop: '4px',
  height: '21px',
  textAlign: 'center',
  [theme.breakpoints.down('mb')]: {
    fontSize: '14px',
    lineHeight: '14px'
  },
  [theme.breakpoints.down('ss')]: {
    fontSize: '13px',
    lineHeight: '14px'
  }
}));
const TypographyDate = styled(Typography)({
  fontFamily: 'SFProTextRegular',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '17px',
  marginTop: '4px',
  height: '17px',
  color: '#545454'
});

const Typographycomparison = styled(Typography)(({ theme }) => ({
  fontFamily: 'SFProTextRegular',
  fontStyle: 'normal',
  fontSize: '14px',
  lineHeight: '17px',
  height: '21px',
  textAlign: 'center',
  color: COLORS.green,
  marginLeft: '2px',
  marginTop: '1px',
  [theme.breakpoints.down('mb')]: {
    fontSize: '12px',
    lineHeight: '14px',
    marginTop: '2px'
  },
  [theme.breakpoints.down('ss')]: {
    fontSize: '10px',
    lineHeight: '14px',
    marginTop: '3px'
  },
  [theme.breakpoints.down('se')]: {
    fontSize: '13px',
    lineHeight: '14px',
    marginTop: '3px'
  }
}));

function Label({ isSuccess, setStartTime, setEndTime, endTime, startTime }) {
  const [totalAmount, setTotalAmount] = useState({});
  function TolalMoneyInOUt() {
    let tempTotalMoney = 0;
    if (totalAmount?.total_amount_out >= totalAmount?.total_amount_in) {
      tempTotalMoney =
        totalAmount?.total_amount_out - totalAmount?.total_amount_in;
      return (
        <Box style={{ display: 'flex', margin: '13px 16px 0 0' }}>
          <TypographyTemp style={{ marginTop: '3px' }}>Số dư: </TypographyTemp>
          <Typographycomparison style={{ color: COLORS.orange }}>
            {' '}
            {formatMoneyWithDot(`${tempTotalMoney}`)}
          </Typographycomparison>
        </Box>
      );
    } else {
      tempTotalMoney =
        totalAmount?.total_amount_in - totalAmount?.total_amount_out || 0;
      return (
        <Box style={{ display: 'flex', margin: '13px 16px 0 0' }}>
          <TypographyTemp style={{ marginTop: '3px' }}>Số dư: </TypographyTemp>
          <Typographycomparison>
            {' '}
            {formatMoneyWithDot(`${tempTotalMoney}`)}
          </Typographycomparison>
        </Box>
      );
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('TOKEN');
    const business_id = localStorage.getItem('BUSINESS');

    const data = {
      business_id: business_id,
      token: token,
      start_time: startTime,
      end_time: endTime
    };

    async function getCashbookTotalAmount() {
      const response = await cashBookTotalAmount.getCashBookTotalAmountDetail(
        data
      );
      setTotalAmount(response?.data);
    }
    if (startTime) {
      getCashbookTotalAmount();
    }
  }, [isSuccess, startTime, endTime]);

  return (
    <SupperBox className="flex-start-column">
      <Box
        className="flex-evenly-center"
        style={{
          width: '100%',
          borderBottom: '1px solid #F6F6F6',
          marginTop: '16px'
        }}
      >
        <Box>
          <TypographyTemp>Tổng tiền chi</TypographyTemp>
          <TypographyMoney style={{ color: COLORS.orange }}>
            {totalAmount?.total_amount_out
              ? formatMoneyWithDot(`${totalAmount?.total_amount_out}`)
              : 0}
            ₫{' '}
          </TypographyMoney>
        </Box>
        <Box style={{ height: '40px', borderRight: '1px solid #F6F6F6' }} />
        <Box>
          <TypographyTemp>Tổng tiền thu</TypographyTemp>
          <TypographyMoney style={{ color: COLORS.green }}>
            {totalAmount?.total_amount_in
              ? formatMoneyWithDot(`${totalAmount?.total_amount_in}`)
              : 0}
            ₫{' '}
          </TypographyMoney>
        </Box>
      </Box>
      <Box
        className="flex-between"
        style={{
          width: '100%'
        }}
      >
        <Box style={{ display: 'flex', margin: '3px 0 0 0px' }}>
          <TypographyDate style={{ marginLeft: '6px' }}>
            <Calendar
              style={{ zIndex: '99999999' }}
              setStartTime={setStartTime}
              setEndTime={setEndTime}
            />
          </TypographyDate>
        </Box>
        <TolalMoneyInOUt />
      </Box>
    </SupperBox>
  );
}

export default Label;
