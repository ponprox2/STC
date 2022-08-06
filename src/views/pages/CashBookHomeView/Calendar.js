import React, { useEffect, useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { MenuItem, Select, Box, Typography } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ClickAwayListener } from '@mui/material';
import { DateRange } from 'react-date-range';
import { styled } from '@mui/material/styles';
import { vi } from 'date-fns/esm/locale';
import moment from 'moment';
import { COLORS } from 'src/constants';

const TypographyDate = styled(Typography)(({ theme }) => ({
  fontFamily: 'SFProTextMedium',
  ontStyle: 'normal',
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '17px',
  color: COLORS.darkest,
  display: 'block',
  marginTop: '4px',
  margin: '1px 7px 0 4px',
  [theme.breakpoints.down('mb')]: {
    fontSize: '10px',
    lineHeight: '11px',
    margin: '4px 10px 0 4px'
  },
  [theme.breakpoints.down('se')]: {
    fontSize: '13px',
    lineHeight: '14px',
    margin: '4px 10px 0 4px'
  },
  [theme.breakpoints.down('ss')]: {
    fontSize: '8px',
    lineHeight: '10px',
    margin: '4px 10px 0 4px'
  }
}));

const DateRangePicker = styled(DateRange)(({ theme }) => ({
  fontFamily: 'SFProTextMedium',
  ontStyle: 'normal',
  fontWeight: '500',
  fontSize: '13px',
  lineHeight: '12px',
  color: COLORS.darkLighter,
  display: 'block',
  marginTop: '4px',
  margin: '4px 10px 0 4px',

  [theme.breakpoints.down('ss')]: {
    fontSize: '10px',
    lineHeight: '10px',
    width: '70%',
    '& .rdrMonthAndYearWrapper': {
      width: '65%'
    },
    '& .rdrMonthPicker    ': {
      width: '120%'
    },
    '& .rdrMonthAndYearPickers': {
      width: '110%',
      height: 'none'
    },
    '& .rdrWeekDays': {
      width: '70%',
      fontSize: '10px'
    },
    '& .rdrDays': {
      width: '70%',
      fontSize: '10px'
    }
  }
}));

function Calendar({ setStartTime, setEndTime }) {
  const [valueCheckBox, setValueCheckBox] = useState('today');
  const [timeChoose, setTimeChoose] = useState('');
  const [endTimeChoose, setEndTimeChoose] = useState('');
  const [openTime, setOpenTime] = useState(false);
  const [openDateOption, setOpenDateOption] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const SelectStyle = styled(Select)(() => ({
    maxWidth: '20px',
    marginleft: '15px',
    '& fieldset': {
      border: 'none'
    },
    '& .MuiSelect-select': {
      padding: 0
    }
  }));

  const handleClickAway = () => {
    setOpenTime(false);
  };

  const handleOpenCalendar = () => {
    setOpenDateOption(true);
    setValueCheckBox('');
  };

  useEffect(() => {
    const startTimeOther = moment(`${state[0].startDate}`)
      .startOf('day')
      .format('yyyy-MM-DD');
    const endTimeOther = moment(`${state[0].endDate}`)
      .startOf('day')
      .format('yyyy-MM-DD');
    setStartTime(`${startTimeOther}T00:00:00.000Z`);
    setEndTime(`${endTimeOther}T23:59:59.000Z`);
    setTimeChoose(moment(startTimeOther).format('DD/MM/YY'));
    setEndTimeChoose(moment(endTimeOther).format('DD/MM/YY'));
  }, [state[0].startDate, state[0].endDate]);

  useEffect(() => {
    switch (valueCheckBox) {
      case 'yesterday':
        const daytYesterday = moment().subtract(1, 'days').toString();
        const endOfDayBefor = moment(daytYesterday)
          .endOf('day')
          .format('yyyy-MM-DD');
        const startOfDayBefor = moment(daytYesterday)
          .startOf('day')
          .format('yyyy-MM-DD');
        setStartTime(`${startOfDayBefor}T00:00:00.000Z`);
        setEndTime(`${endOfDayBefor}T23:59:59.000Z`);
        setTimeChoose(moment(startOfDayBefor).format('DD/MM/YY'));
        setEndTimeChoose('');
        setOpenTime(false);

        break;
      case 'today':
        const endOfDay = moment().endOf('day').format('yyyy-MM-DD');
        const startOfDay = moment().startOf('day').format('yyyy-MM-DD');
        setStartTime(`${startOfDay}T00:00:00.000Z`);
        setEndTime(`${endOfDay}T23:59:59.000Z`);

        setTimeChoose(moment(startOfDay).format('DD/MM/YY'));

        setEndTimeChoose('');
        setOpenTime(false);
        break;
      case '30DayBefore':
        const get30DayBeforNow = moment()
          .subtract(30, 'days')
          .format('yyyy-MM-DD');
        const getDayNow = moment().format('yyyy-MM-DD');

        const start = moment(get30DayBeforNow)
          .startOf('day')
          .format('yyyy-MM-DD');
        setStartTime(`${start}T00:00:00.000Z`);
        setEndTime(`${getDayNow}T23:59:59.000Z`);
        setTimeChoose(moment(start).format('DD/MM/YY'));
        setEndTimeChoose(moment(getDayNow).format('DD/MM/YY'));
        setOpenTime(false);
        break;
      case 'thisMonth':
        const endOfMonth = moment().endOf('month').format('yyyy-MM-DD');
        const startOfMonth = moment().startOf('month').format('yyyy-MM-DD');
        setStartTime(`${startOfMonth}T00:00:00.000Z`);
        setEndTime(`${endOfMonth}T23:59:59.000Z`);
        setTimeChoose(moment(startOfMonth).format('DD/MM/YY'));
        setEndTimeChoose(moment(endOfMonth).format('DD/MM/YY'));
        setOpenTime(false);
        break;
      case 'lastMonth':
        const lastMonth = moment().subtract(1, 'months').format('yyyy-MM');
        const endOfMonthBefor = moment(lastMonth)
          .endOf('month')
          .format('yyyy-MM-DD');
        const startOfMonthBefor = moment(lastMonth)
          .startOf('month')
          .format('yyyy-MM-DD');
        setStartTime(`${startOfMonthBefor}T00:00:00.000Z`);
        setEndTime(`${endOfMonthBefor}T23:59:59.000Z`);
        setTimeChoose(moment(startOfMonthBefor).format('DD/MM/YY'));
        setEndTimeChoose(moment(endOfMonthBefor).format('DD/MM/YY'));
        setOpenTime(false);
        break;
      case 'other':
        setOpenTime(true);

        break;
    }
  }, [valueCheckBox]);

  return (
    <LocalizationProvider locale={vi} dateAdapter={AdapterDateFns}>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          width: '100%'
        }}
      >
        <TypographyDate onClick={handleOpenCalendar}>
          {timeChoose} {endTimeChoose !== '' ? `-  ${endTimeChoose}` : ''}{' '}
        </TypographyDate>

        <SelectStyle
          style={{ marginTop: '4px' }}
          open={openDateOption}
          onOpen={handleOpenCalendar}
          onClose={() => {
            setOpenDateOption(false);
          }}
          onChange={(e) => setValueCheckBox(e.target.value)}
        >
          <MenuItem value="today">Hôm nay</MenuItem>
          <MenuItem value="yesterday">Hôm qua</MenuItem>
          <MenuItem value="30DayBefore">30 ngày</MenuItem>
          <MenuItem value="thisMonth">Tháng này</MenuItem>
          <MenuItem value="lastMonth">Tháng trước</MenuItem>
          <MenuItem value="other">Thời gian khác</MenuItem>
        </SelectStyle>
      </Box>
      {openTime && (
        <ClickAwayListener onClickAway={handleClickAway}>
          <Box style={{ position: 'relative', zIndex: '9999999' }}>
            <DateRangePicker
              locale={vi}
              editableDateInputs={false}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
            />
          </Box>
        </ClickAwayListener>
      )}
    </LocalizationProvider>
  );
}

export default Calendar;
