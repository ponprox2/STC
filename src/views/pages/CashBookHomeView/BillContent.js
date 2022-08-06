import React, { useState } from 'react';
import { Box, Typography, Input, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import moment from 'moment';
import 'moment/locale/vi';
import { COLORS } from 'src/constants';
import formatMoneyWithDot from './formatMoneyWithDot';

const BoxContent = styled(Box)(({ theme }) => ({
  width: '375px',
  height: '64px',
  background: '#F6F6F6',
  width: '100%',
  [theme.breakpoints.down('mb')]: {
    height: '53px'
  },
  [theme.breakpoints.down('ss')]: {
    height: '50px'
  }
}));

const BoxDay = styled(Box)(({ theme }) => ({
  width: '40px',
  height: '40px',
  background: COLORS.white,
  border: ' 1px solid rgba(145, 158, 171, 0.32)',
  borderRadius: '8px',
  [theme.breakpoints.down('mb')]: {
    width: '35px',
    height: '35px'
  },
  [theme.breakpoints.down('ss')]: {
    width: '30px',
    height: '30px'
  }
}));
const TypographyDay = styled(Typography)(({ theme }) => ({
  fontFamily: 'SFProTextSemibold',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '15px',
  lineHeight: '18px',
  textAlign: 'center',
  height: '100%',
  color: '#545454',
  [theme.breakpoints.down('mb')]: {
    fontSize: '14px',
    lineHeight: '16px'
  },
  [theme.breakpoints.down('ss')]: {
    fontSize: '13px',
    lineHeight: '16px'
  }
}));
const TypographyDate = styled(Typography)(({ theme }) => ({
  fontFamily: 'SFProTextMedium',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '17px',
  color: COLORS.primaryDark,
  margin: '3px 0 4px 8px',
  [theme.breakpoints.down('mb')]: {
    fontSize: '12px',
    lineHeight: '14px'
  },
  [theme.breakpoints.down('ss')]: {
    fontSize: '12px',
    lineHeight: '15px'
  }
}));
const TypographyMonth = styled(Typography)(({ theme }) => ({
  fontFamily: 'SFProTextRegular',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '17px',
  color: COLORS.darkLighter,
  marginLeft: '8px',
  [theme.breakpoints.down('mb')]: {
    fontSize: '9px',
    lineHeight: '15px'
  },
  [theme.breakpoints.down('ss')]: {
    fontSize: '9px',
    lineHeight: '15px'
  }
}));
const TypographyInOut = styled(Typography)(({ theme }) => ({
  fontFamily: 'SFProTextRegular',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '16px',
  display: 'block',
  textAlign: 'right',
  marginRight: '11px',
  color: COLORS.darkLighter
  // [theme.breakpoints.down('ss')]: {
  //   fontSize: '10px',
  //   lineHeight: '15px'
  // }
}));
const TypographyInOutMoney = styled(Typography)(({ theme }) => ({
  fontFamily: 'SFProTextSemibold',
  fontStyle: 'normal',
  fontSize: '14px',
  lineHeight: '17px',
  display: 'block',
  textAlign: 'right',
  height: '17px',
  marginRight: '11px',
  [theme.breakpoints.down('mb')]: {
    fontSize: '11px',
    lineHeight: '17px'
  },
  [theme.breakpoints.down('ss')]: {
    fontSize: '10px',
    lineHeight: '15px'
  }
}));
function BillContent({ data, current }) {
  const date = data.split('-');

  let [moneyOut, setmoneyOut] = useState(0);
  let [moneyIn, setMoneyIn] = useState(0);
  for (let i = 0; i < current.length; i++) {
    if (current[i].transaction_type === 'out') {
      moneyOut += current[i].amount;
    } else {
      moneyIn += current[i].amount;
    }
  }

  moment.locale('vi');
  var REFERENCE = moment(moment().format());
  var TODAY = REFERENCE.clone().startOf('day');
  var YESTERDAY = REFERENCE.clone().subtract(1, 'days').startOf('day');
  var TOMORROW = REFERENCE.clone().add(1, 'days').startOf('day');

  function isToday(momentDate) {
    return momentDate.isSame(TODAY, 'd');
  }
  function isYesterday(momentDate) {
    return momentDate.isSame(YESTERDAY, 'd');
  }

  function isTomorrow(momentDate) {
    return momentDate.isSame(TOMORROW, 'd');
  }
  function jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <BoxContent className="flex-between-center-row">
      <Box
        style={{
          padding: '8px 0px 8px 16px',
          display: 'flex',
          width: '40%',
          alignItems: 'center'
        }}
      >
        <BoxDay>
          <TypographyDay className="flex-center">{date[2]}</TypographyDay>
        </BoxDay>
        {moment().diff(data, 'days') === 0 ||
        moment().diff(data, 'days') === 1 ? (
          <Box>
            {
              <TypographyDate>
                {isTomorrow(moment(data)) && 'Ngày mai'}
                {isToday(moment(data)) && 'Hôm nay'}
                {isYesterday(moment(data)) && 'Hôm qua'}
              </TypographyDate>
            }

            <TypographyMonth>
              Tháng {date[1]}/{date[0].slice(2)}
            </TypographyMonth>
          </Box>
        ) : (
          <Box>
            {
              <TypographyDate>
                {jsUcfirst(moment(data).format('dddd'))}
              </TypographyDate>
            }

            <TypographyMonth>
              Tháng {date[1]}/{date[0].slice(2)}
            </TypographyMonth>
          </Box>
        )}
      </Box>
      {moneyOut > 0 ? (
        <Box style={{ width: '30%' }}>
          <TypographyInOut>Chi</TypographyInOut>
          <TypographyInOutMoney style={{ color: COLORS.orange }}>
            {formatMoneyWithDot(`${moneyOut}`)}
          </TypographyInOutMoney>
        </Box>
      ) : (
        <Box style={{ width: '30%' }}>
          <TypographyInOut>Chi</TypographyInOut>
          <TypographyInOutMoney
            style={{ color: COLORS.orange }}
          ></TypographyInOutMoney>
        </Box>
      )}
      {moneyIn > 0 ? (
        <Box style={{ width: '30%' }}>
          <TypographyInOut>Thu</TypographyInOut>
          <TypographyInOutMoney style={{ color: COLORS.green }}>
            {' '}
            {formatMoneyWithDot(`${moneyIn}`)}
          </TypographyInOutMoney>
        </Box>
      ) : (
        <Box style={{ width: '30%' }}>
          <TypographyInOut>Thu</TypographyInOut>
          <TypographyInOutMoney style={{ color: COLORS.green }}>
            {' '}
          </TypographyInOutMoney>
        </Box>
      )}
    </BoxContent>
  );
}

export default BillContent;
